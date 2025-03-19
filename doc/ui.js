
export {UI}

import {Node} from '../lib/node.js'	

class Chapter extends Node {

	static from(title, {type, ... chapter}){
		switch(type){
			case 'class': return new Class(title, chapter);
			case 'function': return new Function(title, chapter);
		}	return new Chapter(title);
	}

	#header = new Node({name: 'h3'});
	#content = new Node({class: 'content'});

	constructor(title){
		super({name: 'section'});
		this.append(this.header, this.content);
		this.header.text = title;
		this.header.on('click', () => this.toggle());
	}

	get header(){
		return this.#header;
	}

	get content(){
		return this.#content;
	}

	toggle(){
		this.class.toggle('expanded');
	}
}

class Index extends Node {

	constructor(chapters){
		super({class: 'index'});
		for(const [title, chapter] of Object.entries(chapters))
			this.append(Chapter.from(title, chapter));
	}
}

class UI extends Chapter {

	constructor({title, index}){
		super(title);
		this.class.add('api');
		this.content.append(new Index(index));
	}
}

class Class extends Chapter {

	constructor(title, {props}){
		super(title);
		this.class.add('class');
		this.content.append(new Index(props));
	}
}

class Function extends Chapter {}