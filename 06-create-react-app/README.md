# create-react-app

In this lesson we will learn about a handy tool for starting a new React project.

## Lesson Plan

- What is **create-react-app**
- Starting a new project
- development server
- arranging the files
- working with the module system
- building
- adding css
- adding images
- adding bootstrap

## What is React Component

- Each component represents a block of ui on screen
- In React app we build a tree of components
- component is a function that starts with capital letter and returns JSX
- component should deal with updating as well

## create-react-app

this tool will help us create a web site using react
- bootstrap a react application
- with a bunch of tools and goodies

## Create a new react project

```
> npx create-react-app cra-tutorial
```

## To launch your app

```
> npm start
```

open your browser at: localhost:3000

## Resources are imported

- resources: images, .css, .scss, ... 
- to include them in the project we need to add an import statement
- there is a library called webpack that collects those imports
  - using imports webpack knows which resources to include in your project


## EX.

- Start a new project using create-react-app
- Create a component that displays an image **Logo**
- Add a css file for that component try and use SCSS for your styling
- Add bootstrap, install with npm and add the proper import to **index.css**
- Create a component that displays a login form and use bootstrap css classes to design the form
- Try and position  the components on the center of the screen using bootstrap
