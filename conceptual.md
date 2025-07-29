### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JavaScript library for building User Interface which developed by facebook. 
It allows to make the reusable components and render only  the parts of the UI that change. 
You would use React when building dynamic, state-driven applications that require interactive user experiences.
- What is Babel?
In React, it allows us to use JSX syntax by converting it into standard JavaScript.
- What is JSX?
JSX stands for JavaScript XML.
It is a syntax extension that allows writing HTML-like tags inside JavaScript, making it easier to describe the UI in a readable way within React components.
- How is a Component created in React?
A React component can be created as a function or a class.
The most common way today is using a functional component like this:
- What are some difference between state and props?
props are read-only data passed from parent to child components.
state is data that is managed internally by the component and can be changed.
- What does "downward data flow" refer to in React?
data in React flows from parent components to child components.
A child cannot directly change its parent's state; it must communicate via callbacks passed as props.
- What is a controlled component?
A controlled component is a form input whose value is controlled by React state.
Every change to the input updates the state, and the state determines the displayed value.
- What is an uncontrolled component?
An uncontrolled component is a form input that manages its own state internally, using the DOM.
React accesses the value only when needed, typically using ref
- What is the purpose of the `key` prop when rendering a list of components?
The key prop uniquely identifies each element in a list, helping React efficiently update or reorder items when changes occur.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using an array index as a key can lead to rendering bugs when the order of items changes.
React may reuse the wrong DOM elements, leading to unexpected behavior.
- Describe useEffect.  What use cases is it used for in React components?
useEffect is a hook used to perform side effects in React components, such as fetching data, setting up subscriptions, or updating the DOM after rendering
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef holds a mutable value that persists across renders.
Updating a ref does not trigger a component rerender.
- When would you use a ref? When wouldn't you use one?
Use a ref when you need direct access to a DOM element or to persist a value without causing rerenders.
Avoid using ref for data that affects rendering; use state instead.
- What is a custom hook in React? When would you want to write one?
A custom hook is a reusable function that uses built-in React hooks to encapsulate logic.
You create one when you want to share logic between multiple components.