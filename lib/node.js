
export {Node, NodeIterator}

const Nodes = new WeakMap();
const DefaultTagName = 'div';
const DefaultDocument = document;

function IsString(value){
	return typeof value === 'string';
}

function IsObject(value){
	return value && typeof value === 'object';
}

function IsFunction(value){
	return typeof value === 'function';
}

function IsIterable(value){
	return IsObject(value) && IsFunction(value[Symbol.iterator]);
}

function IsCSSStyleDeclaration(value){
	return value instanceof CSSStyleDeclaration;
}

function IsAttributeMap(attrs){
	if(attrs instanceof AttributeMap)
		return true;
	if(attrs instanceof NamedNodeMap)
		return true;
	return false;
}

function InvalidNode(){
	return new TypeError('invalid node value');
}

function NodeFrom(value){
	if(value instanceof Node)
		return value;
	throw InvalidNode();
}

function TagFrom(value){
	return NodeFrom(value).tag;
}

function * ALL(node){
	yield * node.ls.all;
	yield node;
}

function SetOn(target, listeners){
	for(const [eventType, listener] of Object.entries(listeners))
		target.on(eventType, listener);
}

function SetOnce(target, listeners){
	for(const [eventType, listener] of Object.entries(listeners))
		target.once(eventType, listener);
}

function CompareNodes(a, b){
	if(a.text > b.text)
		return 1;
	if(a.text < b.text)
		return - 1;
	return 0;
}

function * FromTags(tags){
	for(const tag of tags)
		yield Node.from(tag);
}

function * FilterClass(target, token){
	for(const node of target)
		if(node.class.contains(token))
			yield node;
}

function * FilterTag(target, name){
	for(const node of target)
		if(node.tagName === String(name).toUpperCase())
			yield node;
}

function * FilterVisible(target){
	for(const node of target)
		if(node.checkVisibility())
			yield node;
}

function * QueryAll(target, selector){
	for(const node of target)
		if(node.matches(selector))
			yield node;
}

function * LSLS(target){
	for(const node of target)
		yield * node.ls;
}

function * LSALL(target){
	for(const node of target)
		yield * node.all;
}

function ToInt(value){
	return Math.trunc(value) || 0;
}

function ToIndex(value, length){
	value = ToInt(value);
	if(value < 0) return Math.max(0, value + length);
	if(value > length) return length;
	return value;
}

function * Slice(target, start = 0, end = target.length){
	start = ToIndex(start, target.length);
	end = ToIndex(end, target.length);
	for(; start < end; start ++)
		yield target.at(start);
}

function Splice(target, args){
	const deleted = [];
	if(args.length > 0){
		let [start, deleteCount = Infinity, ... inserted] = args;
		start = ToIndex(start, target.length);
		console.log(start);
		deleteCount = ToInt(deleteCount);
		while((deleted.length < deleteCount) && (start < target.length)){
			const next = target.at(start);
			deleted.push(next);
			next.remove();
		}
		const next = target.at(start);
		next ? next.before(... inserted) : target.push(... inserted);
	}	return deleted;
}

class Node {

	static from(tag){
		return Nodes.get(tag) ?? null;
	}

	static hasNode(tag){
		return Nodes.has(tag);
	}

	static is(node){
		try {
			node.#tag;
			return true;
		} catch {
			return false;
		}
	}

	static tag(node){
		try {
			return node.#tag;
		} catch {
			throw new InvalidNode();
		}
	}

	#tag;
	#ls;
	#attrs;

	constructor({
		document = DefaultDocument,
		name = DefaultTagName,
		tag = document.createElement(name),
		class: classArg,
		style,
		attrs,
		hidden,
		on,
		once,
		text,
		html,
		ls,
	} = {}){
		this.#tag = tag;
		this.#ls = new NodeCollection(this.tag);
		this.#attrs = new AttributeMap(this.tag);
		Nodes.set(this.tag, this);
		if(classArg)
			this.class = classArg;
		if(attrs)
			this.attrs = attrs;
		if(style)
			this.style = style;
		if(hidden)
			this.hidden = true;
		if(on)
			SetOn(this, on);
		if(once)
			SetOnce(this, once);
		if(ls)
			this.ls = ls;
		else if(text)
			this.text = text;
		else if(html)
			this.html = html;
	}

	get tag(){
		return this.#tag;
	}

	get tagName(){
		return this.tag.tagName;
	}

	get ownerDocument(){
		return this.tag.ownerDocument;
	}

	get isConnected(){
		return this.tag.isConnected;
	}

	// Events

	on(eventType, listener, options){
		this.tag.addEventListener(eventType, listener, options);
		return this;
	}

	off(eventType, listener, options){
		this.tag.removeEventListener(eventType, listener, options);
		return this;
	}

	once(eventType, listener, options){
		this.on(eventType, listener, {once: true, ... options});
		return this;
	}

	emit(eventType){
		this.dispatch(new Event(eventType));
		return this;
	}

	dispatch(event){
		this.tag.dispatchEvent(event);
		return this;
	}

	click(){
		this.tag.click();
	}

	blur(){
		this.tag.blur();
	}

