## React Introduction

In this lesson we will learn the basic of building a react application

## What is React?

React js library for building user interfaces

## User interface of what?

React can be used to build ui for frontend application
Mobile, Desktop, Web, ...
Platform - whomever is running our app
React is platform agnostic

## What we will need to learn React?

Core React ---- Platform

Core React ---- Browser => web sites
Core React ---- React Native Mobile => iOS, Android

We will start by using React to build web sites

## What kind of web sites do we create with React

Single Page Application

## how react helps me to build UI

- React we describe our UI using React Components
- Components are in charge of drawing, and updating the screen
- You take the page you want to build and split the items on that page to components
- Components Tree


                                   LoginPage
                           |       |              |
                        Header    LoginForm      Footer
                         |
                    NavigationBar
- HTML ---> DOM 
- React will translate the components to DOM


## Hello World

Hello

DOM -> <h1>hello world</h1>


## Babel

babel compiler that takes js code and turns it to ES5 + html like syntax => React.createElement

babel can translate syntax similar to html => React.createElement

## JSX

HTML like syntax that is translated to React.createElement
We use JSX to describe our React Components






## Lesson Plan

- What is React
- Parts to learning React
- Which part we will focus
- SPA
- Building a component with React
- React Elements
- Hello World
- JSX
- VirtualDOM

## EX.

- The ex is located at the folder: **04-react-introduction/ex-login**
- the goal is to create a login page
- The login page will be made from the following components
  - App
    - Header
    - Login
    - Footer
- to run the app you must first do:

```
> npm install
```

- after you did that you can run the app with:

```
> npm start
```
