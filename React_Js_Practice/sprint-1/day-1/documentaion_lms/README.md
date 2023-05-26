## What is React?
- It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files. This is a Single page application.

## Who made React?
- React was originally created by Jordan Walke

## What is Babel?
- JSX should not be implemented directly by browsers, but instead requires a compiler to transform it into ECMAScript ,babel comes into action for that.

## How does Babel convert html code in React into valid code?
- Babel converts HTML code into valid code by using the JSX code and converter

## What is ReactDOM used for? Write an example?
- It provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.
# Syntax
-  ReactDOM.render(element, container, callback)

## What are the packages that you need to import for react to work with?
- by npx tool we can create our react-project package in react.

## How do you add react to a web application?
- Step 1: Add a DOM Container to the HTML

- Step 2: Add the Script Tags

- Step 3: Create a React Component
- `const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));`

## What is React.createElement?
- React. createElement( type, [props], [... children] ) Create and return a new React element of the given type. The type argument can be either a tag name string (such as 'div' or 'span' ), a React component type (a class or a function), or a React fragment type.

## What are the three properties that createElement accept?
- 1. type
- 2. props
- 3. children

## What is the meaning of render and root?
- # Render
   - The ReactDOM.render() function takes two arguments, HTML code and an HTML element. The purpose of the function is to display the specified HTML code inside the specified HTML element
- # root
   - The root node is the HTML element where you want to display the result. It is like a container for content managed by React.