	focus(){
		this.tag.focus();
	}

	animate(... args){
		return this.tag.animate(... args);
	}

	// Display

	get hidden(){
		return this.tag.hidden;
	}

	set hidden(value){
		this.tag.hidden = value;
	}

	show(){
		this.hidden = false;
	}

	hide(){
		this.hidden = true;
	}

	toggleDisplay(){
		this.hidden = !this.hidden;
	}

	checkVisibility(options){
		return this.tag.checkVisibility(options);
	}

	// Style

	get style(){
		return this.tag.style;
	}

	set style(style){
		if(IsString(style))
			this.tag.style = style;
		else if(IsObject(style)){
			this.tag.style = '';
			if(IsCSSStyleDeclaration(style)){
				for(const name of style)
					this.style.setProperty(name, style[name]);
			} else {
				for(const [name, value] of Object.entries(style))
					this.style.setProperty(name, value);
			}
		}
	}

	// Class

	get class(){
		return this.tag.classList;
	}

	set class(classList){
		if(IsString(classList))
			this.tag.classList = classList;
		else if(IsIterable(classList)){
			this.tag.classList = '';
			for(const token of classList)
				this.class.add(token);
		}
	}

	// Attributes

	get attrs(){
		return this.#attrs;
	}

	set attrs(attrs){
		this.attrs.setAll(attrs);
	}

	get dataset(){
		return this.tag.dataset;
	}

	// Content

	get html(){
		return this.tag.innerHTML;
	}

	set html(html){
		this.tag.innerHTML = html;
	}

	get text(){
		return this.tag.innerText;
	}

	set text(text){
		this.tag.innerText = text;
	}

	// DOM

	get parentNode(){
		return Node.from(this.tag.parentNode);
	}

	get prevNode(){
		return Node.from(this.tag.previousSibling);
	}

	get nextNode(){
		return Node.from(this.tag.nextSibling);
	}

	get ls(){
		return this.#ls;
	}

	get all(){
		return new NodeIterator(ALL(this));
	}

	set ls(ls){
		if(Node.is(ls))
			this.ls.replace(ls);
		else
			this.ls.replace(... ls);
	}

	isEqual(node){
		return this.tag.isEqualNode(Node.from(node) ?? node);
	}

	isSame(node){
		return this.tag.isSameNode(Node.from(node) ?? node);
	}

	contains(node){
		try {
			return this.tag.contains(node.#tag);
		} catch {
			return false;
		}
	}

	append(... nodes){
		this.tag.append(... nodes.map(Node.tag));
	}

	prepend(... nodes){
		this.tag.append(... nodes.map(Node.tag));
	}

	before(... nodes){
		this.tag.before(... nodes.map(Node.tag));
	}

	after(... nodes){
		this.tag.after(... nodes.map(Node.tag));
	}

	add(config){
		const node = new Node(config);
		this.append(node);
		return node;
	}

	remove(){
		this.tag.remove();
	}

	replace(... args){
		return this.tag.replaceWith(... args.map(Node.tag));
	}

	// CSS

	matches(selector){
		return this.tag.matches(selector);
	}
}

class AttributeMap {

	#tag;

	constructor(tag){
		this.#tag = tag;
	}

	get tag(){
		return this.#tag;
	}

	get length(){
		return this.tag.attributes.length;
	}

	at(offset){
		return this.tag.attributes[offset];
	}

	has(name){
		return this.tag.hasAttribute(name);
	}

	get(name){
		return this.tag.getAttribute(name);
	}

	set(name, value){
		return this.tag.setAttribute(name, value);
	}

	remove(name){
		return this.tag.removeAttribute(name);
	}

	toggle(name, force){
		return this.tag.toggleAttribute(name, force);
	}

	clear(){
	  while (this.length > 0)
	    this.remove(this.at(0).name);
	}

	* [Symbol.iterator](){
		yield * this.tag.attributes;
	}

	setAll(attrs){
		this.clear();
		if(IsAttributeMap(attrs)){
			for(const attr of attrs)
				this.set(attr.name, attr.value);
		} else {
			for(const [name, value] of Object.entries(attrs))
				this.set(name, value);
		}
	}
}

class NodeList {

	* list(){
		// node generator
	}

	// Iterator

	drop(limit){
		return new NodeIterator(this.list().drop(limit));
	}

	every(cb){
		return this.list().every(cb);
	}

	filter(cb){
		return new NodeIterator(this.list().filter(cb));
	}

	find(cb){
		return this.list().find(cb);
	}

	flatMap(cb){
		return this.list().flatMap(cb);
	}

	forEach(cb){
		return this.list().forEach(cb);
	}

	map(cb){
		return this.list().map(cb);
	}

	reduce(cb, ... args){
		return this.list().reduce(cb, ... args);
	}

	some(cb){
		return this.list().some(cb);
	}

	take(limit){
		return new NodeIterator(this.list().take(limit));
	}

	toArray(){
		return this.list().toArray();
	}

	count(){
		let count = 0;
		for(const node of this)
			count ++;
		return count;
	}

	[Symbol.iterator](){
		return this.list();
	}

