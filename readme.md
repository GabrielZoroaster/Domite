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
	- [Node.from()](#nodefromtag)
	- [Node.hasNode()](#nodehasnodetag)
	- [Node.wrap()](#Nodewraptag)
	- [Node.is()](#Nodeisnode)
	- [Node.tag()](#Nodetagnode)
	- [Node.query()](#Nodequeryselector)
	- [Node.queryAll()](#NodequeryAllselector)
	- [Node.LS()](#NodeLSnode)
	- [Node.Attrs()](#NodeAttrsnode)
	- [new Node()](#nodeconstructorconfig)
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
	- [node.parentAll](#nodeprevAll)
	- [node.prevAll](#nodeprevAll)
	- [node.nextAll](#nodenextAll)
	- [node.vp](#nodevp)
	- [node.abs](#nodeabs)
	- [node.rel](#noderel)
	- [node.box](#nodebox)
	- [node.scr](#nodescr)
	- [node.on()](#nodeoneventType-listener-options)
	- [node.off()](#nodeoffeventType-listener-options)
	- [node.once()](#nodeonceeventType-listener-options)
	- [node.emit()](#nodeemiteventType)
	- [node.dispatch()](#nodedispatchevent)
	- [node.observe()](#nodeobserveoptionlistener)
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
	- [node.matches()](#nodematchesselector)
	- [node.closest()](#nodeclosestselector)
	- [node.isEqual()](#nodeisEqualnode)
	- [node.isSame()](#nodeisSamenode)
	- [node.contains()](#nodecontainsnode)
	- [node.append()](#nodeappend-nodes)
	- [node.prepend()](#nodeprepend-nodes)
	- [node.before()](#nodebefore-nodes)
	- [node.after()](#nodeafter-nodes)
	- [node.add()](#nodeaddconfig)
	- [node.remove()](#noderemove)
	- [node.replace()](#nodereplace-nodes)

- [class AttributeMap](#class-attributemap)
	- [node.attrs](#nodeattrs)
	- [node.attrs.length](#nodeattrslength)
	- [node.attrs.at(offset)](#nodeattrsatoffset)
	- [node.attrs.has(name)](#nodeattrshasname)
	- [node.attrs.get(name)](#nodeattrsgetname)
	- [node.attrs.set(name, value)](#nodeattrssetname-value)
	- [node.attrs.remove(name)](#nodeattrsremovename)
	- [node.attrs.toggle(name, force)](#nodeattrstogglename-force)
	- [node.attrs.clear()](#nodeattrsclear)
	- [node.attrs.setAll(attrs)](#nodeattrssetAllattrs)

- [class NodeLS](#class-nodels)
	- [node.ls.length](#nodelslength)
	- [node.ls.first](#nodelsfirst)
	- [node.ls.last](#nodelslast)
	- [node.ls.at()](#nodelsatoffset)
	- [node.ls.replace()](#nodelsreplace-nodes)
	- [node.ls.clear()](#nodelsclear)
	- [node.ls.slice()](#nodelsslicestart-end)
	- [node.ls.splice()](#nodelssplicestart-deleteCount-nodes)
	- [node.ls.shift()](#nodelsshift)
	- [node.ls.pop()](#nodelspop)
	- [node.ls.push()](#nodelspush-nodes)
	- [node.ls.unshift()](#nodelsunshift-nodes)
	- [node.ls.reverse()](#nodelsreverse)
	- [node.ls.sort()](#nodelssortcb)
	- [node.ls.shuffle()](#nodelsshuffle)
	
- [class NodeIterator](#class-nodeiterator)
	- [NodeIterator.from()](#nodeiteratorfrom-nodes)
	- [NodeIterator.of()](#nodeiteratorof-nodes)
	- [NodeIterator.wrap()](#nodeiteratorwrap-tags)
	- [iterator.ls](#iteratorls)
	- [iterator.all](#iteratorall)
	- [iterator.drop()](#iteratordroplimit)
	- [iterator.every()](#iteratoreverycb)
	- [iterator.filter()](#iteratorfiltercb)
	- [iterator.find()](#iteratorfindcb)
	- [iterator.flatMap()](#iteratorflatMapcb)
	- [iterator.forEach()](#iteratorforEachcb)
	- [iterator.map()](#iteratormapcb)
	- [iterator.reduce()](#iteratorreducecb-initValue)
	- [iterator.some()](#iteratorsomecb)
	- [iterator.take()](#iteratortakelimit)
	- [iterator.toArray()](#iteratortoArray)
	- [iterator.count()](#iteratorcount)
	- [iterator.depth()](#iteratordepth)
	- [iterator.texts()](#iteratortextstext)
	- [iterator.htmls()](#iteratorhtmlshtml)
	- [iterator.on()](#iteratoroneventType-listener-options)
	- [iterator.off()](#iteratoroffeventType-listener-options)
	- [iterator.once()](#iteratoronceeventType-listener-options)
	- [iterator.emit()](#iteratoremiteventType)
	- [iterator.show()](#iteratorshow)
	- [iterator.hide()](#iteratorhide)
	- [iterator.toggleDisplay()](#iteratortoggleDisplay)
	- [iterator.css()](#iteratorcssname-value)
	- [iterator.appendCSS()](#iteratorappendCSSname-value)
	- [iterator.removeCSS()](#iteratorremoveCSS)
	- [iterator.clearCSS()](#iteratorclearCSS)
	- [iterator.addClass()](#iteratoraddClass-tokens)
	- [iterator.removeClass()](#iteratorremoveClass-tokens)
	- [iterator.toggleClass()](#iteratortoggleClasstoken-force)
	- [iterator.replaceClass()](#iteratorreplaceClassoldToken-newToken)
	- [iterator.clearClasses()](#iteratorclearClasses)
	- [iterator.classes()](#iteratorclasses)
	- [iterator.attr()](#iteratorattrname-value)
	- [iterator.removeAttr()](#iteratorremoveAttrname)
	- [iterator.toggleAttr()](#iteratortoggleAttrname-force)
	- [iterator.clearAttrs()](#iteratorclearAttrs)
	- [iterator.text()](#iteratortexttext)
	- [iterator.html()](#iteratorhtmlhtml)
	- [iterator.add()](#iteratoraddconfig)
	- [iterator.remove()](#iteratorremove)
	- [iterator.indexOf()](#iteratorindexOfnode)
	- [iterator.includes()](#iteratorincludesnode)
	- [iterator.contains()](#iteratorcontainsnode)
	- [iterator.queryAll()](#iteratorqueryAllselector)
	- [iterator.query()](#iteratorqueryselector)
	- [iterator.filterClass()](#iteratorfilterClasstoken)
	- [iterator.filterTag()](#iteratorfilterTagname)
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
Checks if there is a `Node` within the given `Element` matching the specified tag. Returns `true` if a matching node is found, and `false` otherwise.
#### Parameters:
- `tag` (**Element**): The element in which to search for the node.
#### Returns:
- **boolean**: `true` if a matching node is found, `false` otherwise.

### Node.wrap(tag)
### Node.is(node)
### Node.tag(node)
### Node.query(selector)
### Node.queryAll(selector)
### Node.LS(node)
### Node.Attrs(node)

### new Node(config)
Constructor for the class, initializing the object with a set of parameters to create and configure a DOM element.
#### Parameters:
- `document` (**Document**): The document object, defaults to `window.document`.
- `name` (**string**): The tag name of the element, defaults to `"div"`.
- `tag` (**Element**): An existing DOM element to be used instead of creating a new one. By default, a new element with the tag `name` is created.
- `class`(#nodeclass) (**string**): The classes to be added to the element. see [node.class](#nodeclass).
- `style` (**string**): The style for the element. see [node.style](#nodestyle).
- `attrs` (**Object**): Attributes for the element. see [node.class](#nodeclass).
- `hidden` (**boolean**): If set to `true`, the element will be hidden.
- `on` (**Object**): Events to be bound to the element. The passed object should contain events and their corresponding handlers.
- `once` (**Object**): Events with `once` binding. Defines events that will trigger only once.
- `text` (**string**): The text content for the element.
- `html` (**string**): The HTML content for the element.
- `ls` (**any**): Children Nodes. see [node.ls](#nodels)
#### Example:
```javascript
const myElement = new Node({
    document: document,
    name: "div",
    class: "my-class",
    style: {color: "red"},
    attrs: {id: "my-element"},
    text: "Hello, World!",
    on: { click(){ console.log("Clicked!") }},
    once: { mousemove(){ console.log("Moved!") }},
});
```

### node.tag
Represents the tag of the DOM element associated with the `Node` instance.
#### Type:
- **Element**: The DOM element that this `Node` instance wraps.
#### Description:
The `node.tag` property provides direct access to the DOM element associated with the `Node` object. It allows interaction with the element’s properties, attributes, and methods.
#### Example:
```javascript
let node = new Node({ name: "div" });
console.log(node.tag);  // Logs the DOM element <div> associated with this Node instance.
```

### node.tagName
Returns the tag name of the DOM element associated with the `Node` instance, in uppercase.
#### Type:
- **string**: The tag name of the element (e.g., `"DIV"`, `"SPAN"`, etc.).

### node.document
Returns the document object that the `Node` instance is associated with.
#### Type:
- **Document**: The `Document` object containing the DOM element.

### node.parent
Gets or sets the parent `Node` instance of the current node.
#### Type:
- **Get:** `Node | null` – The parent `Node` instance or `null` if there is no parent.
- **Set:** Accepts one of the following:
  - **Node** – Sets the given `Node` as the parent.
  - **Element** – Wraps the given DOM element in a `Node` instance and sets it as the parent.
  - **object** – Creates a new `Node` from the provided configuration object and sets it as the parent.
  - **null** – Removes the current node from its parent.

### node.prevNode
Gets or sets the previous sibling `Node` of the current node.
- **Get:** `Node | null` – The previous sibling `Node` or `null` if there is no previous sibling.
- **Set:** Accepts one of the following:
  - **Node** – Sets the given `Node` as the previous sibling.
  - **Element** – Wraps the given DOM element in a `Node` instance and sets it as the previous sibling.
  - **object** – Creates a new `Node` from the provided configuration object and sets it as the previous sibling.

### node.nextNode
Gets or sets the next sibling `Node` of the current node.
- **Get:** `Node | null` – The next sibling `Node` or `null` if there is no next sibling.
- **Set:** Accepts one of the following:
  - **Node** – Sets the given `Node` as the next sibling.
  - **Element** – Wraps the given DOM element in a `Node` instance and sets it as the next sibling.
  - **object** – Creates a new `Node` from the provided configuration object and sets it as the next sibling.

### node.hidden
Gets or sets the visibility state of the node.
#### Type:
- **Get:** `boolean` – `true` if the node is hidden, `false` otherwise.
- **Set:** Accepts a `boolean` value:
  - `true` – Hides the node by setting the `hidden` attribute.
  - `false` – Makes the node visible by removing the `hidden` attribute.
### node.class
Gets or sets the class list of the node.
#### Type:
- **Get:** `DOMTokenList` – A live `DOMTokenList` representing the class list of the node.
- **Set:** Accepts one of the following:
  - **DOMTokenList** – Directly assigns an existing `DOMTokenList`.
  - **Iterable (Array, Set, etc.)** – Iterates over the provided values and updates the class list.
  - **String** – Splits the string by whitespace and updates the class list accordingly.
#### Description:
- Getting `node.class` returns the live `DOMTokenList`, which can be modified directly.
- Setting `node.class` updates the class list based on the provided value.
- Assigning a `DOMTokenList` transfers its contents to the node.
- Assigning an iterable (e.g., array, set) applies all values as separate class names.
- Assigning a string splits it by whitespace and applies each segment as a class.

#### Example:

```javascript
let node = new Node({ name: "div" });

node.class.add("red");
console.log(node.class.value);  // Logs: "red"

node.class = "blue bold";
console.log(node.class.value);  // Logs: "blue bold"

node.class = ["large", "rounded"];
console.log(node.class.value);  // Logs: "large rounded"
```

### node.style
Gets or sets the inline styles of the node.
#### Type:
- **Get:** `CSSStyleDeclaration` – A live `CSSStyleDeclaration` object representing the node's inline styles.
- **Set:** Accepts one of the following:
  - **CSSStyleDeclaration** – Directly assigns an existing `CSSStyleDeclaration`.
  - **StylePropertyMap** – Directly assigns an existing `StylePropertyMap`.
  - **Object** – An object where keys are CSS properties (camelCase or kebab-case) and values are their corresponding styles.
  - **String** – A valid CSS string applied as inline styles.
#### Description:
- Getting `node.style` returns a `CSSStyleDeclaration`, which allows modifying styles directly.
- Setting `node.style` with an object applies styles dynamically.
- Setting `node.style` with a string assigns it as `style.cssText`.
#### Example:
```js
let node = new Node({ name: "div" });

// Modify style directly
node.style.color = "red";
console.log(node.style.color);  // Logs: "red"

// Assigning a CSS string
node.style = "font-size: 16px; background-color: blue;";
console.log(node.style.fontSize);  // Logs: "16px"

// Assigning an object
node.style = { border: "1px solid black", padding: "10px" };
console.log(node.style.border);  // Logs: "1px solid black"
```

### node.css
Gets or sets the computed styles of the node.
#### Type:
- **Get:** `StylePropertyMap` – A `StylePropertyMap` representing the computed styles of the node.
- **Set:** Accepts the same types as [`node.style`](#node-style):

#### Example:

```javascript
let node = new Node({ name: "div" });

// Assigning a CSS string
node.css = "font-size: 16px; background-color: blue;";
console.log(node.css.get("font-size"));  // Logs: "16px"

// Assigning an object
node.css = { border: "1px solid black", padding: "10px" };
console.log(node.css.get("border"));  // Logs: "1px solid black"
```

### node.dataset

Gets or sets custom data attributes.
#### Type:
- **Get:** `DOMStringMap` – A map of data attributes (`data-*`).
- **Set:** Accepts an object where keys are attribute names (without `data-` prefix) and values are strings.
#### Example:
```javascript
node.dataset.id = "123";
console.log(node.dataset.id); // "123"

node.dataset = { user: "admin", theme: "dark" };
console.log(node.dataset.theme); // "dark"
```

### node.attrs
Gets or sets element attributes.
#### Type:
- **Get:** [`AttributeMap`](#class-AttributeMap) – A map of all attributes on the element.
- **Set:** Accepts an object where keys are attribute names and values are their corresponding values.

#### Example:
```javascript
node.attrs.set('id') = "main";
console.log(node.attrs.get('id')); // "main"

node.attrs = { role: "button", tabindex: "0" };
console.log(node.attrs.get('role')); // "button"
```

### node.text
Gets or sets text content of node

### node.html
Gets or sets html content of node

### node.ls
Gets or sets the child node list (NodeLS).
#### Type:
- **Get:** `NodeLS` – A list of child nodes, represented by `NodeLS`.
- **Set:** Accepts:
  - **Iterator** – An iterable of child nodes.
  - **`Node`** – A single child node to be added.
  - **`Element`** – A single DOM element that can be wrapped into a `Node`.
  - **Object** – An object that can be used to create a new `Node` (via `new Node(object)`).
#### Example:
```javascript
// Get the list of child nodes
let childNodes = node.ls;

// Set a single child node
node.ls = new Node({ name: "span" });

// Set multiple child nodes
node.ls = [new Node({ name: "div" }), new Node({ name: "p" })];

// Set from a DOM element
node.ls = document.createElement("section");

// Set from an object
node.ls = {name: "div", text: "Some text"};
```

### node.all
Gets an iterator for all descendants of the node, including the node itself.
#### Type:
- **Get:** `NodeIterator` – An iterator that traverses the node and all its descendants.
#### Description:
- The iterator includes the node itself and all its descendants (children, grandchildren, etc.).
- You can use it to loop over the node and all nested elements.
#### Example:
```javascript
let iterator = node.all;

for (let descendant of iterator) {
  console.log(descendant);  // Logs each node in the hierarchy
}
```

### node.parentAll
Gets an iterator for all ancestor nodes.
#### Type:
- **Get:** `NodeIterator` – An iterator that traverses all parent nodes up to the root.

#### Description:
- Returns an iterator that starts from the node’s direct parent and moves up the hierarchy.
- The root node (without a parent) is the last in the sequence.

### node.prevAll
Gets an iterator for all preceding sibling nodes.
#### Type:
- **Get:** `NodeIterator` – An iterator that traverses all previous siblings in order.
#### Description:
- Returns an iterator that starts from the node’s previous sibling and moves left (toward the first sibling).
- Does not include the node itself.

### node.nextAll
Gets an iterator for all following sibling nodes.
#### Type:
- **Get:** `NodeIterator` – An iterator that traverses all next siblings in order.
#### Description:
- Returns an iterator that starts from the node’s next sibling and moves right (toward the last sibling).
- Does not include the node itself.

### node.vp
### node.abs
### node.rel
### node.box
### node.scr
### node.on(eventType, listener, options)
### node.off(eventType, listener, options)
### node.once(eventType, listener, options)
### node.emit(eventType)
### node.dispatch(event)
### node.observe(options, listener)

### node.show()
Makes the node visible by removing the `hidden` attribute and setting relevant styles.

### node.hide()
Hides the node by setting the `hidden` attribute.

### node.toggleDisplay()
Toggles the visibility of the node by switching its `display` style between `none` and its previous value.
#### Returns:
- **`boolean`** – `true` if the node is now visible, `false` if it is hidden.
#### Example:

```javascript
if (node.toggleDisplay()) {
  console.log("Node is now visible");
} else {
  console.log("Node is now hidden");
}
```

### node.checkVisibility()
Checks if the node is visible in the document.
#### Returns:
- **`boolean`** – `true` if the node is visible, `false` otherwise.
#### Description:
- A shorthand for the native [`Element.checkVisibility()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/checkVisibility) method.
- Considers CSS properties like `display: none`, `visibility: hidden`, and `opacity: 0`.
- Also checks if the element is in the viewport and not covered by other elements.

#### Example:

```javascript
if (node.checkVisibility()) {
  console.log("Node is visible");
} else {
  console.log("Node is hidden");
}
```

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
### node.matches(selector)
### node.closest(selector)
### node.isEqual(node)
### node.isSame(node)
### node.contains(node)
### node.append(... nodes)
### node.prepend(... nodes)
### node.before(... nodes)
### node.after(... nodes)
### node.add(config)
### node.remove()
### node.replace(... nodes)

## class AttriibuteMaps
### node.attrs.length
Gets count of attrubutes

### node.attrs.at(offset)
Gets attrubutes value by position

### node.attrs.has(name)
Check is attribute exists

### node.attrs.get(name)
Gets attrubute value

### node.attrs.set(name, value)
Sets attrubute value

### node.attrs.remove(name)
Remove attribute

### node.attrs.toggle(name, force)
Toggle attribute

### node.attrs.clear()
Clear all attributes in node

### node.attrs.setAll(attrs)
Replace all attributes in node. see [node.attrs](#nodeattrs)

## class NodeLS
### node.ls.length
### node.ls.first
### node.ls.last
### node.ls.at(offset)
### node.ls.replace(... nodes)
### node.ls.clear()
### node.ls.slice(start, end)
### node.ls.splice(start, deleteCount, ... nodes)
### node.ls.shift()
### node.ls.pop()
### node.ls.push(... nodes)
### node.ls.unshift(... nodes)
### node.ls.reverse()
### node.ls.sort(cb)
### node.ls.shuffle()

## class NodeIterator
### NodeIterator.from()
### NodeIterator.of()
### NodeIterator.wrap()
### iterator.ls
### iterator.all
### iterator.drop(limit)
### iterator.every(cb)
### iterator.filter(cb)
### iterator.find(cb)
### iterator.flatMap(cb)
### iterator.forEach(cb)
### iterator.map(cb)
### iterator.reduce(cb, initValue)
### iterator.some(cb)
### iterator.take(limit)
### iterator.toArray()
### iterator.count()
### iterator.depth()
### iterator.texts(text)
### iterator.htmls(html)
### iterator.on(eventType, listener, options)
### iterator.off(eventType, listener, options)
### iterator.once(eventType, listener, options)
### iterator.emit(eventType)
### iterator.show()
### iterator.hide()
### iterator.toggleDisplay()
### iterator.css(name, value)
### iterator.appendCSS(name, value)
### iterator.removeCSS(name)
### iterator.clearCSS()
### iterator.addClass(... tokens)
### iterator.removeClass(... tokens)
### iterator.toggleClass(token, force)
### iterator.replaceClass(oldToken, newToken)
### iterator.clearClasses()
### iterator.classes()
### iterator.attr(name, value)
### iterator.removeAttr(name)
### iterator.toggleAttr(name, force)
### iterator.clearAttrs()
### iterator.text(text)
### iterator.html(html)
### iterator.add(config)
### iterator.remove()
### iterator.indexOf(node)
### iterator.includes(node)
### iterator.contains(node)
### iterator.queryAll(selector)
### iterator.query(selector)
### iterator.filterClass(token)
### iterator.filterTag(name)
### iterator.filterVisible()
