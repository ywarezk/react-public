# Redux

In this lesson we will learn how to share data in a redux state
and share that data between components.

## Data management 

past

```
class UserService {
	
	user: User
	
}
```

```
import userService

function Header() {
	
	userService.user.callback((user) => {
		
	})
	
}
```

```
import userService
function Logout() {
	userService.user.next(null)
}
```


UserService  -----------> Header, TodoList, ....
TodoService  -----------> Component1, Component2, ... Componentn
DashboardService -------> ComponentYariv, ComponentPiglet, ComponentSweetness, ...
...

each data can change few times, hundreds of times

i can track the change of data in a period of time it will be easy to understand 
the changes that the components made along the app

## Redux

redux is a library that helps us manage our data.

- you can save data
- you can change the data
- you can register components to listen to data change
- Track data change - how the data is changed? predictability 
- the most popular react library for managing data
- community power

downside
- more code to write
- learning curve

## H.W

https://www.youtube.com/watch?v=7pZmBah66zE
https://www.youtube.com/watch?v=3PKv9gG68Pg


## Redux framework agnostic

redux for angular, react, vue, angular.js, ember, etc.

  - redux core
  - redux framework / library == react
  
## data == state

```
let state = {
	user: {
		firstName: 'Yariv',
		lastName: 'Katz',
		avatar: 'https://.../avatar.png'
	},
	
	todo: {
		tasks: [
			{title: '', description: '', id},
			{title: '', description: '', id}
			{title: '', description: '', id}
			...
		]
	},
	
	dashboard: {
		graph: '',
		modal: 'export'
	}
}
```

state is immutable

you cannot do this:

```
state.user.firstName = 'Piglet'
```

you need to assign a new state to change it

state = {
	user: {
		firstName: 'Yariv',
		lastName: 'Katz',
		avatar: 'https://.../avatar.png'
	},
	
	miriam: {
		
	},
	
	todo: {
		tasks: [
			{title: '', description: '', id},
			{title: '', description: '', id}
			{title: '', description: '', id}
			...
		]
	},
	
	dashboard: {
		graph: '',
		modal: 'export'
	}
}

## Store

the store will hold our state
the store will manage our state

- read the createStore api: https://redux.js.org/api/createstore

- read the store api: https://redux.js.org/api/store

## Reading the data in component

in each component you can read the data by:

```
npm install react-redux
```

you can read the data with the custom hook: `useSelector`

## Action

describes the change we want to perform in the redux state

```
{
	type: '[user] Set FirstName',
	payload?: 'Piglet'
}

{
	type: '[tasks] Set Tasks',
	payload?: [{title: ...}]
}

{
	type: '[todo] Send Request'
}

{
	type: '[user] logout'
}
```

https://redux.js.org/recipes/reducing-boilerplate#actions



## Reducer

given an action, given the current state => I decide what the next state will be
(state, action) => nextState

```
[
	action1,
	action2,
	action3,
	...
	action-n
] => the current state
```

reducers for every section

## Redux summary

1. npm install redux
2. npm install react-redux
3. createStore()
4. `<Provider store={}>`
5. Reducers `{user: {}}`
6. useSelector
7. Action setFirstName
8. useDispatch() => dispatch(action)


## Lesson Plan

- What is Redux
- Actions
- Reducers
- Store
- Connecting redux to components
  - useSelector
  - useDispatch 