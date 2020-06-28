## Some tools we will need

In this lesson we will go over some tools we will use throughout this course. 
We will only briefly cover them and their purpose and not dwell on all the functionality since this course aim to focus on React and each of these tools can have an entire course of their own

Our plan is to cover the following tools

## Node.js

Javascript runtime

verify that node is installed:

```
> node -v
```

  - What is Node.js
  - Install Node.js

## NPM

node package manager
npm is used to install js packages
we will use npm to install libraries

1. init npm for a project in a directory

```
> npm init --yes
```

only do this command once and if there is no package.json in the folder.

2. to install a package:

```
> npm install <name-of-package>
```

installing a package and placing that package in **node_modules**


  - What is NPM
  - init
  - install package

## NPX

node package executer

npx will look for a command node_module/.bin and will execute it
some packages arrive with executable
npx will help you run that executable

```
> npx create-react-app demo-project
```

this command is used to start a new react web site project

if npx doesn't find **create-react-app** in node_module/.bin
npx will install the library globally use the executable and then delete the library

  - What npx does

## Visual Studio Code
  this will be our code editor

