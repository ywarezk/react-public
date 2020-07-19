# Forms

In this lesson we will learn how to deal with form in react components

## Lesson Plan

- Controlled form
- Uncontrolled form
- useRef
- HOC
- Render props
- Custom hooks

## H.W1

- read the docs about forms

https://reactjs.org/docs/forms.html

##. H.W2

Read about spread operator

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax



## EX.

- Create the following components: App, Login, TodoList
- The Login component is a form containing an email field and a password field.
- The Login form should sync the email field and the password field with the component state (Controlled form)
- There is an active account you can send that will log in successfully: yariv's mail and password: 1,2,3,4,5
- The Login component should grab the form input and send it via a post request to this url: https://academeez-login-ex.herokuapp.com/api/users/login
- The body of the post request:

```
{
    email: '...',
    password: '...'
}
```
- upon successful login you will get a JWT token from the server.
- pass that token to the TodoList component.
- The App component should place both the Login and the TodoList components, which means the JWT token will have to be passed to the App and from the App by props to TodoList
- The TodoList component when it is getting the JWT token should send a get request to the following url: https://academeez-login-ex.herokuapp.com/api/tasks
- to get the list of todo you will have to send that request with the JWT token in the headers.
- You should add the following to the headers:
```
{
    Authorization: Bearer <token>
}
```
- If you are successful you will get the todo list which the component should display in a ul-li list.

https://www.youtube.com/watch?v=8BtdI3-ateM&t=1123s

## EX

- Try to pass the jwt token from the Login to the TodoList by using a context

## EX.

https://www.youtube.com/watch?v=-tmLZX6scnY&t=938s
