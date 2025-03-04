
export {NodeCollection, NodeIterator}

import {Node} from './node.js'

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

function * LS(target){
	for(const node of target)
		yield * node.ls;
}

function * ALL(target){
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
			node.style.removeProperty(name, value);
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
		return new NodeIterator(LS(this));
	}

	get all(){
		return new NodeIterator(ALL(this));
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