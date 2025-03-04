
export {AttributeMap}

function IsAttributeMap(attrs){
	if(attrs instanceof AttributeMap)
		return true;
	if(attrs instanceof NamedNodeMap)
		return true;
	return false;
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