# Domite — A Library for DOM Element Manipulation

`Domite` is a library designed for efficient DOM element manipulation using iterators and action aggregation. It provides powerful tools for working with collections of elements, including selection of child elements, all descendants, elements to the left/right, and parent elements. The library supports filtering and querying using CSS selectors, and allows you to efficiently aggregate and perform actions on multiple elements at once.

Key features:
- **Iterators** for navigating elements: `node.ls` — child elements, `node.all` — all descendants, `node.prevAll` — elements to the left, `node.nextAll` — elements to the right, `node.parentAll` — all parent elements.
- **Filtering and searching** using CSS selectors.
- **Action aggregation**: the ability to apply operations or styles to an entire collection of elements at once.

These features make the library perfect for dynamic interfaces and complex DOM structures.

---
## Contents
- [Usage](#usage)
	- [1. Creating New Nodes](#1-Creating-New-Nodes)
	- [2. Custom Node Classes](#2-Custom-Node-Classes)
	- [3. Inserting into the Page](#3-Inserting-into-the-Page)
	- [4. Finding Nodes on the Page](#4-Finding-Nodes-on-the-Page)
	- [5. Iterators](#5-Iterators)
- [function $()](#args)
- [class Node](#class-node)
	- [Node.of()](#nodeoftag)
	- [Node.hasNode()](#nodehasnodetag)
	- [Node.is()](#Nodeisnode)
	- [Node.tag()](#Nodetagnode)
	- [Node.query()](#fNodequeryselector)
	- [Node.queryAll()](#NodequeryAllselector)
	- [Node.wrap()](#Nodewrapselector)
	- [Node.wrapAll()](#NodewrapAllselector)
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
	- [node.parentAll](#nodeparentAll)
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
	- [node.replace()](#nodereplace-nodes)
	- [node.add()](#nodeaddconfig)
	- [node.remove()](#noderemove)

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
	- [node.attrs.replace(attrs)](#nodeattrsreplaceattrs)

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
	- [node.ls.sort()](#nodelssortcb)
	- [node.ls.reverse()](#nodelsreverse)
	- [node.ls.shuffle()](#nodelsshuffle)
	- [node.ls.query(selector)](#nodelsqueryselector)
	- [node.ls.queryAll(selector)](#nodelsqueryAllselector)
	
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
	- [iterator.texts()](#iteratortexts)
	- [iterator.htmls()](#iteratorhtmls)
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
	- [iterator.match()](#iteratormatchselector)
	- [iterator.matchAll()](#iteratormatchAllselector)
	- [iterator.matchText()](#iteratormatchTextpattern)
	- [iterator.matchHTML()](#iteratormatchHTMLpattern)
	- [iterator.filterClass()](#iteratorfilterClasstoken)
	- [iterator.filterTag()](#iteratorfilterTagname)
	- [iterator.filterVisible()](#iteratorfilterVisible)
- [Methods Available through](#Methods-Available-through)

## Usage
### 1. Creating New Nodes  
```js
import {Node} from './node.js'
// Create a new div node
const node = new Node({name: "div"});

// Set text content
node.text = "Hello, World!";

// Add CSS classes
node.class.add("custom-class");

// Append it to the body of the page
document.body.append(node.tag);
```

---

### 2. Custom Node Classes
```js
// Define a custom node class with child elements
class CardNode extends Node {
  constructor(title, content) {
    super({name: "div"});
    this.class.add("card");

    // Create title element
    this.title = new Node("h2");
    this.title.text = title;
    this.title.class.add("card-title");

    // Create content element
    this.content = new Node("p");
    this.content.text = content;
    this.content.class.add("card-content");

    // Append children to the card
    this.append(this.title, this.content);
  }
}

// Create a new card instance
const card = new CardNode("Welcome!", "This is a simple card component.");

// Add to the document
document.body.append(card.tag);
```

---

### 3. Inserting into the Page
```js
// 1. Directly appending to document.body
const directNode = new Node({name: "div"});
directNode.text = "Added directly to body";
document.body.append(directNode.tag);

// 2. Using node.parent to set document.body as parent
const parentNode = new Node({name: "div"});
parentNode.text = "Added using node.parent";
parentNode.parent = document.body;

// 3. Wrapping existing elements with a custom Node class
class MyNode extends Node {
    highlight() {
        this.class.add("highlight");
    }
}

// 3.1 Wrapping a single element
const singleWrapped = MyNode.wrap(".existing");
if (singleWrapped) {
    singleWrapped.highlight();
}

// 3.2 Wrapping multiple elements
const multipleWrapped = MyNode.wrapAll(".items");
multipleWrapped.forEach(item => item.highlight());
```

---

### 4. Finding Nodes on the Page
```js
// 1. Selecting elements by selector
const items = $(".item"); // Finds all elements with class "item"
items.addClass("selected");

// 2. Wrapping a single DOM element
const element = document.getElementById("myElement");
const wrappedNodes = $(element);
wrappedNodes.addClass("highlight"); // Works like a Node instance

// 3. Wrapping a list of DOM elements
const elements = document.querySelectorAll("p");
const wrappedNodes = $(elements); // Wraps all <p> elements
wrappedNodes.css("color", "blue");

// 4. Finding the first matching element
const firstItem = Node.query(".item");
if (firstItem) firstItem.class.add("active");

// 5. Searching within a specific parent
const container = Node.query("#container");
const childNodes = $(container?.ls.queryAll(".child"));
childNodes.css("font-weight", "bold");

// 6. Finding the closest ancestor
const [deepElement] = $(".nested");
const closestSection = $(deepElement?.closest("section"));
if (closestSection) closestSection.class.add("expanded");

// 7. Finding the union and remove
const all = $(".selected", document.getElementById('target'), "div#closed").
all.remove();
```

---

### 5. Iterators
```js
// 1. Select all `.item` elements, filter them by a condition, and then take the first 3 matching ones.
$('.item').filter((node => node.text.includes('example')).take(3);

// 2. Select all `.item` elements, then get their descendants, and filter the descendants to only keep those with class `.highlight`.
$('.item').ls.all.filterClass('highlight');

// 3. Select all `.item` elements, and for each of them, add a new child with specific content.
$('.item').add({ html: '<div class="new-child">New Child</div>' });

// 4. Select all `.item` elements, get their children, and count how many children there are in total.
$('.item').ls.count();

// 5. Select all `.item` elements and all their descendants, filter by a class `.active`, and change their text content.
$('.item').all.filterClass('active').text('New Active Text');

// 6. Select `.container`, get all its descendants that match `.child`, then get the maximum depth of these children.
$('.container').all.matchAll('.child').depth();

// 7. Select all `.item` elements, filter them based on some text condition, and then remove the selected ones from the DOM.
$('.item').matchText('remove').remove();

// 8. Select all `.item` elements, change their CSS properties to 'color: red', and then count the total number of selected elements.
$('.item').css('color', 'red').count();

// 9. Select all `.item` elements and change their `data-id` attribute
$('.item').attr('data-id', '123');

// 10. Select `.parent`, get all descendants, filter by a condition, then take the first 2 that match.
$('.parent').ls.all.matchText('important').take(2);

// 11. Select all `.item` elements, get their descendants, and iterate over each descendant's text content.
$('.item').ls.all.texts();

// 12. Select all `.item` elements, filter them by some condition, and then get their HTML content.
$('.item').filter(node => node.text.includes('example')).htmls();

// 13. Select `.item`, get all its descendants, and add new child elements to each of them.
$('.item').ls.all.add({ html: '<div class="new-child">New Child</div>' });

// 14. Select `.item`, take the first 5 elements, then get their descendants and count them.
$('.item').take(5).ls.all.count();

// 15. Select `.item` and get the maximum depth of its descendants
$('.item').depth();

// 16. Select all <a> elements in the document body and set their target to '_blank'
$(document.body).all.matchAll('a').attr('target', '_blank');

// 17. Select children of children (grandchildren) of <main>, filter by 'active' class, and wrap their content in <b> tags
$('main').ls.ls.filterClass('active').html(html => `<b>${html}</b>`);

```
---

## $(...args)

A flexible function that selects, wraps, or creates nodes and returns a `NodeIterator`. Each argument can be a reference to an existing node, a selector string, or an object that will be converted into a new node.

#### Parameters
- `...args` **(Node | Element | string | Iterable<Node | Element | string | object> | object)** — One or more arguments, each of which can be:
  - A **`Node`** instance.
  - A **DOM `Element`**.
  - A **CSS selector** (string) to find matching elements in the document.
  - An **object**, which will be wrapped as a new node using `new Node(arg)`.
  - An **iterable collection** (e.g., `NodeList`, `Array`, `Set`), where each element follows the same rules.

#### Returns
- **`NodeIterator`** — An iterator containing `Node` instances corresponding to the provided arguments.

#### Example
```js
const nodes1 = $(".items", ".else"); // Selects elements matching ".items" and ".else"
const nodes2 = $(document.getElementById("header")); // Wraps an existing element
const nodes3 = $(new Node("div")); // Uses an existing Node instance
const nodes4 = $(document.body, "#footer", new Node({name: "span"})); // Mixed input
const nodes5 = $({name: 'div'}); // new node
const nodes6 = $([{text: 'Apple'}, "#header", document.getElementById("footer")]); // iterator
const nodes7 = $(new MyNode("section")); // Uses a custom subclass
```

## class Node

Class of DOM Element Wrapper

### Node.of(tag)
Returns the first `Node` within the given `Element` matching the specified tag. If no matching node is found, it returns `null`.
#### Parameters:
- `tag` (**Element**): The element in which to search for the node.
#### Returns:
- **Node**: The first matching node.
- **null**: If no matching node is found.

---

### Node.hasNode(tag)
Checks if there is a `Node` within the given `Element` matching the specified tag. Returns `true` if a matching node is found, and `false` otherwise.
#### Parameters:
- `tag` (**Element**): The element in which to search for the node.
#### Returns:
- **boolean**: `true` if a matching node is found, `false` otherwise.

---

### Node.is(node)
**Parameters:**
- `node`: The node to check.

**Returns:**
- `Boolean`: Returns `true` if the provided `node` is an instance of `Node`. Returns `false` otherwise.

---

### Node.tag(node)
**Parameters:**
- `node` (Node): The `Node` instance to retrieve the tag element from.

**Returns:**
- `Element`: Returns the `Element` associated with the `Node` if it exists.

**Throws:**
- `Error`: Throws an error if the provided `node` does not have a corresponding `Element`.

**Description:**
The `tag` method retrieves the underlying `Element` for a given `Node` instance. If the provided `Node` does not have an associated `Element`, it will throw an error.

---

### Node.query(selector)
**Parameters:**
- `selector` (string): The CSS selector to match the node.

**Returns:**
- `Node`: Returns the first `Node` that matches the selector. If no match is found, it returns `null`.

**Description:**
This static method allows you to search for the first node matching the given CSS selector. If the element is found but is not already wrapped in a `Node`, it will be automatically wrapped.

**Example:**
```javascript
// Assume we have the following HTML structure
// <div id="my-node">
//   <span class="my-class">Hello</span>
// </div>

// Static method usage
const matchedNode = Node.query('#my-node');
console.log(matchedNode); // Node instance wrapping <div id="my-node">

// Query for a non-existing element
const noMatchNode = Node.query('.non-existing');
console.log(noMatchNode); // null

// Wrapping a found element
const spanNode = Node.query('.my-class');
console.log(spanNode instanceof Node); // true
```

---

### Node.queryAll(selector)
**Parameters:**
- `selector` (string): The CSS selector to match the nodes.
**Returns:**
- `NodeIterator`: Returns a `NodeIterator` containing all nodes that match the selector. If no matches are found, it returns an empty iterator.
**Description:**
This static method searches for all nodes that match the given CSS selector. If the elements are not already wrapped in `Node` objects, they will be automatically wrapped. It returns an iterator that allows you to traverse through all the matching nodes.

**Example:**
```javascript
// Assume we have the following HTML structure
// <div id="container">
//   <span class="item">Item 1</span>
//   <span class="item">Item 2</span>
//   <div class="item">Item 3</div>
// </div>

// Static method usage
const nodes = Node.queryAll('.item');
console.log(nodes instanceof NodeIterator); // true
nodes.forEach(node => console.log(node)); // Logs each matching node

// Query for a non-existing element
const noMatchNodes = Node.queryAll('.non-existing');
console.log(noMatchNodes.count()); // 0, no nodes matched
```

---

### Node.wrap(target)

Wraps the given element with the `Node` class or a subclass like `MyNode`, preserving its type.

#### Parameters
- `target` **(string | Element | Node)** — The element to wrap. It can be:
  - A **CSS selector** (string) to find an existing element in the document.
  - An **Element** (DOM node) to wrap.
  - An **existing Node instance** to rewrap.

#### Returns
- **Node | null** — A `Node` (or subclass) instance wrapping the element, or `null` if no matching element is found.

#### Example
```js
class MyNode extends Node {}
const wrapped1 = Node.wrap("#my-element"); // Wraps an existing element by ID
const wrapped2 = Node.wrap(document.querySelector("div")); // Wraps a direct DOM element
const wrapped3 = MyNode.wrap(".custom-class"); // Uses a subclass for wrapping
```
---

### Node.wrapAll(target)

Wraps multiple elements with the `Node` class or a subclass like `MyNode`, preserving their types.

#### Parameters
- `target` **(string | Iterable<Element | Node | string>)** — The elements to wrap. It can be:
  - A **CSS selector** (string) to find multiple elements in the document.
  - An **iterable collection** (e.g., `NodeList`, `Array`, `Set`), where each item is:
    - A **CSS selector** (string) for an element.
    - A **DOM Element**.
    - An **existing Node instance**.

#### Returns
- **NodeIterator** — An iterator containing `Node` (or subclass) instances wrapping the selected elements.

#### Example
```js
class MyNode extends Node {}
const wrappedNodes1 = Node.wrapAll(".list-item"); // Wraps all matching elements
const wrappedNodes2 = Node.wrapAll(document.querySelectorAll("div")); // Wraps all divs
const wrappedNodes3 = MyNode.wrapAll(["#item1", document.getElementById("item2")]); // Uses a subclass for wrapping
```
---

### Node.LS(node)
**Parameters:**
- `node` (Node): The `Node` instance whose child nodes will be accessed.

**Returns:**
- `NodeLS`: A custom iterator for the child nodes (`ls`) of the provided `node`. This method can be overridden in subclasses to return a specialized iterator.

**Description:**
This static method is used to retrieve an iterator for the child nodes of a `Node`. However, this method is intended to be overridden in subclasses to provide a custom implementation of how child nodes are retrieved or handled. For example, a subclass can return a specialized iterator that adds extra functionality or different behaviors when iterating over child nodes.

**Usage Example:**
```javascript

class MyNodeLS extends NodeIterator {

  constructor(node) {
    super(node);
    // Custom behavior for MyNodeLS
  }

  // Additional custom methods for MyNodeLS

  colorize(color){
  	this.css('color', color);
  }

  log(){
  	this.forEach(child => console.log(child.text));
  }
}

class MyNode extends Node {
  // Override LS to return a custom NodeIterator
  static LS(node) {
    return new MyNodeLS(node); // Custom iterator for MyNode
  }
}

const myNode = new MyNode();
myNode.append({ text: 'child 1' }, { text: 'child 2' });

const node = MyNode.LS(myNode);
console.log(node.ls instanceof MyNodeLS); // true
node.ls.log(); // Logs "child 1", "child 2"
node.ls.colorize('red'); // Colorize "child 1", "child 2
```

---

### Node.Attrs(node)
**Parameters:**
- `node` (Node): The `Node` instance whose attributes will be accessed.

**Returns:**
- `NodeIterator`: A custom iterator for the attributes of the provided `node`. This method can be overridden in subclasses to return a specialized iterator for attributes.
**Description:**
This static method is used to retrieve an iterator for the attributes of a `Node`. Like `Node.LS`, this method is intended to be overridden in subclasses to provide a custom implementation of how attributes are retrieved or handled. Subclasses can return a specialized iterator that adds extra functionality or different behaviors when iterating over attributes.
**Usage Example:**
```javascript
class MyNodeAttrs extends AttributeMap {
  constructor(node) {
    super(node);
    // Custom behavior for MyNodeAttrs
  }

  // Additional custom methods for MyNodeAttrs

  set title(title){
  	this.set('title', title);
  }
}

class MyNode extends Node {
  // Override Attrs to return a custom NodeIterator for attributes
  static Attrs(node) {
    return new MyNodeAttrs(node); // Custom iterator for MyNode attributes
  }
}

const myNode = new MyNode();
myNode.attrs.set('data-custom', 'value');
myNode.attrs.title = 'Sample Node';

// Logs "data-custom value", "title Sample Node"
```

---

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

---

### node.tagName
Returns the tag name of the DOM element associated with the `Node` instance, in uppercase.
#### Type:
- **string**: The tag name of the element (e.g., `"DIV"`, `"SPAN"`, etc.).

---

### node.document
Returns the document object that the `Node` instance is associated with.
#### Type:
- **Document**: The `Document` object containing the DOM element.

---

### node.parent
Gets or sets the parent `Node` instance of the current node.
#### Type:
- **Get:** `Node | null` – The parent `Node` instance or `null` if there is no parent.
- **Set:** Accepts one of the following:
  - **Node** – Sets the given `Node` as the parent.
  - **Element** – Wraps the given DOM element in a `Node` instance and sets it as the parent.
  - **object** – Creates a new `Node` from the provided configuration object and sets it as the parent.
  - **null** – Removes the current node from its parent.

---

### node.prevNode
Gets or sets the previous sibling `Node` of the current node.
- **Get:** `Node | null` – The previous sibling `Node` or `null` if there is no previous sibling.
- **Set:** Accepts one of the following:
  - **Node** – Sets the given `Node` as the previous sibling.
  - **Element** – Wraps the given DOM element in a `Node` instance and sets it as the previous sibling.
  - **object** – Creates a new `Node` from the provided configuration object and sets it as the previous sibling.

---

### node.nextNode
Gets or sets the next sibling `Node` of the current node.
- **Get:** `Node | null` – The next sibling `Node` or `null` if there is no next sibling.
- **Set:** Accepts one of the following:
  - **Node** – Sets the given `Node` as the next sibling.
  - **Element** – Wraps the given DOM element in a `Node` instance and sets it as the next sibling.
  - **object** – Creates a new `Node` from the provided configuration object and sets it as the next sibling.

---

### node.hidden
Gets or sets the visibility state of the node.

---

### node.class
Gets or sets the class list of the node.
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

---

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

---

### node.css
Gets or sets the styles of the node.
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

---

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

---

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

---

### node.text
Gets or sets text content of node

---

### node.html
Gets or sets html content of node

---

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

---

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

---

### node.parentAll
Gets an iterator for all ancestor nodes.
#### Type:
- **Get:** `NodeIterator` – An iterator that traverses all parent nodes up to the root.

#### Description:
- Returns an iterator that starts from the node’s direct parent and moves up the hierarchy.
- The root node (without a parent) is the last in the sequence.

---

### node.prevAll
Gets an iterator for all preceding sibling nodes.
#### Type:
- **Get:** `NodeIterator` – An iterator that traverses all previous siblings in order.
#### Description:
- Returns an iterator that starts from the node’s previous sibling and moves left (toward the first sibling).
- Does not include the node itself.

---

### node.nextAll
Gets an iterator for all following sibling nodes.
#### Type:
- **Get:** `NodeIterator` – An iterator that traverses all next siblings in order.
#### Description:
- Returns an iterator that starts from the node’s next sibling and moves right (toward the last sibling).
- Does not include the node itself.

---

### node.vp
The `vp` (ViewPort) property returns an object that manages the geometry of the node. It provides information similar to `element.getBoundingClientRect()`. The object contains properties like `x`, `y`, `top`, `left`, `width`, and `height`, representing the node's position and dimensions relative to the viewport.  
- **Returned Object Properties**:
  - `x`: The horizontal coordinate of the node relative to the viewport.
  - `y`: The vertical coordinate of the node relative to the viewport.
  - `top`: The top offset of the node relative to the viewport.
  - `left`: The left offset of the node relative to the viewport.
  - `width`: The width of the node.
  - `height`: The height of the node.

Example:
```javascript
const geometry = node.vp;
console.log(geometry.x, geometry.y, geometry.width, geometry.height);
```

---

### node.abs
### `node.abs`
The `abs` property returns an object similar to `node.vp`, but instead of providing geometry relative to the viewport, it provides the node's position and dimensions relative to the document (the entire webpage).  
- **Returned Object Properties**:
  - `x`: The horizontal coordinate of the node relative to the document.
  - `y`: The vertical coordinate of the node relative to the document.
  - `top`: The top offset of the node relative to the document.
  - `left`: The left offset of the node relative to the document.
  - `width`: The width of the node.
  - `height`: The height of the node.

Example:
```javascript
const geometry = node.abs;
console.log(geometry.x, geometry.y, geometry.width, geometry.height);
```

---

### node.rel
The `rel` property provides the node's geometry relative to its nearest positioned ancestor element (i.e., the `offsetParent`), similar to `offsetTop`, `offsetLeft`, `offsetWidth`, and `offsetHeight`. It returns an object with the following properties:

- **Returned Object Properties**:
  - `x`: alias left
  - `y`: alias top
  - `top`: The vertical offset of the node relative to its `offsetParent`.
  - `left`: The horizontal offset of the node relative to its `offsetParent`.
  - `width`: The width of the node.
  - `height`: The height of the node.
  - `parent`: The `offsetParent` element, which is the closest ancestor of the node that has a position other than `static`.

Example:
```javascript
const geometry = node.rel;
console.log(geometry.top, geometry.left, geometry.width, geometry.height);
console.log(geometry.parent); // The offsetParent (parent element).
```

---

### node.box
The `box` property provides the node's geometry relative to its **own offset container** (the element's own bounding box, similar to `clientTop`, `clientLeft`, `clientWidth`, and `clientHeight`). It returns an object with the following properties:

- **Returned Object Properties**:
  - `x`: alias left
  - `y`: alias top
  - `top`: The vertical distance from the top edge of the node’s own container to the top of the node.
  - `left`: The horizontal distance from the left edge of the node’s own container to the left of the node.
  - `width`: The width of the node relative to its own bounding box.
  - `height`: The height of the node relative to its own bounding box.

Example:
```javascript
const geometry = node.box;
console.log(geometry.top, geometry.left, geometry.width, geometry.height);
```

---

### node.scr
**Scrolling Geometry**
`node.scr` is an object that manages the geometry and state of an element's scrolling. It provides access to the current scroll values and can be used to read or write scroll bar positions, as well as information about the available scrollable area.

- **`node.scr.x`** — Equivalent to the `left` property, returns the horizontal scroll position.
- **`node.scr.y`** — Equivalent to the `top` property, returns the vertical scroll position.
- **`node.scr.top`** — Reads or sets the vertical scroll position relative to the container.
- **`node.scr.left`** — Reads or sets the horizontal scroll position relative to the container.
- **`node.scr.width`** — Returns the width of the area available for scrolling (horizontal size).
- **`node.scr.height`** — Returns the height of the area available for scrolling (vertical size).
- **`node.scr.hmax`** — Maximum horizontal scroll position.
- **`node.scr.vmax`** — Maximum vertical scroll position.
- **`node.scr.tx`** — Horizontal scroll position in the range from 0 to 1, where 0 is the beginning and 1 is the end of the available scroll area.
- **`node.scr.ty`** — Vertical scroll position in the range from 0 to 1, where 0 is the beginning and 1 is the end of the available scroll area.
### Example:
```javascript
// Get the current scroll position
console.log(node.scr.x); // Horizontal scroll position
console.log(node.scr.y); // Vertical scroll position

// Set a new scroll position
node.scr.top = 100; // Set vertical scroll position
node.scr.left = 50; // Set horizontal scroll position

// Get the available scrollable area
console.log(node.scr.width);  // Available width for scrolling
console.log(node.scr.height); // Available height for scrolling

// Get the maximum scroll positions
console.log(node.scr.hmax);   // Maximum horizontal scroll position
console.log(node.scr.vmax);   // Maximum vertical scroll position

// Work with relative scroll positions in the range from 0 to 1
node.scr.tx = 0.5;  // Horizontal scroll at 50%
node.scr.ty = 0.5;  // Vertical scroll at 50%
```

---

### node.on(eventType, listener, options)
**Parameters:**
- `eventType` (string): The type of the event to listen for (e.g., `'click'`, `'mouseenter'`, etc.).
- `listener` (function): The function to be called when the event is triggered.
- `options` (optional, object): An optional object that specifies options for the event listener (e.g., `{ capture: true, once: true }`).
**Returns:**
- `this` (Node): The instance of the `Node` object for method chaining.
**Description:**
The `Node.on` method is a wrapper around the native `addEventListener` method that allows you to register event listeners on a `Node` instance. This method makes it easy to attach event listeners to nodes while supporting all the options that `addEventListener` provides.

It is commonly used for handling events like clicks, mouse movements, key presses, etc.

For further reference on the underlying functionality of `addEventListener`, you can check the [MDN documentation for `addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

**Usage Example:**
```javascript
const node = new Node();

// Adding a click event listener
node.on('click', function() {
  console.log('Node clicked!');
});

// Adding an event listener with options (e.g., capturing phase)
node.on('click', function() {
  console.log('Node clicked in capture phase!');
}, { capture: true });

// Adding an event listener that will fire only once
node.on('click', function() {
  console.log('This will only fire once');
}, { once: true });
```

---

### node.off(eventType, listener, options)
**Parameters:**
- `eventType` (string): The type of the event to remove the listener from (e.g., `'click'`, `'mouseenter'`, etc.).
- `listener` (function): The function that was originally passed to the `on` method to handle the event.
- `options` (optional, object): An optional object that specifies options for the event listener (e.g., `{ capture: true, once: true }`). If the listener was added with specific options, the same options must be passed here to successfully remove the listener.

**Returns:**
- `this` (Node): The instance of the `Node` object for method chaining.

**Description:**
The `Node.off` method is a wrapper around the native `removeEventListener` method that allows you to remove event listeners from a `Node` instance. It is used when you want to stop listening to an event on a node.

It can be helpful to use this method for cleaning up event listeners to prevent memory leaks, especially when you no longer need to respond to a particular event.

For further reference on the underlying functionality of `removeEventListener`, you can check the [MDN documentation for `removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener).

**Usage Example:**
```javascript
const node = new Node();

// Define a listener function
function onClick() {
  console.log('Node clicked!');
}

// Add the event listener
node.on('click', onClick);

// Remove the event listener
node.off('click', onClick);
```

---

### node.once(eventType, listener, options)
**Parameters:**
- `eventType` (string): The type of the event to listen for (e.g., `'click'`, `'mouseenter'`, etc.).
- `listener` (function): The function to execute when the event is triggered. This function will only be called once for the specified event.
- `options` (optional, object): An optional object specifying options for the event listener (e.g., `{ capture: true, once: true }`). The `once: true` option ensures the listener is called at most once after being added.

**Returns:**
- `this` (Node): The instance of the `Node` object for method chaining.

**Description:**
The `Node.once` method is a wrapper around `addEventListener` with the `once` option. It is used to attach an event listener that will automatically remove itself after being triggered once. This is useful for one-time event handling where you want to listen to an event only once and then stop listening to it.

This method is similar to the native `addEventListener` but simplifies one-time event handling by automatically removing the listener after it's triggered once.

For more details, refer to the [MDN documentation for `addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

**Usage Example:**
```javascript
const node = new Node();

// Define a listener function
function onClickOnce() {
  console.log('Node clicked once!');
}

// Add the event listener that will trigger only once
node.once('click', onClickOnce);

// If clicked, the listener will be called and then automatically removed
```

---

### node.emit(eventType)
**Parameters:**
- `eventType` (string): The type of the event to dispatch (e.g., `'click'`, `'mouseenter'`, etc.).

**Returns:**
- `this` (Node): The instance of the `Node` object for method chaining.

**Description:**
The `Node.emit` method is a wrapper around `dispatchEvent`. It dispatches an event of the specified type to the node, triggering any event listeners that are attached to that event. This method is useful for manually triggering events in the node, either programmatically or as part of an event-handling mechanism.

This method creates a new `Event` object of the specified `eventType` and uses `dispatchEvent` to propagate the event to any registered listeners.

For more details, refer to the [MDN documentation for `dispatchEvent`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent).

---

### node.dispatch(event)
**Parameters:**
- `event` (Event): The event object to dispatch to the node. This can be any `Event` object (such as `MouseEvent`, `CustomEvent`, etc.) that you want to trigger manually.

**Returns:**
- `this` (Node): The instance of the `Node` object for method chaining.

**Description:**
The `Node.dispatch` method allows you to dispatch an already created `Event` object directly on the node. Unlike `emit`, which creates a new event of a specific type, `dispatch` allows you to manually trigger an event that has been previously created or customized.

It is useful when you want to dispatch complex or custom events that you have created, rather than relying on a simple event type string.

For more details, refer to the [MDN documentation for `dispatchEvent`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent).

**Usage Example:**
```javascript
const node = new Node();

// Create a custom event
const customEvent = new Event('customEvent');

// Add a listener for the event
node.on('customEvent', function() {
  console.log('Custom event dispatched!');
});

// Dispatch the custom event
node.dispatch(customEvent);  // This will log "Custom event dispatched!"
```

---

### node.observe(options, listener)
**Parameters:**
- `options` (Object): An object that specifies the types of mutations to observe. The options typically include the following properties:
  - `childList` (Boolean): Set to `true` to observe changes to the list of child nodes.
  - `attributes` (Boolean): Set to `true` to observe changes to the attributes of the node.
  - `subtree` (Boolean): Set to `true` to observe changes to the subtree of the node.
  - `attributeFilter` (Array): An array of attribute names to observe. If specified, only changes to these attributes will be observed.
  - `characterData` (Boolean): Set to `true` to observe changes to the text content of the node.
  - `attributeOldValue` (Boolean): Set to `true` to observe the previous value of the changed attribute.
  - `characterDataOldValue` (Boolean): Set to `true` to observe the previous value of the changed text content.
  
- `listener` (Function): The callback function that will be executed when a mutation is observed. The function receives a `MutationRecord` object, which provides information about the mutation.

**Returns:**
- `this` (Node): The instance of the `Node` object for method chaining.

**Description:**
The `Node.observe` method is a wrapper around `MutationObserver.observe`. It allows you to observe changes to a node's attributes, child nodes, or subtree, and receive notifications through a callback function whenever a specified mutation occurs. This is helpful for tracking dynamic changes in the DOM without manually checking for modifications.

For more details, refer to the [MDN documentation for `MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

**Usage Example:**
```javascript
const node = new Node();

// Add a MutationObserver to watch for attribute changes
node.observe({ attributes: true, attributeFilter: ['class'] }, function(mutations) {
  mutations.forEach(mutation => {
    console.log(`Attribute ${mutation.attributeName} changed!`);
  });
});

// Trigger an attribute change
node.attrs.set('class', 'new-class'); // This will log "Attribute class changed!"
```

---

### node.show()
Makes the node visible by removing the `hidden` attribute and setting relevant styles.

---

### node.hide()
Hides the node by setting the `hidden` attribute.

---

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

---

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

---

### node.click()
Simulates a user click on the node.
#### Description:
- Calls the native [`Element.click()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) method.
- Triggers any click event listeners attached to the node.

---

### node.focus()
Moves the focus to the node.
#### Description:
- Calls the native [`Element.focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) method.
- If the node is focusable, it receives keyboard input and other focus-related events.

---

### node.blur()
Removes focus from the node.
#### Description:
- Calls the native [`Element.blur()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur) method.
- If the node currently has focus, it will lose it, and any related events (like `onblur`) will be triggered.

---

### node.scroll()
A shorthand for the native [`Element.scroll()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll) method.
#### Description:
- Scrolls the node to the specified position.
- Equivalent to calling `node.scrollTo(x, y)` where `x` and `y` are the horizontal and vertical scroll positions, respectively.
#### Example:
```javascript
node.scroll(0, 100); // Scrolls the node to 100px vertically
node.scroll(); // Scrolls the node to the top-left corner (0, 0)
```

---

### node.scrollBy()
Scrolls the node by a specified amount relative to its current scroll position.
#### Parameters:
- **`x`**: The horizontal scroll amount (in pixels).
- **`y`**: The vertical scroll amount (in pixels).
#### Description:
- Scrolls the node by the given `x` and `y` values, relative to its current position.
- This is similar to the native [`Element.scrollBy()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy) method.

---

### node.scrollTo()
Scrolls the node to a specific position.
#### Parameters:
- **`x`**: The horizontal scroll position (in pixels).
- **`y`**: The vertical scroll position (in pixels).
#### Description:
- Scrolls the node to the exact `x` and `y` coordinates.
- Equivalent to the native [`Element.scrollTo()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo) method, which scrolls to the specified position within the element.

---

### node.scrollIntoView()
Scrolls the node into the visible area of the browser window.
#### Parameters (optional):
- **`options`**: An optional object that specifies scroll behavior and alignment.
  - **`behavior`**: Defines the transition behavior (default is `auto`).
    - `"auto"` – immediate jump to the position.
    - `"smooth"` – smooth scrolling to the position.
  - **`block`**: Defines vertical alignment (default is `start`).
    - `"start"` – aligns to the top of the window.
    - `"center"` – aligns the node to the center of the window.
    - `"end"` – aligns to the bottom of the window.
    - `"nearest"` – aligns based on the nearest edge.
  - **`inline`**: Defines horizontal alignment (default is `start`).
    - `"start"` – aligns to the left of the window.
    - `"center"` – aligns to the center of the window.
    - `"end"` – aligns to the right of the window.
    - `"nearest"` – aligns based on the nearest edge.
#### Description:
- Scrolls the node into view, ensuring it is fully or partially visible within the viewport.
- Equivalent to the native [`Element.scrollIntoView()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) method.
#### Example:
```javascript
node.scrollIntoView(); // Scrolls the node into view
node.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Smoothly scrolls the node into the center of the viewport
```

---

### node.animate()
Animates the node according to the provided keyframes and options.
#### Parameters:
- **`keyframes`**: An array of keyframe objects that define the style changes over time.
- **`options`** (optional): An object specifying options for the animation:
  - **`duration`**: The duration of the animation in milliseconds (default is `0`).
  - **`easing`**: The timing function for the animation (e.g., `linear`, `ease-in`, `ease-out`).
  - **`delay`**: The delay before the animation starts (in milliseconds).
  - **`iterations`**: The number of times the animation should repeat. Can be a specific number or `Infinity` for infinite repetition.
  - **`direction`**: The direction of the animation (e.g., `normal`, `reverse`, `alternate`).
  - **`fill`**: Specifies what styles to apply after the animation ends (`"forwards"`, `"backwards"`, `"both"`, or `"none"`).
#### Returns:
- **`Animation`** – A new `Animation` object that can be used to control the animation.
#### Description:
- Starts an animation on the node based on the specified keyframes and options.
- Equivalent to the native [`Element.animate()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) method.
#### Example:
```javascript
node.animate([
  { transform: 'scale(1)' }, 
  { transform: 'scale(1.5)' }
], { 
  duration: 500, 
  easing: 'ease-in-out' 
}); // Animates the node, scaling it from 1 to 1.5
```

---

### node.requestFullscreen()
Requests the browser to display the node in fullscreen mode.
#### Returns:
- **`Promise`** – A promise that resolves when the fullscreen request is successfully initiated, or rejects if the request fails.
#### Description:
- Requests the browser to make the specified node (typically an element like a video or image) take up the entire screen.
- Equivalent to the native [`Element.requestFullscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen) method.
- May be restricted to user interactions (e.g., click or key press) due to browser security policies.
#### Example:
```javascript
node.requestFullscreen().then(() => {
  console.log('Node is now in fullscreen mode');
}).catch((error) => {
  console.error('Failed to enter fullscreen:', error);
}); // Requests the node to enter fullscreen mode
```

---

### node.cssAll()
Returns a `StylePropertyMap` object containing all the computed CSS properties of the node.
#### Returns:
- **`StylePropertyMap`** – A map of all the computed CSS properties and their values for the node.
#### Description:
- This method is a shorthand for accessing all the computed styles of the node, similar to the native [`Element.computedStyleMap()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/computedStyleMap) method.
- Provides access to all of the CSS properties applied to the element, including those inherited from parent elements.
#### Example:
```javascript
const computedStyles = node.cssAll();
console.log(computedStyles.get('color')); // Logs the computed color of the node
```

---

### node.matches(selector)
Checks if the node matches the specified CSS selector.
#### Parameters:
- **`selector`**: A string representing a valid CSS selector to match against the node.
#### Returns:
- **`boolean`** – `true` if the node matches the selector, otherwise `false`.
#### Description:
- This method checks whether the node matches the provided CSS selector.
- Equivalent to the native [`Element.matches()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) method.
- Useful for determining if a node meets certain criteria without needing to query the DOM again.
#### Example:

```javascript
if (node.matches('.my-class')) {
  console.log('Node has the class "my-class"');
}

if (node.matches('div#unique-element')) {
  console.log('Node is a div with the ID "unique-element"');
}
```

---

### node.closest(selector)
Returns the closest ancestor of the node (including itself) that matches the specified CSS selector, wrapped in a `Node` instance.
#### Parameters:
- **`selector`**: A string representing a valid CSS selector to match against the node or its ancestors.
#### Returns:
- **`Node | null`** – The closest ancestor node (including the node itself) wrapped in a `Node` instance that matches the selector, or `null` if no matching ancestor is found.
#### Description:
- This method searches for the closest ancestor of the node (or the node itself) that matches the given CSS selector.
- It travels up the DOM tree, starting from the node, and stops at the first match it encounters.
- Equivalent to the native [`Element.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) method, but returns the result wrapped in a `Node` instance.
#### Example:
```javascript
const closestNode = node.closest('.my-class');
if (closestNode) {
  console.log('Found the closest ancestor with class "my-class"');
} else {
  console.log('No matching ancestor found');
}

const closestDivNode = node.closest('div');
if (closestDivNode) {
  console.log('Found the closest div element wrapped in Node');
}
```

---

### node.isEqual(node)
Compares the current node with another node (either a `Node` or a DOM `Element`) to check if they are identical.
#### Parameters:
- **`nodeToCompare`**: A `Node` or `Element` instance to compare with the current node.
#### Returns:
- **`boolean`** – `true` if the nodes are equal, otherwise `false`.
#### Description:
- This method checks if the current node is identical to another node or element by comparing their properties, including structure, attributes, and contents.
- The comparison takes into account both `Node` and `Element` types, making it flexible for various use cases.
- Equivalent to the native [`Node.isEqualNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode) method.
#### Example:
```javascript
const node1 = document.createElement('div');
const node2 = document.createElement('div');
const node3 = node1;

console.log(node1.isEqual(node2)); // false, as the elements are different
console.log(node1.isEqual(node3)); // true, as they are the same element

const node4 = new Node({ tag: document.createElement('div') });
console.log(node4.isEqual(node1)); // false, assuming node4 is a different instance
```

---

### node.isSame(node)
Compares if the current node is the exact same instance as the provided node.
#### Parameters:
- **`nodeToCompare`**: A `Node` or `Element` instance to compare with the current node.
#### Returns:
- **`boolean`** – `true` if both nodes refer to the exact same object in memory, otherwise `false`.
#### Description:
- This method checks if the current node and the provided node are the exact same object, meaning they refer to the same instance in memory.
- Unlike `isEqual()`, which compares the contents and properties of nodes, `isSame()` compares the identity of the node instances.
- It is useful when you need to confirm whether two variables reference the same node, not just equivalent nodes.
#### Example:
```javascript
const node1 = document.createElement('div');
const node2 = document.createElement('div');
const node3 = node1;

console.log(node1.isSame(node2)); // false, as they are different instances
console.log(node1.isSame(node3)); // true, as they are the exact same instance

const node4 = new Node({ tag: document.createElement('div') });
console.log(node4.isSame(node1)); // false, assuming node4 is a different instance
```

---

### node.contains(node)
Checks if the current node contains the specified node (i.e., if the provided node is a descendant of the current node).
#### Parameters:
- **`nodeToCheck`**: A `Node` or `Element` instance to check if it is contained within the current node.
#### Returns:
- **`boolean`** – `true` if the current node contains the specified node as a descendant (including the node itself), otherwise `false`.
#### Description:
- This method determines if the current node is an ancestor of the specified node, either directly or indirectly.
- It traverses the DOM tree starting from the current node and checks if the `nodeToCheck` is a descendant.
- The method is similar to the native `Node.contains()` method in JavaScript, but can also accept `Node` or `Element` instances wrapped in a custom `Node` object.
#### Example:
```javascript
const parentNode = document.createElement('div');
const childNode = document.createElement('p');
parentNode.appendChild(childNode);

console.log(parentNode.contains(childNode)); // true, as parentNode contains childNode
console.log(childNode.contains(parentNode)); // false, as childNode does not contain parentNode

const wrappedNode = new Node({ tag: parentNode });
console.log(wrappedNode.contains(childNode)); // true, as parentNode contains childNode
```

---

### node.append(... nodes)
Appends one or more nodes or objects (which will be converted into nodes) as children to the current node.
#### Parameters:
- **`...nodes`**: One or more `Node`, `Element`, or `Object` instances. If an `Object` is provided, it will be converted into a `Node` using `new Node(object)`.
#### Description:
- This method appends the provided nodes, elements, or objects (that are converted to `Node` instances) as children of the current node.
- Multiple nodes or elements can be appended in the order they are provided.
- If an `Object` is passed, it will be automatically wrapped in a `Node` instance.
#### Example:
```javascript
const parentNode = new Node();
const childNode1 = document.createElement('p');
const childNode2 = { name: 'span' }; // Example of an object
const childNode3 = new Node({ tag: document.createElement('a') }); // Wrapped node

parentNode.append(childNode1, childNode2, childNode3);
console.log(parentNode.childNodes); // [<p>, <span>, <a>], all nodes have been appended

// Using wrapped Node instances
const wrappedNode = new Node({ tag: parentNode });
wrappedNode.append(childNode1, childNode2, childNode3);
console.log(wrappedNode.tag.childNodes); // [<p>, <span>, <a>]
```

---

### node.prepend(... nodes)
Prepends one or more nodes or objects (which will be converted into nodes) as children to the current node, inserting them at the beginning of the node's child list.
#### Parameters:
- **`...nodes`**: One or more `Node`, `Element`, or `Object` instances. If an `Object` is provided, it will be converted into a `Node` using `new Node(object)`.

---

### node.before(... nodes)
Inserts one or more nodes or objects (which will be converted into nodes) before the current node, as siblings.
#### Parameters:
- **`...nodes`**: One or more `Node`, `Element`, or `Object` instances. If an `Object` is provided, it will be converted into a `Node` using `new Node(object)`.
#### Description:
- This method inserts the provided nodes, elements, or objects (that are converted to `Node` instances) before the current node in the DOM tree, as siblings.
- Multiple nodes or elements can be inserted in the order they are provided.
- If an `Object` is passed, it will be automatically wrapped in a `Node` instance.

---

### node.after(... nodes)
Inserts one or more nodes or objects (which will be converted into nodes) after the current node, as siblings.
#### Parameters:
- **`...nodes`**: One or more `Node`, `Element`, or `Object` instances. If an `Object` is provided, it will be converted into a `Node` using `new Node(object)`.
#### Description:
- This method inserts the provided nodes, elements, or objects (that are converted to `Node` instances) after the current node in the DOM tree, as siblings.
- Multiple nodes or elements can be inserted in the order they are provided.
- If an `Object` is passed, it will be automatically wrapped in a `Node` instance.

---

### node.replace(... nodes)
Replaces the current node with one or more nodes or objects (which will be converted into nodes).
#### Parameters:
- **`...nodes`**: One or more `Node`, `Element`, or `Object` instances. If an `Object` is provided, it will be converted into a `Node` using `new Node(object)`.
#### Description:
- This method replaces the current node with the provided nodes, elements, or objects (which are converted to `Node` instances).
- Multiple nodes or elements can be passed and will replace the current node in the order they are provided.
- If an `Object` is passed, it will be automatically wrapped in a `Node` instance.

### node.add(config)
Adds a configuration or set of settings to the current node, modifying its properties or behavior.
#### Parameters:
- **`config`**: An `Object` containing configuration settings or properties to be added to the node. The structure of the `config` object may vary depending on the specific properties you wish to set for the node (e.g., attributes, styles, event listeners).
#### Description:
- This method allows you to modify the node by passing a configuration object that can set various properties such as `class`, `style`, `attrs`, `text`, `html`, and more.
- It provides a flexible way to dynamically apply a set of settings to the node in one call.
- If `config` contains a property like `class`, it will add or modify the class of the node. Similarly, other properties like `style`, `attrs`, or event listeners can be applied based on the content of the `config`.
#### Returns:
- **`Node`**: The method returns the newly created or modified node based on the provided configuration.
#### Example:
```javascript
const parentNode = new Node();

const config = {
    class: 'highlighted',         // Add class to the node
    style: 'color: red;',         // Apply style to the node
    attrs: { id: 'unique-id' },   // Set an attribute
    text: 'Hello, world!',        // Set text content
    on: { click: () => alert('Clicked!') }  // Add an event listener
};

childNode.add(config);  // Apply the configuration to the node
console.log(parentNode.ls);  // Check if the node has been modified
```
#### Purpose:
The `node.add(config)` method provides a way to add new children or modify the current node with customizable behavior based on the provided configuration. By using a configuration object, this method enables the creation of more complex node structures dynamically.
```js
class Menu extends Node {

	constructor(){
		super({name: 'nav'});
	}

	add(title, href) {
		return super.add(new Link(title, href));  // Call the original `add()` method
	}
}

class Link extends Node {

	constructor(title, href){
		super({name: 'a', text: title, attrs: {href}});
	}
}

// Creating a new custom node
const menu = new Menu();
const link = customNode.add('Some Title', '/some/url');

console.log(menu.html);
// Returns <nav><a href="/some/url">Some Title</a></nav>
```

---

### node.remove()
Removes the current node from its parent in the DOM.

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

### node.attrs.replace(attrs)
Replace all attributes in node. see [node.attrs](#nodeattrs)

---

## class NodeLS
The `NodeLS` class is a specialized iterator for accessing child nodes of a `Node`. It is automatically created when you access the `ls` property of a `Node` instance. The class is designed to be extended in child classes by overriding the static `NodeLS` method.
#### Inheritance:
- Inherits from: `NodeIterator`
#### Constructor:
`Node.LS(node);`
- **`node`**: The parent `Node` from which the child nodes will be iterated.
#### Purpose:
The `NodeLS` class is used for traversing and manipulating the child nodes of a parent `Node`. It provides an iterator that allows you to access all the child nodes of a given parent node.
#### How it works:
The `NodeLS` class is automatically created when accessing the ls property of a `Node`. The class is designed to be extended in child classes via the static `NodeLS` method, enabling customization of the iteration behavior.
#### Extending `NodeLS`:
To extend the `NodeLS` class, you can override the static `NodeLS` method in your subclass. This allows you to customize the behavior of the child node iterator.
#### Example of Extending:
```js
// Custom subclass of Node
class CustomNode extends Node {
  static NodeLS(node) {
    // Override default NodeLS behavior
    return new CustomNodeLS(node);
  }
}

// Custom NodeLS iterator
class CustomNodeLS extends NodeLS {
  constructor(node) {
    super(node);
  }
  
  // Custom method for the iterator
  customMethod() {
    console.log('Custom method invoked');
    for(const child of this)
    	child.css('color', 'red');
  }
}

const customNode = new CustomNode({ name: 'div' });
const childNodesIterator = customNode.ls;

for (let child of childNodesIterator) {
  console.log(child); // Logs each child node of the customNode
}

customNode.ls.customMethod(); // Calls the custom method
```

### node.ls.length
The `length` property of the `NodeLS` class represents the total number of child `Element` nodes in the parent `Node`. It automatically ignores any non-`Element` nodes, such as text or comment nodes.
#### Purpose:
The `length` property allows you to quickly determine how many child `Element` nodes are available in the iterator, while ignoring non-element nodes. This is useful when you need to operate only on actual elements within a parent node.
#### Usage:
You can access the `length` property directly from the `NodeLS` iterator (which is available through the `ls` property of the `Node` instance). The iterator automatically filters out non-`Element` nodes.
#### Notes:
- The `length` property only counts `Element` nodes and ignores text, comment, and other non-element nodes.
- This property is read-only and cannot be directly modified.
- You can use `length` to quickly determine the number of valid child `Element` nodes and perform operations based on that.

---

### Example:

```javascript
const node = new Node({ name: 'div' });

// Access the length of child elements directly
console.log(node.ls.length); // Logs the number of child elements (ignores non-element nodes)
```

---

### node.ls.first
The `first` property of `NodeLS` returns the first child `Element` node of the parent `Node`. It automatically ignores non-`Element` nodes, such as text or comment nodes. If no child elements exist, it returns `null`. You can also set this property, which is equivalent to calling `node.prepend(node)`.
#### Usage:
- **Getter**: Access `node.ls.first` to quickly retrieve the first valid child element. If no child elements are present, it returns `null`.
- **Setter**: Assign a value to `node.ls.first`, which is equivalent to prepending the specified `Node`, `Element`, or `object` to the list of child nodes.
### Example:
```javascript
const node = new Node({ name: 'div' });

// Get the first child element
console.log(node.ls.first); // Logs the first child element or null if no child elements

// Set the first child element (equivalent to node.prepend(node))
node.ls.first = new Node({ name: 'span' });
console.log(node.ls.first); // Logs the newly prepended child element
```

---

### node.ls.last
The `last` property of `NodeLS` returns the last child `Element` node of the parent `Node`. It automatically ignores non-`Element` nodes, such as text or comment nodes. If no child elements exist, it returns `null`. You can also set this property, which is equivalent to calling `node.append(node)`.
#### Usage:
- **Getter**: Access `node.ls.last` to quickly retrieve the last valid child element. If no child elements are present, it returns `null`.
- **Setter**: Assign a value to `node.ls.last`, which is equivalent to appending the specified `Node`, `Element`, or `object` to the list of child nodes.
### Example:
```javascript
const node = new Node({ name: 'div' });
// Get the last child element
console.log(node.ls.last); // Logs the last child element or null if no child elements
// Set the last child element (equivalent to node.append(node))
node.ls.last = new Node({ name: 'p' });
console.log(node.ls.last); // Logs the newly appended child element
```

---

### node.ls.at(offset)
**Description:**
The `at(offset)` property allows you to access a child `Element` node at a specific position in the list of child elements.
**Parameters:**
- `offset` (Integer): The index position (starting from 0) of the child element in the list of child nodes.
**Returns:**
- **Element** (or `null` if no element exists at the given position):
  - If the specified `offset` corresponds to a valid position in the list, it returns the child element at that position.
  - If the `offset` is out of range (either negative or larger than the number of elements), it returns `null`.
**Notes:**
- Only `Node` nodes are considered.
- Non-`Node` nodes in the list are ignored.
- The method does not support negative indices (i.e., it will not work like `Array.prototype.at` which allows negative values).
---
### Example:

```javascript
const node = new Node({ name: 'div' });

// Access the first child element
console.log(node.ls.at(0)); // Logs the first child element or null if no child elements exist

// Access the second child element
console.log(node.ls.at(1)); // Logs the second child element or null if no second element exists

// Set a child element at the specified index
node.ls.at(0) = new Node({ name: 'p' });
console.log(node.ls.at(0)); // Logs the newly added 'p' element at index 0
```

---

### node.ls.replace(... nodes)
**Description:**  
The `replace(...nodes)` method replaces the current child nodes at the specified positions in the list with the new provided nodes.
**Parameters:**
- `...nodes` (Node, Element, or Object): One or more nodes (in the form of `Node`, `Element`, or objects that will be converted into nodes) to replace the current child nodes at the specified positions.
**Notes:**  
- The nodes passed can be in the form of `Node`, `Element`, or even an object (which will be converted into a `Node` via `new Node(object)`).
- The method will replace the entire list of child nodes, so be mindful that all previous children will be removed.
- This method does not affect other parts of the DOM tree outside of the target node.
---
**Example:**

```javascript
const node = new Node({ name: 'div' });
// Add some child nodes
node.ls.append(new Node({ name: 'p' }), new Node({ name: 'span' }));
// Replace the current child nodes with new ones
node.ls.replace(new Node({ name: 'section' }), new Node({ name: 'article' }));
console.log(node.ls); // Logs the node list after replacement
```

---

### node.ls.clear()
**Description:**  
The `clear()` method removes all child nodes from the list associated with `node.ls`, unlike most other methods which typically affect individual nodes.
**Notes:**  
- This method **removes all child nodes** from `node.ls`, unlike most other methods that operate on individual nodes or groups of nodes.
- It only affects the child nodes managed by `node.ls` and does not impact other parts of the DOM tree.

---

### node.ls.slice(start, end)
**Description:**  
The `slice()` method returns a new iterator containing a subset of child elements, based on the specified `start` and `end` indices. This method works similarly to JavaScript's `Array.slice()` method, with support for both positive and negative indices.
**Parameters:**  
- `start` (number): The index at which to begin the slice (inclusive). Positive values start from the beginning, and negative values count from the end. If omitted, it defaults to `0`.
- `end` (number, optional): The index at which to end the slice (exclusive). Positive values start from the beginning, and negative values count from the end. If omitted, it defaults to the length of the list.
**Returns:**  
- **NodeIterator**: A new iterator of `Node` objects containing the sliced elements from the `node.ls` list.
**Notes:**  
- The `start` and `end` parameters support negative values, which allow selecting elements from the end of the list.
- The method does not modify the original `node.ls` list; it creates a new iterator with the selected range of elements.
---
**Example:**
```javascript
const node = new Node({ name: 'div' });

// Add some child nodes
node.ls.append(new Node({ name: 'p' }), new Node({ name: 'span' }), new Node({ name: 'a' }));

console.log(node.ls.length); // Logs the number of child nodes: 3

// Use slice with positive indices to get the first two child nodes
const sliced1 = node.ls.slice(0, 2);
console.log(sliced1); // Logs the new iterator with the first two child nodes ('p' and 'span')

// Use slice with negative indices to get the last two child nodes
const sliced2 = node.ls.slice(-2, -1);
console.log(sliced2); // Logs the new iterator with the last child node ('span')
```

---

### node.ls.splice(start, deleteCount, ... nodes)
**Description:**  
The `splice()` method is used to modify the list of child nodes by removing or replacing nodes starting at the specified index `start`. It allows you to remove a certain number of elements (`deleteCount`) and optionally add new nodes in their place.
**Parameters:**  
- `start` (number): The index at which to begin modifying the list of child nodes. Positive values refer to positions from the start, while negative values count from the end. If omitted, it defaults to `0`.
- `deleteCount` (number): The number of child nodes to remove starting from the `start` index. If set to `0`, no elements will be removed, but new nodes can still be added.
- `...nodes` (Node | Element | object): The nodes to add at the specified `start` index. If no nodes are provided, it just removes the specified number of nodes. Each `node` can be a `Node`, an `Element`, or an `object` that will be converted into a `Node`.
**Returns:**  
- **NodeIterator**: An iterator over the removed `Node` objects, which were previously part of the `node.ls` list.
**Notes:**  
- The `start` and `deleteCount` parameters support both positive and negative values.
- The `splice()` method modifies the original `node.ls` list in place by removing and/or adding child nodes.
- If the `start` index exceeds the length of the list, the method does nothing, and if the `deleteCount` is greater than the number of nodes from `start` onward, it will only remove the available nodes.
---
**Example:**

```javascript
const node = new Node({ name: 'div' });

// Add some child nodes
node.ls.append(new Node({ name: 'p' }), new Node({ name: 'span' }), new Node({ name: 'a' }));

console.log(node.ls.length); // Logs the number of child nodes: 3

// Use splice to remove one node starting from index 1
const removedIterator = node.ls.splice(1, 1);
console.log([...removedIterator]); // Logs the removed node: 'span'
console.log(node.ls.length); // Logs the number of child nodes: 2 (after removal)

// Use splice to remove one node and add new ones in its place
const replacedIterator = node.ls.splice
```

---

### node.ls.shift()
**Description:**  
The `shift()` method removes the first child node from the `node.ls` list and returns it. This method modifies the `node.ls` list by shifting all the remaining child nodes one position to the left.

**Parameters:**  
- This method does not accept any parameters.

**Returns:**  
- **Node**: The removed child node, which is of type `Node`. If there are no child nodes, it returns `null`.

**Notes:**  
- The method modifies the original `node.ls` list by removing the first child node.
- The remaining nodes are shifted one position forward in the list after the operation.

---

### node.ls.pop()
**Description:**  
The `pop()` method removes the last child node from the `node.ls` list and returns it. This method modifies the `node.ls` list by reducing its length by one.

**Parameters:**  
- This method does not accept any parameters.

**Returns:**  
- **Node**: The removed child node, which is of type `Node`. If there are no child nodes, it returns `null`.

**Notes:**  
- The method modifies the original `node.ls` list by removing the last child node.
- The list is shortened by one node after the operation.

---

### node.ls.push(... nodes)
**Description:**  
The `push()` method adds one or more nodes to the end of the `node.ls` list. This method modifies the `node.ls` list by increasing its length by the number of nodes added.
**Parameters:**  
- **`...nodes`**: One or more nodes to add to the end of the `node.ls` list. Each `node` can be of type `Node`, `Element`, or an object that can be converted into a `Node`.
**Returns:**  
- **Number**: The new length of the `node.ls` list after the nodes have been added.
**Notes:**  
- This method appends the nodes to the end of the list, effectively increasing its size.
- If an object is passed, it will be converted into a `Node` using the `Node()` constructor.
---
**Example:**
```javascript
const node = new Node({ name: 'div' });

// Create new nodes to add
const pNode = new Node({ name: 'p' });
const spanNode = new Node({ name: 'span' });

// Use push to add nodes to the list
node.ls.push(pNode, spanNode);

console.log(node.ls.length); // Logs the new number of child nodes: 2
console.log(node.ls[0] === pNode); // Logs true (pNode is now the first child)
console.log(node.ls[1] === spanNode); // Logs true (spanNode is now the second child)
```

---

### node.ls.unshift(... nodes)
**Description:**  
The `unshift()` method adds one or more nodes to the beginning of the `node.ls` list. This method modifies the `node.ls` list by increasing its length and placing the new nodes at the start of the list.
**Parameters:**  
- **`...nodes`**: One or more nodes to add to the beginning of the `node.ls` list. Each `node` can be of type `Node`, `Element`, or an object that can be converted into a `Node`.
**Returns:**  
- **Number**: The new length of the `node.ls` list after the nodes have been added.
**Notes:**  
- This method adds the nodes to the front of the list, shifting the existing elements.
- If an object is passed, it will be converted into a `Node` using the `Node()` constructor.
---
**Example:**
```javascript
const node = new Node({ name: 'div' });

// Create new nodes to add
const pNode = new Node({ name: 'p' });
const spanNode = new Node({ name: 'span' });

// Use unshift to add nodes to the beginning
node.ls.unshift(pNode, spanNode);

console.log(node.ls.length); // Logs the new number of child nodes: 2
console.log(node.ls[0] === pNode); // Logs true (pNode is now the first child)
console.log(node.ls[1] === spanNode); // Logs true (spanNode is now the second child)
```

---

### node.ls.sort(cb)
**Description:**  
The `sort()` method sorts the child nodes of the `node.ls` list. By default, it sorts the nodes based on their text content in ascending order. You can also provide a custom comparator function (`cb`) to sort the nodes in a specific order.
**Parameters:**  
- **`cb` (optional)**: A comparison function that defines the sort order. It takes two arguments (usually `a` and `b`), which represent nodes, and should return:
  - A negative value if `a` should be sorted before `b`.
  - A positive value if `b` should be sorted before `a`.
  - Zero if `a` and `b` are equal in terms of sorting.
**Returns:**  
- **`node.ls`**: The sorted list of child nodes (same reference to `node.ls`).
**Notes:**  
- If no comparison function is provided, the nodes will be sorted based on their text content in lexicographical order.
- This method sorts the nodes **in place**, meaning it modifies the `node.ls` list directly.

---
**Example:**
```javascript
const node = new Node({ name: 'div' });

// Create child nodes with text content
const nodeA = new Node({ name: 'p', text: 'apple' });
const nodeB = new Node({ name: 'p', text: 'banana' });
const nodeC = new Node({ name: 'p', text: 'cherry' });

// Add nodes to the list
node.ls.push(nodeA, nodeB, nodeC);

// Sort nodes based on text content (default sorting)
node.ls.sort();

console.log(node.ls[0].text); // Logs 'apple'
console.log(node.ls[1].text); // Logs 'banana'
console.log(node.ls[2].text); // Logs 'cherry'

// Custom sort function (descending order based on text content)
node.ls.sort((a, b) => b.text.localeCompare(a.text));

console.log(node.ls[0].text); // Logs 'cherry'
console.log(node.ls[1].text); // Logs 'banana'
console.log(node.ls[2].text); // Logs 'apple'
```

---

### node.ls.reverse()
**Description:**  
The `reverse()` method reverses the order of the child nodes in the `node.ls` list. It modifies the original `node.ls` list, making the last node the first and the first node the last, and so on.
**Returns:**  
- **`node.ls`**: The reversed list of child nodes (same reference to `node.ls`).
**Notes:**  
- This method modifies the `node.ls` list **in place**, meaning it does not return a new list but instead directly modifies the order of the nodes in `node.ls`.
---
**Example:**

```javascript
const node = new Node({ name: 'div' });

// Create child nodes with text content
const nodeA = new Node({ name: 'p', text: 'apple' });
const nodeB = new Node({ name: 'p', text: 'banana' });
const nodeC = new Node({ name: 'p', text: 'cherry' });

// Add nodes to the list
node.ls.push(nodeA, nodeB, nodeC);

// Original order of nodes
console.log(node.ls[0].text); // Logs 'apple'
console.log(node.ls[1].text); // Logs 'banana'
console.log(node.ls[2].text); // Logs 'cherry'

// Reverse the order of the nodes
node.ls.reverse();

console.log(node.ls[0].text); // Logs 'cherry'
console.log(node.ls[1].text); // Logs 'banana'
console.log(node.ls[2].text); // Logs 'apple'
```

---

### node.ls.shuffle()
**Description:**  
The `shuffle()` method randomizes the order of the child nodes in the `node.ls` list. It rearranges the nodes in a random order each time it is called.
**Returns:**  
- **`node.ls`**: The shuffled list of child nodes (same reference to `node.ls`).
**Notes:**  
- This method modifies the `node.ls` list **in place**, meaning it does not return a new list but instead shuffles the child nodes within the same list.
---
**Example:**
```javascript
const node = new Node({ name: 'div' });

// Create child nodes with text content
const nodeA = new Node({ name: 'p', text: 'apple' });
const nodeB = new Node({ name: 'p', text: 'banana' });
const nodeC = new Node({ name: 'p', text: 'cherry' });

// Add nodes to the list
node.ls.push(nodeA, nodeB, nodeC);

// Original order of nodes
console.log(node.ls[0].text); // Logs 'apple'
console.log(node.ls[1].text); // Logs 'banana'
console.log(node.ls[2].text); // Logs 'cherry'

// Shuffle the nodes
node.ls.shuffle();

// Logs the shuffled order of nodes (output will vary)
console.log(node.ls[0].text); // Logs one of 'apple', 'banana', or 'cherry'
console.log(node.ls[1].text); // Logs one of the remaining nodes
console.log(node.ls[2].text); // Logs the remaining node
```

---

### node.ls.query(selector)
**Parameters:**
- `selector` (String): A CSS selector used to find a matching descendant element.
**Returns:**
- `Node | null`: The first descendant element of the node that matches the specified selector, or `null` if no match is found.
**Description:**
The `query` method searches through all descendants of the node (not just direct children) and returns the first element that matches the specified CSS selector. It behaves similarly to `querySelector`, but it operates on all levels of descendants, not just immediate children.
**Example:**
```javascript
const node = new Node();
node.append({text: 'apple'});
node.ls.append({text: 'banana'}); // A child of the first child
node.ls.ls.append({text: 'cherry'}); // A child of the second child

const firstMatch = node.ls.query('.banana');
console.log(firstMatch.text); // Outputs: 'banana'
```

---

### node.ls.queryAll(selector)
**Parameters:**
- `selector` (String): A CSS selector used to find matching descendant elements.

**Returns:**
- `NodeIterator`: An iterator containing all descendant elements of the node that match the specified selector. If no matches are found, an empty iterator is returned.

**Description:**
The `queryAll` method searches through all descendants of the node (not just direct children) and returns an iterator for all elements that match the specified CSS selector. It behaves similarly to `querySelectorAll`, but it operates on all levels of descendants, not just immediate children.

**Example:**
```javascript
const node = new Node();
node.add({text: 'apple'});
node.ls.add({text: 'banana'});
node.ls.ls.add({text: 'cherry'});
node.ls.ls.add({text: 'date'});

const matchingElements = node.ls.queryAll('.banana, .cherry');
matchingElements.toArray().forEach(element => {
  console.log(element.text); // Outputs: 'banana', 'cherry'
});
```

---

## class NodeIterator
**Description:**  
`NodeIterator` is a class that provides an iterator for a sequence of nodes, allowing you to traverse them one by one and perform various operations on each. It helps to work with the DOM tree using methods similar to array iteration, such as `slice()`, `splice()`, and others.

If the found node is not an instance of `Node` or its subclass, it is automatically wrapped into a new `Node` object with the parameter `{ tag: element }`.

---
### Where it's used:
- **Creation:**
  - `Node.queryAll(selector)` — finds and returns all nodes that match the selector.
  - `NodeIterator.from(nodes)` — creates an iterator from the given nodes.
  - `NodeIterator.of(...nodes)` — creates an iterator from the given nodes.
  - `NodeIterator.wrap(...elements)` — wraps the provided DOM elements into an iterator.
- **From a node:**
  - `node.ls` — returns the child nodes of the current node.
  - `node.all` — returns the current node and all its descendants.
  - `node.parentAll` — returns all parent nodes of the current node.
  - `node.prevAll` — returns all previous nodes.
  - `node.nextAll` — returns all following nodes.
- **From child elements:**
  - `node.ls.slice(start, end)` — returns a new iterator with child nodes in the specified range.
  - `node.ls.splice(start, deleteCount, ...nodes)` — modifies the list of child nodes by adding or removing nodes.
  - `node.ls.queryAll(selector)` — finds in children and returns all nodes that match the selector
- **From another node iterator:**
  - `iter.ls` — child nodes of the current iterator.
  - `iter.all` — all nodes of the iterator.
  - `iter.filter(cb)` — filters nodes based on the provided function.
  - `iter.drop(limit)` — skips the specified number of nodes.
  - `iter.take(limit)` — takes the specified number of nodes.
  - `iter.matchAll(selector)` — filters nodes that match the selector.
  - `iter.filterClass(token)` — filters nodes by class.
  - `iter.filterTag(name)` — filters nodes by tag.
  - `iter.filterVisible()` — filters only visible nodes.

---
**Example:**
```js
const node = new Node();
node.parent = Node.query('parent-element');

// Example 1: Appending child nodes and converting to array
node.append({text: 'banana'}, {name: 'p', text: 'orange'});
node.ls.toArray();  // All child nodes as an array

// Example 2: Converting all nodes (including the current one) to an array
node.all.toArray(); // Outputs an array including the node itself and all descendants

// Example 3: Accessing children of the children (grandchildren)
node.ls.ls; // Outputs an iterator of the children of the child nodes

// Example 4: Filtering visible nodes and applying CSS
node.ls.filterVisible().ls.css('border', '1px dashed blue');

// Example 5: Querying specific elements and limiting results
node.queryAll('div.my-class').take(10); // Outputs the first 10 elements that match the query

// Example 6: Manipulating sibling nodes (hiding previous siblings)
node.prevAll.ls.hide();

// Example 7: Counting parent elements
node.parentAll.count(); // Outputs the number of parent elements

// Example 8: Querying all divs, getting their classes, and converting to array
Node.queryAll('div').classes().toArray(); // Outputs an array of classes from all divs
```

---

### NodeIterator.from(nodes)
The `NodeIterator.from(nodes)` method creates a new instance of `NodeIterator` from an array or iterable of `Node` elements. This method is useful when you want to wrap a list of nodes into an iterator to take advantage of all the iterator methods, such as `filter`, `take`, `drop`, etc.

---

### NodeIterator.of(... nodes)
The `NodeIterator.of(...nodes)` method creates a new instance of `NodeIterator` from a list of `Node` elements passed as individual arguments. This method is ideal when you have multiple `Node` objects and want to create an iterator from them without the need to put them into an array first.

---

### NodeIterator.wrap(tags)
The `NodeIterator.wrap(tags)` method creates a new instance of `NodeIterator` by wrapping a list of `tags` (HTML elements or `Node` objects). This method is helpful when you need to wrap existing elements into a `NodeIterator` to take advantage of the iterator's chainable methods.

#### Example Usage:
```javascript
// Select some elements from the DOM
const div = document.querySelector('div');
const p = document.querySelector('p');
const span = document.querySelector('span');

// Wrap the selected elements into a NodeIterator
const nodeIterator = NodeIterator.wrap([div, p, span]);

// Use iterator methods to process the wrapped nodes
const filteredNodes = nodeIterator.filter(node => node.tag === 'p')
                                  .toArray();  // Convert filtered result to array

console.log(filteredNodes);  // Output: [p]
```

### iterator.ls
The `iterator.ls` property provides access to the child nodes (or descendants) of the current node within the `NodeIterator` instance. It returns a new `NodeIterator` instance containing all the child nodes of the current node.
#### Description:
- Returns an iterator that allows you to traverse all the child nodes of the current node.
- The returned iterator can be chained with various methods for further manipulation (e.g., `filter`, `toArray`, `css`, etc.).
- This is a direct way to access the children of a node within an iterator, and can be combined with other iterators or queries to select subsets of the node tree.
#### Notes:
- This property is often used to iterate over the child nodes and apply actions or conditions, such as filtering visible elements, modifying their properties, or performing other operations.

### iterator.all
The `iterator.all` property provides access to all descendants of the current node, including the node itself. It returns a `NodeIterator` instance containing the current node and all its descendant nodes.
#### Description:
- Returns an iterator that includes the current node and all its descendant nodes.
- The returned iterator allows traversal and manipulation of the entire subtree starting from the current node.
- It can be used to query or modify all descendants, including the current node, in one operation.
#### Notes:
- This property is useful when you need to access the entire set of nodes under the current node, including the node itself.
- Like `iterator.ls`, this property can be chained with various methods for additional manipulation or filtering.

---

### iterator.drop(limit)
The `node.drop(limit)` method creates a new iterator that skips the first `limit` elements from the original iterator. This is useful when you want to ignore a specific number of nodes at the beginning of the collection.
**Description:**
- **Parameters:**
  - `limit` (number): The number of elements to skip from the beginning of the iterator.
- **Returns:**
  - A new `NodeIterator` instance that skips the first `limit` elements and continues iterating over the remaining nodes.
- The resulting iterator contains all elements except for the first `limit` elements in the original iterator.
**Notes**:
- The `limit` value must be a non-negative integer.
- If `limit` is greater than the number of available elements in the iterator, the result will be an empty iterator.
- This method is chainable with other iterator methods like `.filter()`, `.take()`, etc., to refine the result further.
**Example Usage:**
```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'}, {text: 'date'});

const iterator = node.ls;
const droppedIterator = iterator.drop(2);

droppedIterator.toArray(); // Returns an array of nodes, skipping the first 2: ['cherry', 'date']
```

---

### iterator.every(cb)
Checks whether **all nodes** in the iterator satisfy the given condition.

- **`cb`** (function): A callback function that receives a node as an argument and returns a boolean.

#### Returns
- `true` if **all nodes** satisfy the condition, otherwise `false`.

#### Example Usage
```js
// Example: Check if all nodes are visible
const allVisible = iterator.every(node => !node.hidden);

// Example: Check if all nodes have the class 'active'
const allActive = iterator.every(node => node.classList.contains('active'));
```

---

### iterator.filter(cb)
The `iterator.filter(cb)` method returns a new iterator that includes only the nodes for which the callback function `cb` returns `true`. This is useful for filtering nodes based on custom conditions.

**Parameters:**
- `cb` (function): A callback function that is executed for each node. The callback function should return a boolean value (`true` or `false`).
  - The function is called with the following arguments:
    - `node` (Node): The current node being evaluated.
    - `index` (number): The index of the node in the iterator.

**Returns:**
- A new `NodeIterator` instance that includes only the nodes for which the callback function returns `true`.

**Notes:**
- The `filter` method does not modify the original iterator; it returns a new iterator.
- The `callback` function should return `true` if the node should be included in the result.

**Example Usage:**

```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'}, {text: 'date'});

const iterator = node.ls;
const filteredIterator = iterator.filter(node => node.text.includes('a'));

filteredIterator.toArray(); // Returns an array with nodes that contain 'a': ['apple', 'banana', 'date']
```

---

### iterator.find(cb)
The `iterator.find(cb)` method returns the first node in the iterator that satisfies the provided callback function. If no node satisfies the condition, `undefined` is returned.

**Parameters:**
- `cb` (function): A callback function that is executed for each node in the iterator. The callback function should return `true` for the node you want to find.
  - The function is called with the following arguments:
    - `node` (Node): The current node being evaluated.
    - `index` (number): The index of the node in the iterator.

**Returns:**
- The first `Node` that matches the condition, or `undefined` if no matching node is found.

**Notes:**
- The `find` method does not modify the original iterator.
- Only the first matching node is returned. The iterator stops once a matching node is found.

**Example Usage:**

```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'}, {text: 'date'});

const iterator = node.ls;
const foundNode = iterator.find(node => node.text === 'banana');

console.log(foundNode.text); // 'banana'
```

---

### iterator.flatMap(cb)
The `iterator.flatMap(cb)` method applies the provided callback function to each element in the iterator and flattens the resulting values into a single iterator. The callback function should return an iterable object, which will be flattened into the final result.

**Parameters:**
- `cb` (function): A callback function that is applied to each element of the iterator. The function should return an iterable object (like an array or another iterator).
  - The callback is invoked with the following arguments:
    - `element` (any): The current element being processed.
    - `index` (number): The index of the element in the iterator.

**Returns:**
- A new iterator that contains all the flattened values returned by the callback.

**Notes:**
- The original iterator is not modified.
- The callback function should return an iterable, and the elements of the iterable are flattened into a single iterator.

**Example Usage:**

```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'});

const textsIterator = node.ls.flatMap(n => [... n.text]);

console.log([...textsIterator]); 
// Output: ['a', 'p', 'l', 'e', 'b', 'a', 'n', 'a', 'n', 'a', 'c', 'h', 'e', 'r', 'r', 'y']
```

---

### iterator.forEach(cb)
The `iterator.forEach(cb)` method executes the provided callback function once for each element in the iterator. It does not return a value.  
**Parameters:**  
- `cb` (function): A callback function that is executed for each element in the iterator.  
  - The function receives the following arguments:  
    - `element` (any): The current element being processed.  
    - `index` (number): The index of the element in the iterator.  
**Returns:**  
- `undefined` (no return value).  
**Notes:**  
- This method is useful for performing side effects such as logging or modifying elements.  
- Unlike `map`, it does not create a new iterator or return values.  
**Example Usage:**  
```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'});

node.ls.forEach(n => console.log(n.text));
// Output:
// apple
// banana
// cherry
```

---

### iterator.map(cb)
The `iterator.map(cb)` method creates a new iterator with the results of applying the provided callback function to each element in the original iterator.  

**Parameters:**  
- `cb` (function): A callback function that is executed for each element in the iterator.  
  - The function receives the following arguments:  
    - `element` (any): The current element being processed.  
    - `index` (number): The index of the element in the iterator.  

**Returns:**  
- `Iterator` (a new iterator containing the transformed elements).  

**Notes:**  
- This method does not modify the original iterator.  
- The returned iterator can be further processed or converted to an array.  

**Example Usage:**  

```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'});

const upperCaseTexts = node.ls.map(n => n.text.toUpperCase());
console.log([...upperCaseTexts]); // ['APPLE', 'BANANA', 'CHERRY']
```

---

### iterator.reduce(cb, initValue)
The `iterator.reduce(cb, initValue)` method applies a reducer function to each element of the iterator, accumulating the result into a single value.  

**Parameters:**  
- `cb` (function): A callback function executed for each element in the iterator.  
  - The function receives the following arguments:  
    - `accumulator` (any): The accumulated result of previous iterations.  
    - `element` (any): The current element being processed.  
    - `index` (number): The index of the element in the iterator.  
- `initValue` (any): The initial value of the accumulator.  

**Returns:**  
- The final accumulated value.  

**Notes:**  
- The method does not modify the original iterator.  
- If `initValue` is not provided, the first element of the iterator is used as the initial value, and iteration starts from the second element.  

**Example Usage:**  

```javascript
const node = new Node();
node.append({text: 'a'}, {text: 'b'}, {text: 'c'});

const combinedText = node.ls.reduce((acc, n) => acc + n.text, '');
console.log(combinedText); // 'abc'
```

---

### iterator.some(cb)
The `iterator.some(cb)` method checks if at least one element in the iterator satisfies the given callback function.  

**Parameters:**  
- `cb` (function): A callback function executed for each element in the iterator.  
  - The function receives the following arguments:  
    - `element` (any): The current element being processed.  
    - `index` (number): The index of the element in the iterator.  
- The iteration stops as soon as `cb` returns `true` for any element.  

**Returns:**  
- `true` if at least one element satisfies the condition, otherwise `false`.  

**Notes:**  
- This method does not modify the original iterator.  
- Works similarly to `Array.prototype.some()`.  

**Example Usage:**  

```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'});

const hasBanana = node.ls.some(n => n.text === 'banana');
console.log(hasBanana); // true
```

---

### iterator.take(limit)
The `iterator.take(limit)` method returns a new iterator containing only the first `limit` elements from the original iterator.  

**Parameters:**  
- `limit` (number): The maximum number of elements to take from the iterator.  

**Returns:**  
- A new `NodeIterator` containing up to `limit` elements.  

**Notes:**  
- If `limit` is greater than the number of elements in the iterator, all elements are returned.  
- Works similarly to `Array.prototype.slice(0, limit)`, but for iterators.  

**Example Usage:**  

```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'}, {text: 'date'});

const firstTwo = node.ls.take(2);
console.log(firstTwo.toArray().map(n => n.text)); // ['apple', 'banana']
```

---

### iterator.toArray()
The `iterator.toArray()` method converts the iterator into a standard JavaScript array.  

**Returns:**  
- An `Array` containing all elements from the iterator.  

**Notes:**  
- This method exhausts the iterator, meaning it collects all elements into an array at once.  
- Useful when you need to work with standard array methods that are not available on iterators.  

**Example Usage:**  

```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'});

const array = node.ls.toArray();
console.log(array.map(n => n.text)); // ['apple', 'banana', 'cherry']
```

---

### iterator.count()
The `iterator.count()` method returns the number of elements in the iterator.  

**Returns:**  
- A `number` representing the count of elements.  

**Notes:**  
- This method iterates through all elements to determine the count.  
- After calling `count()`, the iterator is exhausted and cannot be reused.  

**Example Usage:**  

```javascript
const node = new Node();
node.append({text: 'apple'}, {text: 'banana'}, {text: 'cherry'});

console.log(node.ls.count()); // 3
console.log(node.ls.filter(n => n.text.startsWith('b')).count()); // 1
```

---

### iterator.depth()
The `iterator.depth()` method returns the maximum depth of nested child elements within the iterator.  

**Returns:**  
- A `number` representing the depth of nesting:  
  - `0` if the iterator is empty.  
  - `1` if all elements have no children.  
  - Higher values represent the deepest level of child elements.  

**Notes:**  
- This method traverses all elements in the iterator to determine the maximum depth.  
- An element without children contributes `1` to the depth.  
- If an element has children, the depth is calculated recursively.  

**Example Usage:**  

```javascript
const node = new Node();
node.append(
  { tag: 'div', ls: [{ tag: 'span' }] },
  { tag: 'p' },
  { tag: 'section', ls: [{ tag: 'article', ls: [{ tag: 'a' }] }] }
);

console.log(node.ls.depth()); // 3
console.log(node.ls.filter(n => n.tag === 'p').depth()); // 1
console.log(node.ls.filter(n => n.tag === 'div').depth()); // 2
```

---

### iterator.texts()
The `iterator.texts()` method returns a standard JavaScript iterator that yields all text contents from the elements in the iterator.  

**Returns:**  
- A `JavaScript Iterator<string>` containing text content from each node in order.  

**Notes:**  
- Only text content is extracted, ignoring child elements and attributes.  
- Empty elements return empty strings.  
- The method does not modify the original elements.  

**Example Usage:**  

```javascript
const node = new Node();
node.append(
  { tag: 'div', text: 'Hello' },
  { tag: 'p', text: 'World' },
  { tag: 'span', ls: [{ tag: 'b', text: 'Bold' }, { tag: 'i', text: 'Italic' }] }
);

console.log([...node.ls.texts()]); // ["Hello", "World", "Bold", "Italic"]
console.log([...node.ls.filter(n => n.tag === 'p').texts()]); // ["World"]
```

---

### iterator.htmls()
The `iterator.htmls()` method returns a standard JavaScript iterator that yields the inner HTML content of each node in the iterator.  

**Returns:**  
- A `JavaScript Iterator<string>` containing the inner HTML of each node in order.  

**Notes:**  
- Extracts the `innerHTML` of each element.  
- If an element has no children, it returns an empty string.  
- The method does not modify the original elements.  

**Example Usage:**  

```javascript
const node = new Node();
node.append(
  { tag: 'div', html: '<b>Bold</b> and <i>Italic</i>' },
  { tag: 'p', html: 'Hello <span>World</span>' },
  { tag: 'span', text: 'Text only' }
);

console.log([...node.ls.htmls()]); // ["<b>Bold</b> and <i>Italic</i>", "Hello <span>World</span>", "Text only"]
console.log([...node.ls.filter(n => n.tag === 'p').htmls()]); // ["Hello <span>World</span>"]
```

### iterator.on(eventType, listener, options)
Adds an event listener to each element in the iterator. The listener will be invoked whenever the event type is triggered on the element.  
- **Parameters**:
  - `eventType`: The type of the event to listen for (e.g., `'click'`).
  - `listener`: The function to execute when the event is triggered.
  - `options`: Optional options for the event listener, such as `{capture: true}`.
  
Corresponds to [`node.on(eventType, listener, options)`](#nodeoneventType-listener-options).

---

### iterator.off(eventType, listener, options)
Removes an event listener from each element in the iterator. The listener will no longer be triggered when the event occurs on the element.  
- **Parameters**:
  - `eventType`: The type of the event to stop listening for.
  - `listener`: The function that was previously added to the event.
  - `options`: Optional options for the event listener.

Corresponds to [`node.off(eventType, listener, options)`](#nodeoffeventType-listener-options).

---

### iterator.once(eventType, listener, options)
Adds an event listener to each element in the iterator, but it will only be triggered once. After the first execution, the listener is automatically removed.  
- **Parameters**:
  - `eventType`: The type of the event to listen for.
  - `listener`: The function to execute when the event is triggered.
  - `options`: Optional options for the event listener.

Corresponds to [`node.once(eventType, listener, options)`](#nodeonceeventType-listener-options).

---

### iterator.emit(eventType)
Triggers the specified event on each element in the iterator, invoking any listeners that have been added for that event type.  
- **Parameters**:
  - `eventType`: The type of the event to emit (e.g., `'click'`).
  
Corresponds to [`node.emit(eventType)`](#nodeemiteventType).

---

### iterator.show()
The `iterator.show()` method is used to reveal all elements in the iterator by setting their `hidden` attribute to `false`.

---

### iterator.hide()
The `iterator.hide()` method is used to hide all elements in the iterator by setting their `hidden` attribute to `true`.

---

### iterator.toggleDisplay()
The `iterator.toggleDisplay()` method toggles the `hidden` attribute of all elements in the iterator. If an element is visible (i.e., the `hidden` attribute is not set), it will be hidden. If it is already hidden, it will be made visible again.

---

### iterator.css(name, value)
The `iterator.css(name, value)` method is used to set the specified CSS property for all elements in the iterator.

**Parameters:**
- `name`: The name of the CSS property (e.g., `'color'`, `'background-color'`, `'font-size'`, etc.).
- `value`: The value to set for the specified CSS property (e.g., `'red'`, `'16px'`, `'none'`, etc.).

**Notes:**
- The CSS property is applied directly to the inline styles of the elements.

**Example Usage:**

```javascript
const node = new Node();
node.append(
  { tag: 'div', text: 'First' },
  { tag: 'div', text: 'Second' },
  { tag: 'div', text: 'Third' }
);

// Set the CSS color property to red for all elements in the iterator
node.ls.css('color', 'red');

// Set the background color for all elements
node.ls.css('background-color', 'blue');
```

---

### iterator.appendCSS(name, value)
The `iterator.appendCSS(name, value)` method is used to append a new CSS rule to an element's existing inline style for properties that accept multiple values. This is particularly useful for properties like `box-shadow`, `background`, `font-family`, etc., where multiple values can be combined.

**Parameters:**
- `name`: The name of the CSS property (e.g., `'box-shadow'`, `'background'`, `'font-family'`, etc.).
- `value`: The value of the CSS property to be appended (e.g., `'2px 2px 5px rgba(0,0,0,0.3)'`).

**Notes:**
- This method appends a new value to the existing property if the property allows multiple values. It does not overwrite the current values.
- For other properties (like `color`, `font-size`, etc.), use the regular `css()` method instead, as this is meant for properties that accept single values.

**Example Usage:**

```javascript
const node = new Node();
node.append(
  { tag: 'div', text: 'First' },
  { tag: 'div', text: 'Second' },
  { tag: 'div', text: 'Third' }
);

// Append a new box-shadow value
node.ls.appendCSS('box-shadow', '2px 2px 5px rgba(0,0,0,0.3)');

// Append a new background-image to the existing background property
node.ls.appendCSS('background', 'url(image.png)');

// Append a new font-family to the existing font-family
node.ls.appendCSS('font-family', 'Arial, sans-serif');
```

---

### iterator.removeCSS(name)
The `iterator.removeCSS(name)` method is used to remove a specific CSS property from the inline styles of all elements in the iterator.

**Parameters:**
- `name`: The name of the CSS property to be removed (e.g., `'box-shadow'`, `'background'`, `'color'`, etc.).

**Notes:**
- This method only removes the specified CSS property if it exists. If the property is not set, it has no effect.
- It does not remove the property from any external stylesheets or inherited styles; it only removes inline styles.

---

### iterator.clearCSS()
The `iterator.clearCSS()` method removes all inline CSS styles from all elements in the iterator.

**Notes:**
- This method removes all inline styles applied to the elements, effectively resetting their appearance to the default styles (or inherited styles).
- It does not affect any external stylesheets or inherited styles; only the inline styles are cleared.

### iterator.addClass(... tokens)
The `iterator.addClass(...tokens)` method adds one or more CSS class names to all elements in the iterator.

**Parameters:**
- `...tokens`: One or more class names to be added. The class names are provided as separate arguments or in a single array.

**Notes:**
- If the class name already exists on an element, it will not be added again (no duplicates).
- This method is often used for styling elements dynamically.

---

### iterator.removeClass(... tokens)
The `iterator.removeClass(...tokens)` method removes one or more CSS class names from all elements in the iterator.

**Parameters:**
- `...tokens`: One or more class names to be removed. The class names are provided as separate arguments or in a single array.

**Notes:**
- If the class name doesn't exist on an element, it will not throw an error and simply do nothing.
- This method helps in dynamically removing styling from elements.

### iterator.toggleClass(token, force)
The `iterator.toggleClass(token, force)` method toggles a CSS class on all elements in the iterator. If the class is present, it will be removed; if it's absent, it will be added. The `force` parameter can be used to explicitly control the toggling behavior.

**Parameters:**
- `token`: The class name to be toggled.
- `force` (optional): A boolean that forces the class to be added (`true`) or removed (`false`). If not provided, it will toggle the class based on its current state.

**Notes:**
- If `force` is not specified, it checks whether the class is already present:
  - If the class is present, it is removed.
  - If the class is absent, it is added.
- If `force` is specified, the class will be added if `force` is `true`, or removed if `force` is `false`.

---

### iterator.replaceClass(oldToken, newToken)
The `iterator.replaceClass(oldToken, newToken)` method replaces an existing CSS class with a new one on all elements in the iterator.

**Parameters:**
- `oldToken`: The class name to be replaced.
- `newToken`: The class name to replace `oldToken` with.

**Notes:**
- This method will search for elements with the `oldToken` class and replace it with the `newToken` class.
- If the `oldToken` class is not present on an element, no changes will be made to that element.
- The replacement happens in all the elements contained in the iterator.

---

### iterator.clearClasses()
The `iterator.clearClasses()` method removes all CSS classes from the elements in the iterator.

**Notes:**
- This method will clear all classes (i.e., the `class` attribute) from each element in the iterator.
- It does not modify other attributes of the element.
- After using this method, the elements will have no classes.

---

### iterator.classes()
The `iterator.classes()` method returns an iterator for the class names of the elements in the iterator.
**Notes:**
- The iterator returned by `iterator.classes()` provides each class name for each element in the iterator, one by one.
- If an element has multiple classes, each class name is returned separately in the iterator.

---

### iterator.attr(name, value)
The `iterator.attr(name, value)` method sets the value of an attribute for each element in the iterator.

**Parameters:**
- `name` (string): The name of the attribute to modify.
- `value` (string): The value to set for the attribute.

**Notes:**
- This method sets the attribute for each element in the iterator. If the attribute already exists, its value is updated; if it doesn't, the attribute is added with the specified value.
- If the `value` parameter is omitted, the method returns the current value of the specified attribute for the first element in the iterator.
- This method is commonly used for modifying attributes like `id`, `class`, `src`, `href`, etc.

### Example:
```javascript
const iterator = Node.queryAll('img');

// Set the 'alt' attribute for all img elements
iterator.attr('alt', 'Image description');

// Get the 'alt' attribute of the first img element
console.log(iterator.map(node => node.attrs.get('alt')).toArray());  // Output: ["Image description", ... ]
```

---

### iterator.removeAttr(name)
The `iterator.removeAttr(name)` method removes a specified attribute from each element in the iterator.

**Parameters:**
- `name` (string): The name of the attribute to remove.

**Notes:**
- This method will remove the given attribute from all elements in the iterator.
- If the specified attribute doesn't exist on an element, no changes are made to that element.
- Commonly used for removing attributes like `disabled`, `readonly`, `checked`, etc.

---

### iterator.toggleAttr(name, force)
The `iterator.toggleAttr(name, force)` method toggles the presence of a specified attribute for each element in the iterator. If the attribute exists, it is removed; if it does not exist, it is added. The behavior can be controlled using the `force` argument.

**Parameters:**
- `name` (string): The name of the attribute to toggle.
- `force` (boolean, optional): 
  - `true`: The attribute will be added if it doesn't exist, and removed if it does.
  - `false`: The attribute will only be removed if it exists. 
  - If `force` is not provided, the attribute will be toggled (added if missing, removed if present).

**Notes:**
- This method is useful for toggling attributes like `disabled`, `checked`, `readonly`, etc.
- If the `force` parameter is not passed, it defaults to toggling the attribute.

---

### iterator.clearAttrs()
The `iterator.clearAttrs()` method removes all attributes from each element in the iterator.
**Notes:**
- This method clears all attributes (including `class`, `id`, `src`, `alt`, etc.) from the elements in the iterator.
- Use this method when you need to completely remove attributes from the selected elements.

---

### iterator.text(text)
The `iterator.text(text)` method sets the text content for all elements in the iterator. The argument `text` can either be a string to set the text or a function that returns the new text value, taking the current text as an argument.

**Parameters:**
- `text` (string | function): 
  - If a string is provided, it will replace the existing text content of the selected elements.
  - If a function is provided, it will be called for each element in the iterator, receiving the current text as an argument, and the function should return the new text value.

**Examples:**

```javascript
Node.query('#my').ls.text("New text content");
Node.queryAll('a').text((currentText) => currentText.toUpperCase());
```

---

### iterator.html(html)
The `iterator.html(html)` method sets the HTML content for all elements in the iterator. The argument `html` can either be a string to set the HTML content or a function that returns the new HTML content, taking the current HTML as an argument.

**Parameters:**
- `html` (string | function): 
  - If a string is provided, it will replace the existing HTML content of the selected elements.
  - If a function is provided, it will be called for each element in the iterator, receiving the current HTML as an argument, and the function should return the new HTML content.

**Examples:**

**Set HTML content for all elements in the iterator:**
```javascript
node.ls.html("<div><p>New HTML content</p></div>");
node.ls.html((currentHtml) => `<div><span>${currentHtml}</span></div>`);
```

---

### iterator.add(config)
The `iterator.add(config)` method adds a child element to each element in the iterator using the `node.add(config)` method. The `config` argument is typically an object or an instance of a `Node`, which will be appended as a child to the nodes in the iterator.

**Parameters:**
- `config` (object | Node): The configuration or node to be added. This could either be:
  - An object containing properties to define the new child element (e.g., `tag`, `text`, `attributes`), or
  - An existing `Node` instance to be added as a child.
**Examples:**

```javascript
node.ls.add({ tag: 'div', text: 'New child element' });
```

---

### iterator.remove()
The `iterator.remove()` method removes all the nodes in the iterator from the DOM tree. This operation will detach the nodes from their parent elements, effectively deleting them from the document.

---

### iterator.indexOf(node)
The `iterator.indexOf(node)` method returns the index of the specified node within the iterator. If the node is not found, it returns `-1`.

**Parameters:**
- `node` (Node): The node whose index within the iterator is to be found.

**Returns:**
- A number representing the index of the node in the iterator, or `-1` if the node is not found.

---

### iterator.includes(node)
The `iterator.includes(node)` method checks if the specified node exists within the iterator.

**Parameters:**
- `node` (Node): The node to check for existence within the iterator.

**Returns:**
- `true` if the node is found in the iterator, otherwise `false`.

---

### iterator.contains(node)
The `iterator.contains(node)` method checks if the specified node exists within the iterator or among its descendants.

**Parameters:**
- `node` (Node): The node to check for existence in the iterator or its children.

**Returns:**
- `true` if the node is found in the iterator or among its descendants, otherwise `false`.

---

### iterator.match(selector)

**Parameters:**
- `selector` (string): A CSS selector to match nodes in the iterator.

**Returns:**
- `Node | null`: Returns the first node that matches the selector, or `null` if no matching node is found.
**Description:**
This method searches for the first node in the iterator that matches the specified selector. If a matching element is found, it returns a `Node` object. If no match is found, it returns `null`.

---

### iterator.matchAll(selector)

**Parameters:**
- `selector` (string): A CSS selector used to filter nodes in the iterator.

**Returns:**
- `NodeIterator`: Returns a new iterator consisting of all nodes that match the specified selector.

**Description:**
This method filters the current iterator and returns a new iterator containing only the nodes that match the specified selector. The returned iterator can be used for further operations on the filtered elements.

---

### iterator.matchText(pattern)

**Parameters:**
- `pattern` (string | RegExp): The pattern to match against the text content of the selected elements. A string will be treated as a literal match, while a regular expression allows for more flexible pattern matching.

**Returns:**
- `NodeIterator`: Returns a `NodeIterator` that allows iterating over the elements whose text content matches the given pattern.

**Description:**
The `matchText(pattern)` method filters the selected elements based on whether their text content matches the provided `pattern`. It supports both exact string matching and regular expression matching. The method returns a `NodeIterator`, which can be used to iterate over the matching elements.

---

### iterator.matchHTML(pattern)

**Parameters:**
- `pattern` (string | RegExp): The pattern to match against the HTML content of the selected elements. A string will be treated as a literal match, while a regular expression allows for more flexible pattern matching.

**Returns:**
- `NodeIterator`: Returns a `NodeIterator` that allows iterating over the elements whose HTML content matches the given pattern.

**Description:**
The `matchHTML(pattern)` method filters the selected elements based on whether their HTML content matches the provided `pattern`. It supports both exact string matching and regular expression matching. The method returns a `NodeIterator`, which can be used to iterate over the matching elements.

---

### iterator.filterClass(token)
**Parameters:**
- `token` (string): The class name (or token) used to filter nodes in the iterator.

**Returns:**
- `NodeIterator`: A new iterator containing only the nodes that have the specified class.

**Description:**
This method filters the current iterator and returns a new iterator consisting only of nodes that have the specified class name. The returned iterator can be used for further operations on the filtered elements.

---

### iterator.filterTag(name)
**Parameters:**
- `name` (string): The tag name used to filter nodes in the iterator.

**Returns:**
- `NodeIterator`: A new iterator containing only the nodes with the specified tag name.

**Description:**
This method filters the current iterator and returns a new iterator containing only the nodes that have the specified tag name. The returned iterator can be used for further operations on the filtered elements.

---

### iterator.filterVisible()
**Returns:**
- `NodeIterator`: A new iterator containing only the nodes that are visible (i.e., those without `display: none` or `visibility: hidden`).

**Description:**
This method filters the current iterator and returns a new iterator containing only the visible nodes. It checks the nodes' `display` and `visibility` CSS properties to determine whether the node is visible. The returned iterator can be used for further operations on the visible elements.

---






### Methods Available through
Methods in the DOM that do not have direct analogs in the current library but are available through `node.tag.xxx()

These methods are native to the DOM and can be accessed through `node.tag.xxx()` but do not have direct equivalents in the custom iterator-based methods.

- **`node.tag.hasPointerCapture()`**  
  Returns a boolean indicating if the element currently has pointer capture. Pointer capture allows the element to receive all pointer events, even if the pointer moves outside the element's bounds.

- **`node.tag.setPointerCapture()`**  
  Requests the capture of pointer events for the element, meaning the element will receive all pointer events, even if the pointer moves outside of it.

- **`node.tag.releasePointerCapture()`**  
  Releases pointer capture from the element, meaning it will no longer receive pointer events when the pointer moves outside of its bounds.

- **`node.tag.requestPointerLock()`**  
  Requests the browser to lock the pointer to the element, often used for immersive experiences like games, where the mouse cursor is hidden and locked to the element.

- **`node.tag.getClientRects()`**  
  Returns a collection of `DOMRect` objects that represent the bounding rectangles of the element relative to the viewport. This method accounts for multiple rectangles (for example, if the element is split into multiple lines or contains multiple parts).

- **`node.tag.getAnimations()`**  
  Returns a list of `Animation` objects that are currently associated with the element. This can be used to inspect the running animations on the element or control their behavior programmatically.

These methods represent advanced DOM interactions typically related to pointer events, pointer capture, and element animations. While not directly included in the iterator-based methods, they are critical for handling complex interactions in certain web applications.
