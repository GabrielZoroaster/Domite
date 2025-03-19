
export default {
	"title": "Domite 1.0",
	"index": {
		"function $(... args)": {
			"desc": "A flexible function that selects, wraps, or creates nodes and returns a <code>NodeIterator</code>`. Each argument can be a reference to an existing node, a selector string, or an object that will be converted into a new node.",
		},
		"class Node": {
			type: "class",
			props: {
				"Node.of(element)": {},
				"Node.hasNode(element)": {},
				"Node.is(value)": {},
				"Node.tag(node)": {},
				"Node.query(selector)": {},
				"Node.queryAll(selector)": {},
				"Node.wrap(selector)": {},
				"Node.wrapAll(selector)": {},
				"Node.LS(node)": {},
				"Node.Attrs(node)": {},
				"new Node(config)": {},
				"node.tag": {},
				"node.tagName": {},
				"node.document": {},
				"node.parent": {},
				"node.prevNode": {},
				"node.nextNode": {},
				"node.hidden": {},
				"node.class": {},
				"node.style": {},
				"node.dataset": {},
				"node.attrs": {},
				"node.text": {},
				"node.html": {},
				"node.ls": {},
				"node.all": {},
				"node.parentAll": {},
				"node.prevAll": {},
				"node.nextAll": {},
				"node.vp": {},
				"node.abs": {},
				"node.rel": {},
				"node.box": {},
				"node.scr": {},
				"node.on(eventType, listener, options)": {},
				"node.off(eventType, listener, options)": {},
				"node.once(eventType, listener, options)": {},
				"node.emit(eventType)": {},
				"node.dispatch(event)": {},
				"node.observe(options, listener)": {},
				"node.show()": {},
				"node.hide()": {},
				"node.toggleDisplay()": {},
				"node.checkVisibility()": {},
				"node.click()": {},
				"node.blur()": {},
				"node.focus()": {},
				"node.scroll(x, y)": {},
				"node.scrollBy(x, y)": {},
				"node.scrollTo(x, y)": {},
				"node.scrollIntoView(options)": {},
				"node.animate(keyframes, options)": {},
				"node.requestFullscreen()": {},
				"node.matches(selector)": {},
				"node.closest(selector)": {},
				"node.isEqual(node)": {},
				"node.isSame(node)": {},
				"node.contains(node)": {},
				"node.append(... nodes)": {},
				"node.prepend(... nodes)": {},
				"node.before(... nodes)": {},
				"node.after(... nodes)": {},
				"node.replace(... nodes)": {},
				"node.add(config)": {},
				"node.remove()": {},
			},
		},
		"class AttributeMap": {
			type: "class",
			props: {
				"node.attrs.length": {},
				"node.attrs.at(index)": {},
				"node.attrs.has(name)": {},
				"node.attrs.get(name)": {},
				"node.attrs.set(name, value)": {},
				"node.attrs.remove(name)": {},
				"node.attrs.toggle(name, force)": {},
				"node.attrs.clear()": {},
				"node.attrs.replace(attrs)": {},
			},
		},
		"class NodeLS": {
			type: "class",
			props: {
				"node.ls.length": {},
				"node.ls.first": {},
				"node.ls.last": {},
				"node.ls.at(index)": {},
				"node.ls.replace(... nodes)": {},
				"node.ls.clear()": {},
				"node.ls.slice(start, end)": {},
				"node.ls.splice(start, deleteCount, ... nodes)": {},
				"node.ls.shift()": {},
				"node.ls.pop()": {},
				"node.ls.push(... nodes)": {},
				"node.ls.unshift(... nodes)": {},
				"node.ls.sort(cb)": {},
				"node.ls.reverse()": {},
				"node.ls.shuffle()": {},
				"node.ls.query(selector)": {},
				"node.ls.queryAll(selector)": {},
			},
		},
		"class NodeIterator": {
			type: "class",
			props: {
				"NodeIterator.from()": {},
				"NodeIterator.of()": {},
				"NodeIterator.wrap()": {},
				"iterator.ls": {},
				"iterator.all": {},
				"iterator.drop(limit)": {},
				"iterator.take(limit)": {},
				"iterator.filter(cb)": {},
				"iterator.find(cb)": {},
				"iterator.forEach(cb)": {},
				"iterator.every(cb)": {},
				"iterator.some(cb)": {},
				"iterator.map(cb)": {},
				"iterator.flatMap(cb)": {},
				"iterator.reduce(cb)": {},
				"iterator.toArray()": {},
				"iterator.count()": {},
				"iterator.depth()": {},
				"iterator.texts()": {},
				"iterator.htmls()": {},
				"iterator.indexOf(node)": {},
				"iterator.includes(node)": {},
				"iterator.contains(node)": {},
				"iterator.match(selector)": {},
				"iterator.matchAll(selector)": {},
				"iterator.matchText(pattern)": {},
				"iterator.matchHTML(pattern)": {},
				"iterator.filterClass(token)": {},
				"iterator.filterTag(name)": {},
				"iterator.filterVisible()": {},
				"iterator.on(eventType, listener, options)": {},
				"iterator.off(eventType, listener, options)": {},
				"iterator.once(eventType, listener, options)": {},
				"iterator.emit(eventType)": {},
				"iterator.show()": {},
				"iterator.hide()": {},
				"iterator.toggleDisplay()": {},
				"iterator.css(name, value)": {},
				"iterator.removeCSS(name)": {},
				"iterator.clearCSS()": {},
				"iterator.addClass(... tokens)": {},
				"iterator.removeClass(... tokens)": {},
				"iterator.toggleClass(token, force)": {},
				"iterator.replaceClass(oldToken, newToken)": {},
				"iterator.clearClasses()": {},
				"iterator.classes()": {},
				"iterator.attr(name, value)": {},
				"iterator.removeAttr(name)": {},
				"iterator.toggleAttr(name, force)": {},
				"iterator.clearAttrs()": {},
				"iterator.text(text)": {},
				"iterator.html(html)": {},
				"iterator.add(config)": {},
				"iterator.remove()": {},
			},
		},
	},
};