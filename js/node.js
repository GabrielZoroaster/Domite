
export {Node}

import {NodeCollection, NodeIterator} from './ls.js'
import {AttributeMap} from './attrs.js'

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
		if(text)
			this.text = text;
		if(html)
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
		else if(IsIterale(classList)){
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
		this.append(new Node(config));
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