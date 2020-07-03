# React Components

In this lesson we will focus on how to build react components

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