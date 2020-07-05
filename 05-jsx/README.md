# JSX

In this lesson we will talk about the syntax we will use to describe our React components.

## What is JSX

gives us html like syntax that we can use in our js files
jsx translates to React.createElement

## JSX rules - what i can and cannot do in JSX

1. tags in lowercase tags in upper case Component
2. do not use reserved js words in jsx
3. React has to be on scope
4. Events
5. Javascript inside JSX
6. one element wraps the jsx


## Lesson Plan

- What is JSX
- Rules
  - only lower case upper case are form components
  - React has to be on scope
  - no js terms
  - curly braces
  - camelCase
  - events
  - if, for

## Ex.

- The ex is inside the folder **ex-jsx**
- complete the **jsx-example.js** file
- Create a component that prints **randomNumber** in an h1 tag
- Create a component that displays one of the following
  - if **randomNumber** is larger than 0.5 display the text **HIGH**
  - if **randomNumber** is lower or equal than 0.5 display the text **LOW**
- Create a component that iterates on the array **randomArray** and displays an unordered list (ul-li) with li for every item printing in each li the random number
- the last component you need to create is a component that wraps all the components
- ReactDom.render(<App />, document.getElementById('root')) 



