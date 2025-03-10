# Domite — A Library for DOM Element Manipulation

`Domite` is a library designed for efficient DOM element manipulation using iterators and action aggregation. It provides powerful tools for working with collections of elements, including selection of child elements, all descendants, elements to the left/right, and parent elements. The library supports filtering and querying using CSS selectors, and allows you to efficiently aggregate and perform actions on multiple elements at once.

Key features:
- **Iterators** for navigating elements: `node.ls` — child elements, `node.all` — all descendants, `node.prevAll` — elements to the left, `node.nextAll` — elements to the right, `node.parentAll` — all parent elements.
- **Filtering and searching** using CSS selectors.
- **Action aggregation**: the ability to apply operations or styles to an entire collection of elements at once.

These features make the library perfect for dynamic interfaces and complex DOM structures.

## Contents
- [Usage](#usage)
- [class Node](#class-node)
	- [Node.from()](#nodefrom)
	- [Node.hasNode()](#nodehasnode)
	- [Node.wrap()](#Nodewrap)
	- [Node.is()](#Nodeis)
	- [Node.tag()](#Nodetag)
	- [Node.query()](#Nodequery)
	- [Node.queryAll()](#NodequeryAll)
	- [Node.LS()](#NodeLS)
	- [Node.Attrs()](#NodeAttrs)
	- [node.tag](#nodetag)
	- [node.tagName](#nodetagName)
	- [node.document](#nodedocument)
	- [node.parent](#nodeparent)
	- [node.prevNode](#nodeprevNode)
	- [node.nextNode](#nodenextNode)
	- [node.hidden](#nodehidden)
	- [node.class](#nodeclass)
	- [node.style](#nodestyle)
	- [node.css](#nodecss)
	- [node.dataset](#nodedataset)
	- [node.attrs](#nodeattrs)
	- [node.text](#nodetext)
	- [node.html](#nodehtml)
	- [node.ls](#nodels)
	- [node.all](#nodeall)
	- [node.prevAll](#nodeprevAll)
	- [node.nextAll](#nodenextAll)
	- [node.vp](#nodevp)
	- [node.abs](#nodeabs)
	- [node.rel](#noderel)
	- [node.box](#nodebox)
	- [node.scr](#nodescr)
	- [node.constructor()](#nodeconstructor)
	- [node.on()](#nodeon)
	- [node.off()](#nodeoff)
	- [node.once()](#nodeonce)
	- [node.emit()](#nodeemit)
	- [node.dispatch()](#nodedispatch)
	- [node.observe()](#nodeobserve)
	- [node.show()](#nodeshow)
	- [node.hide()](#nodehide)
	- [node.toggleDisplay()](#nodetoggleDisplay)
	- [node.checkVisibility()](#nodecheckVisibility)
	- [node.click()](#nodeclick)
	- [node.blur()](#nodeblur)
	- [node.focus()](#nodefocus)
	- [node.scroll()](#nodescroll)
	- [node.scrollBy()](#nodescrollBy)
	- [node.scrollTo()](#nodescrollTo)
	- [node.scrollIntoView()](#nodescrollIntoView)
	- [node.animate()](#nodeanimate)
	- [node.requestFullscreen()](#noderequestFullscreen)
	- [node.cssAll()](#nodecssAll)
	- [node.matches()](#nodematches)
	- [node.closest()](#nodeclosest)
	- [node.isEqual()](#nodeisEqual)
	- [node.isSame()](#nodeisSame)
	- [node.contains()](#nodecontains)
	- [node.append()](#nodeappend)
	- [node.prepend()](#nodeprepend)
	- [node.before()](#nodebefore)
	- [node.after()](#nodeafter)
	- [node.add()](#nodeadd)
	- [node.remove()](#noderemove)
	- [node.replace()](#nodereplace)

- [class NodeLS](#class-nodels)
	- [node.ls.length](#nodelslength)
	- [node.ls.first](#nodelsfirst)
	- [node.ls.last](#nodelslast)
	- [node.ls.at()](#nodelsat)
	- [node.ls.replace()](#nodelsreplace)
	- [node.ls.clear()](#nodelsclear)
	- [node.ls.slice()](#nodelsslice)
	- [node.ls.splice()](#nodelssplice)
	- [node.ls.shift()](#nodelsshift)
	- [node.ls.pop()](#nodelspop)
	- [node.ls.push()](#nodelspush)
	- [node.ls.unshift()](#nodelsunshift)
	- [node.ls.reverse()](#nodelsreverse)
	- [node.ls.sort()](#nodelssort)
	- [node.ls.shuffle()](#nodelsshuffle)
	
- [class NodeIterator](#class-nodeiterator)
	- [NodeIterator.from()](#nodeiteratorfrom)
	- [NodeIterator.of()](#nodeiteratorof)
	- [NodeIterator.wrap()](#nodeiteratorwrap)
	- [iterator.ls](#iteratorls)
	- [iterator.all](#iteratorall)
	- [iterator.drop()](#iteratordrop)
	- [iterator.every()](#iteratorevery)
	- [iterator.filter()](#iteratorfilter)
	- [iterator.find()](#iteratorfind)
	- [iterator.flatMap()](#iteratorflatMap)
	- [iterator.forEach()](#iteratorforEach)
	- [iterator.map()](#iteratormap)
	- [iterator.reduce()](#iteratorreduce)
	- [iterator.some()](#iteratorsome)
	- [iterator.take()](#iteratortake)
	- [iterator.toArray()](#iteratortoArray)
	- [iterator.count()](#iteratorcount)
	- [iterator.depth()](#iteratordepth)
	- [iterator.texts()](#iteratortexts)
	- [iterator.htmls()](#iteratorhtmls)
	- [iterator.on()](#iteratoron)
	- [iterator.off()](#iteratoroff)
	- [iterator.once()](#iteratoronce)
	- [iterator.emit()](#iteratoremit)
	- [iterator.show()](#iteratorshow)
	- [iterator.hide()](#iteratorhide)
	- [iterator.toggleDisplay()](#iteratortoggleDisplay)
	- [iterator.css()](#iteratorcss)
	- [iterator.appendCSS()](#iteratorappendCSS)
	- [iterator.removeCSS()](#iteratorremoveCSS)
	- [iterator.clearCSS()](#iteratorclearCSS)
	- [iterator.addClass()](#iteratoraddClass)
	- [iterator.removeClass()](#iteratorremoveClass)
	- [iterator.toggleClass()](#iteratortoggleClass)
	- [iterator.replaceClass()](#iteratorreplaceClass)
	- [iterator.clearClasses()](#iteratorclearClasses)
	- [iterator.classes()](#iteratorclasses)
	- [iterator.attr()](#iteratorattr)
	- [iterator.removeAttr()](#iteratorremoveAttr)
	- [iterator.toggleAttr()](#iteratortoggleAttr)
	- [iterator.clearAttrs()](#iteratorclearAttrs)
	- [iterator.text()](#iteratortext)
	- [iterator.html()](#iteratorhtml)
	- [iterator.add()](#iteratoradd)
	- [iterator.remove()](#iteratorremove)
	- [iterator.indexOf()](#iteratorindexOf)
	- [iterator.includes()](#iteratorincludes)
	- [iterator.contains()](#iteratorcontains)
	- [iterator.queryAll()](#iteratorqueryAll)
	- [iterator.query()](#iteratorquery)
	- [iterator.filterClass()](#iteratorfilterClass)
	- [iterator.filterTag()](#iteratorfilterTag)
	- [iterator.filterVisible()](#iteratorfilterVisible)

## Usage

```js
	// Menu
	const node = new Node({name: 'nav'}); // create dom element
	node.add({name: 'a', text: 'Link 1'}); // add child 1
	node.add({name: 'a', text: 'Link 2'}); // add child 2
	...
	node.ls.css('color', 'red'); // add style to children
	node.ls.attr('href', '/'); // set attr to childrren
	node.ls.clear(); // remove childern
```

```js
	// Body
	const body = Node.query('body'); // get body element
	body.all.count(); // count all elements in body with body
	body.ls.query('.my-class').toArray(); // get all elements in body with class
```

## class Node

Class of DOM Element Wrapper

### Node.from(tag)	

Returns the first `Node` within the given `Element` matching the specified tag. If no matching node is found, it returns `null`.
#### Parameters:
- `tag` (**Element**): The element in which to search for the node.
#### Returns:
- **Node**: The first matching node.
- **null**: If no matching node is found.

### Node.hasNode(tag)

### Node.wrap()
### Node.is()
### Node.tag()
### Node.query()
### Node.queryAll()
### Node.LS()
### Node.Attrs()
### node.tag
### node.tagName
### node.document
### node.parent
### node.prevNode
### node.nextNode
### node.hidden
### node.class
### node.style
### node.css
### node.dataset
### node.attrs
### node.text
### node.html
### node.ls
### node.all
### node.prevAll
### node.nextAll
### node.vp
### node.abs
### node.rel
### node.box
### node.scr
### new Node()
### node.on()
### node.off()
### node.once()
### node.emit()
### node.dispatch()
### node.observe()
### node.show()
### node.hide()
### node.toggleDisplay()
### node.checkVisibility()
### node.click()
### node.blur()
### node.focus()
### node.scroll()
### node.scrollBy()
### node.scrollTo()
### node.scrollIntoView()
### node.animate()
### node.requestFullscreen()
### node.cssAll()
### node.matches()
### node.closest()
### node.isEqual()
### node.isSame()
### node.contains()
### node.append()
### node.prepend()
### node.before()
### node.after()
### node.add()
### node.remove()
### node.replace()

## class NodeLS
### node.ls.length
### node.ls.first
### node.ls.last
### node.ls.at(offset)
### node.ls.replace()
### node.ls.clear()
### node.ls.slice()
### node.ls.splice()
### node.ls.shift()
### node.ls.pop()
### node.ls.push()
### node.ls.unshift()
### node.ls.reverse()
### node.ls.sort(cb)
### node.ls.shuffle()

## class NodeIterator
### NodeIterator.from()
### NodeIterator.of()
### NodeIterator.wrap()
### iterator.ls
### iterator.all
### iterator.drop()
### iterator.every()
### iterator.filter()
### iterator.find()
### iterator.flatMap()
### iterator.forEach()
### iterator.map()
### iterator.reduce()
### iterator.some()
### iterator.take()
### iterator.toArray()
### iterator.count()
### iterator.depth()
### iterator.texts()
### iterator.htmls()
### iterator.on()
### iterator.off()
### iterator.once()
### iterator.emit()
### iterator.show()
### iterator.hide()
### iterator.toggleDisplay()
### iterator.css()
### iterator.appendCSS()
### iterator.removeCSS()
### iterator.clearCSS()
### iterator.addClass()
### iterator.removeClass()
### iterator.toggleClass()
### iterator.replaceClass()
### iterator.clearClasses()
### iterator.classes()
### iterator.attr()
### iterator.removeAttr()
### iterator.toggleAttr()
### iterator.clearAttrs()
### iterator.text(text)
### iterator.html(html)
### iterator.add(config)
### iterator.remove()
### iterator.indexOf()
### iterator.includes()
### iterator.contains()
### iterator.queryAll()
### iterator.query()
### iterator.filterClass()
### iterator.filterTag()
### iterator.filterVisible()
