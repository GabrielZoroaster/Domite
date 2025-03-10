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
	- [node.ls.sort()](#nodelssortcb)
	- [node.ls.reverse()](#nodelsreverse)
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
#### Description:
- Scrolls the node by the given `x` and `y` values, relative to its current position.
- This is similar to the native [`Element.scrollBy()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy) method.

### node.scrollTo()
Scrolls the node to a specific position.
#### Parameters:
- **`x`**: The horizontal scroll position (in pixels).
- **`y`**: The vertical scroll position (in pixels).
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
### node.before(... nodes)
Inserts one or more nodes or objects (which will be converted into nodes) before the current node, as siblings.
#### Parameters:
- **`...nodes`**: One or more `Node`, `Element`, or `Object` instances. If an `Object` is provided, it will be converted into a `Node` using `new Node(object)`.
#### Description:
- This method inserts the provided nodes, elements, or objects (that are converted to `Node` instances) before the current node in the DOM tree, as siblings.
- Multiple nodes or elements can be inserted in the order they are provided.
- If an `Object` is passed, it will be automatically wrapped in a `Node` instance.

### node.after(... nodes)
Inserts one or more nodes or objects (which will be converted into nodes) after the current node, as siblings.
#### Parameters:
- **`...nodes`**: One or more `Node`, `Element`, or `Object` instances. If an `Object` is provided, it will be converted into a `Node` using `new Node(object)`.
#### Description:
- This method inserts the provided nodes, elements, or objects (that are converted to `Node` instances) after the current node in the DOM tree, as siblings.
- Multiple nodes or elements can be inserted in the order they are provided.
- If an `Object` is passed, it will be automatically wrapped in a `Node` instance.

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

### node.attrs.setAll(attrs)
Replace all attributes in node. see [node.attrs](#nodeattrs)

## class NodeLS
The `NodeLS` class is a specialized iterator for accessing child nodes of a `Node`. It is automatically created when you access the `ls` property of a `Node` instance. The class is designed to be extended in child classes by overriding the static `NodeLS` method.
#### Inheritance:
- Inherits from: `NodeIterator`
#### Constructor:
`Node.NodeLS(node);`
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

### node.ls.clear()
**Description:**  
The `clear()` method removes all child nodes from the list associated with `node.ls`, unlike most other methods which typically affect individual nodes.
**Notes:**  
- This method **removes all child nodes** from `node.ls`, unlike most other methods that operate on individual nodes or groups of nodes.
- It only affects the child nodes managed by `node.ls` and does not impact other parts of the DOM tree.

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

### node.ls.pop()
### `node.ls.pop()` Method

**Description:**  
The `pop()` method removes the last child node from the `node.ls` list and returns it. This method modifies the `node.ls` list by reducing its length by one.

**Parameters:**  
- This method does not accept any parameters.

**Returns:**  
- **Node**: The removed child node, which is of type `Node`. If there are no child nodes, it returns `null`.

**Notes:**  
- The method modifies the original `node.ls` list by removing the last child node.
- The list is shortened by one node after the operation.

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

## class NodeIterator
**Description:**  
`NodeIterator` is a class that provides an iterator for a sequence of nodes, allowing you to traverse them one by one and perform various operations on each. It helps to work with the DOM tree using methods similar to array iteration, such as `next()`, `prev()`, `slice()`, `splice()`, and others.

If the found node is not an instance of `Node` or its subclass, it is automatically wrapped into a new `Node` object with the parameter `{ tag: element }`.
---
### Where it's used:
- **Creation:**
  - `Node.query(selector)` — finds and returns the first element that matches the selector.
  - `Node.queryAll(selector)` — finds and returns all elements that match the selector.
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
- **From another node iterator:**
  - `iter.ls` — child nodes of the current iterator.
  - `iter.all` — all nodes of the iterator.
  - `iter.filter(cb)` — filters nodes based on the provided function.
  - `iter.drop(limit)` — skips the specified number of nodes.
  - `iter.take(limit)` — takes the specified number of nodes.
  - `iter.filterClass(token)` — filters nodes by class.
  - `iter.filterTag(name)` — filters nodes by tag.
  - `iter.filterVisible()` — filters only visible nodes.

---

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
### iterator.texts()
### iterator.htmls()
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
