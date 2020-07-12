# React Components

In this lesson we will focus on how to build react components

## What are React components

- React component represents a block ui
- With React we build a tree of components
- every component needs to draw itself, refresh it's drawing
- component turns to jsx tag
  - function Header() {...}    <Header />
- we create with react SPA - no refresh of page
- manual change detection - I need to specify for react to update a component
- if i tell react to update - it does not necessarily means react will update the dom
- When you tell React to update you tell him to update the virtual dom

## props

- props is a way to send data from parent component to child component
- in function component we get the props in the function argument
- props in the child are read only

## H.W - props

- https://reactjs.org/docs/components-and-props.html

## State Machine

1 -----> 2

state 1
{
    user: null       
}

state 2
{
    user: 'Yariv'
}

## Hooks

- hooks are functions
- you call those function like regular js function: const ourState = useState(false)
- hooks start with **use**, useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef
- hooks can be used in function component
- hooks are gateway to component behavior
- never wrap hooks with nesting if's or for's 

### useState

- create part of our state
- useState(initialState)
- you get [state, setState]
- setState(newValue) react will call the function again

### Hooks H.W

- https://reactjs.org/docs/hooks-intro.html
- https://reactjs.org/docs/hooks-overview.html
- https://reactjs.org/docs/hooks-state.html

### Component lifecycle

component has lifecycle events: born, death, update

### HW Component lifecycle

- https://reactjs.org/docs/react-component.html


### useEffect

- useEffect(() => { ... }, [...])
- the first argument which is the function will be run after the first render and after the render of each update - componentDidMount + componentDidUpdate
- the second argument is optional decided which updates will we run the function
- 

- useEffect will run a function after mount + after certain update,
certain update is determined by the array in the second argument
In the useEffect if i opened something that needs to be cleaned, I need to return a cleaning function



### H.W useEffect

- https://reactjs.org/docs/hooks-effect.html

### Riddle



## Lesson Plan

- The job of a react component
- Function component / class component
- props
- state / useState
- events
- component lifecycle
- useEffect

## Ex.

- create a function component that communicates with a server
- the component should display a ul-li list according to the json items the server returns.
- The server is in the following url: https://nztodo.herokuapp.com/api/task/?format=json
- using javascript **fetch** you can query the server and get the list
- you component should query the server when it first loads with **useEffect**
- save the list of items in the state using **useState**
- display the title of each object in the list of items in a ul-li list