	// Events

	on(eventType, listener, options){
		for(const node of this)
			node.on(eventType, listener, options);
	}

	off(eventType, listener, options){
		for(const node of this)
			node.off(eventType, listener, options);
	}

	once(eventType, listener, options){
		for(const node of this)
			node.once(eventType, listener, options);
	}

	emit(eventType){
		for(const node of this)
			node.emit(eventType);
	}

	// Display

	show(){
		for(const node of this)
			node.show();
	}

	hide(){
		for(const node of this)
			node.hide();
	}

	toggleDisplay(){
		for(const node of this)
			node.toggleDisplay();
	}

	// Style

	css(name, value){
		for(const node of this)
			node.style.setProperty(name, value);
	}

	removeCSS(name){
		for(const node of this)
			node.style.removeProperty(name);
	}

	// Class

	addClass(... args){
		for(const node of this)
			node.class.add(... args);
	}

	removeClass(... args){
		for(const node of this)
			node.class.remove(... args);
	}

	toggleClass(token, force){
		for(const node of this)
			node.class.toggle(token, force);
	}

	replaceClass(oldToken, newToken){
		for(const node of this)
			node.class.replace(oldToken, newToken);
	}

	// Attrs

	attr(name, value){
		for(const node of this)
			node.attrs.set(name, value);
	}

	removeAttr(name){
		for(const node of this)
			node.attrs.remove(name);
	}

	toggleAttr(name, force){
		for(const node of this)
			node.attrs.toggle(name, force);
	}

	// Content

	text(text){
		for(const node of this)
			node.text = text;
	}

	html(html){
		for(const node of this)
			node.html = html;
	}

	// DOM

	add(config){
		for(const node of this)
			node.add(config);
	}

	remove(){
		for(const node of this.toArray())
			node.remove();
	}

	includes(value){
		if(Node.is(value)){
			for(const node of this)
				if(node === value)
					return true;
		}	return false;
	}

	contains(value){
		if(Node.is(value)){
			for(const node of this)
				if(node.contains(value))
					return true;
		}	return false;
	}

	get ls(){
		return new NodeIterator(LSLS(this));
	}

	get all(){
		return new NodeIterator(LSALL(this));
	}

	// Filters

	queryAll(selector){
		return new NodeIterator(QueryAll(this, selector));
	}

	query(selector){
		for(const node of this)
			if(node.matches(selector))
				return node;
		return null;
	}

	filterClass(token){
		return new NodeIterator(FilterClass(this, token));
	}

	filterTag(name){
		return new NodeIterator(FilterTag(this, name));
	}

	filterVisible(){
		return new NodeIterator(FilterVisible(this));
	}
}

class NodeIterator extends NodeList {

	static from(iterable){
		return new NodeIterator(Iterator.from(iterable));
	}

	static of(... args){
		return this.from(args);
	}

	static fromTags(tags){
		return new NodeIterator(FromTags(tags));
	}

	#list;

	constructor(iterator){
		super();
		this.#list = iterator;
	}

	list(){
		return this.#list;
	}
}

class NodeCollection extends NodeList {

	#tag;

	constructor(tag){
		super();
		this.#tag = tag;
	}

	get tag(){
		return this.#tag;
	}

	* list(){
		for(const tag of this.tag.children){
			const node = Node.from(tag);
			if(node) yield node;
		}
	}

	get length(){
		return this.tag.childElementCount;
	}

	get first(){
		return Node.from(this.tag.firstChild);
	}

	get last(){
		return Node.from(this.tag.lastChild);
	}

	at(offset){
		return Node.from(this.tag.children[offset]);
	}

	count(){
		return this.length;
	}

	replace(... args){
		this.tag.replaceChildren(... args.map(Node.tag));
	}

	clear(){
		this.replace();
	}

	remove(){
		this.clear();
	}

	slice(start, end){
		return new NodeIterator(Slice(this, start, end));
	}

	splice(... args){
		return NodeIterator.from(Splice(this, args));
	}

	shift(){
		const first = this.first;
		if(first){
			first.remove();
			return first;
		}	return null;
	}

	pop(){
		const last = this.last;
		if(last){
			last.remove();
			return last;
		}	return null;
	}

	push(... args){
		this.tag.append(... args.map(Node.tag));
	}

	unshift(... args){
		this.tag.prepend(... args.map(Node.tag));
	}

	// Sorting

	reverse(){
		const last = this.first;
		while(this.last !== last)
			last.before(this.last);
	}

	sort(cb = CompareNodes){
		for(const node of this.toArray().sort(cb))
			this.tag.append(Node.tag(node));
	}

	shuffle(){
		this.sort(() => Math.random() - 0.5);
	}

	// CSS

	query(selector){
		return Node.from(this.tag.querySelector(selector));
	}

	queryAll(selector){
		return NodeIterator.fromTags(this.tag.querySelectorAll(selector));
	}

	filterClass(token){
		return NodeIterator.fromTags(this.tag.getElementsByClassName(token));
	}

	filterTag(name){
		return NodeIterator.fromTags(this.tag.getElementsByTagName(name));
	}
}