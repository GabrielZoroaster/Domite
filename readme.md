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
Simulates a user click on the node.
#### Description:
- Calls the native [`Element.click()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) method.
- Triggers any click event listeners attached to the node.

### node.focus()
Moves the focus to the node.
#### Description:
- Calls the native [`Element.focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) method.
- If the node is focusable, it receives keyboard input and other focus-related events.

### node.blur()
Removes focus from the node.
#### Description:
- Calls the native [`Element.blur()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur) method.
- If the node currently has focus, it will lose it, and any related events (like `onblur`) will be triggered.

### node.scroll()
A shorthand for the native [`Element.scroll()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll) method.
#### Returns:
- **`void`** – This method does not return any value.
#### Description:
- Scrolls the node to the specified position.
- Equivalent to calling `node.scrollTo(x, y)` where `x` and `y` are the horizontal and vertical scroll positions, respectively.
#### Example:
```javascript
node.scroll(0, 100); // Scrolls the node to 100px vertically
node.scroll(); // Scrolls the node to the top-left corner (0, 0)
```

### node.scrollBy()
Scrolls the node by a specified amount relative to its current scroll position.
#### Parameters:
- **`x`**: The horizontal scroll amount (in pixels).
- **`y`**: The vertical scroll amount (in pixels).
#### Returns:
- **`void`** – This method does not return any value.
#### Description:
- Scrolls the node by the given `x` and `y` values, relative to its current position.
- This is similar to the native [`Element.scrollBy()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy) method.

### node.scrollTo()
Scrolls the node to a specific position.
#### Parameters:
- **`x`**: The horizontal scroll position (in pixels).
- **`y`**: The vertical scroll position (in pixels).
#### Returns:
- **`void`** – This method does not return any value.
#### Description:
- Scrolls the node to the exact `x` and `y` coordinates.
- Equivalent to the native [`Element.scrollTo()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo) method, which scrolls to the specified position within the element.

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
#### Returns:
- **`void`** – This method does not return any value.
#### Description:
- Scrolls the node into view, ensuring it is fully or partially visible within the viewport.
- Equivalent to the native [`Element.scrollIntoView()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) method.
#### Example:
```javascript
node.scrollIntoView(); // Scrolls the node into view
node.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Smoothly scrolls the node into the center of the viewport
```

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

### node.append(... nodes)
Appends one or more nodes or objects (which will be converted into nodes) as children to the current node.
#### Parameters:
- **`...nodes`**: One or more `Node`, `Element`, or `Object` instances. If an `Object` is provided, it will be converted into a `Node` using `new Node(object)`.
#### Returns:
- **`void`** – This method does not return any value.
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

### node.prepend(... nodes)
Prepends one or more nodes or objects (which will be converted into nodes) as children to the current node, inserting them at the beginning of the node's child list.
#### Parameters:
- **`...nodes`**: One or more `Node`, `Element`, or `Object` instances. If an `Object` is provided, it will be converted into a `Node` using `new Node(object)`.
#### Returns:
- **`void`** – This method does not return any value.

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
