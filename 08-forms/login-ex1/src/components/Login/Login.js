import React, {useState} from 'react';

function Login({cb}) {
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });

    // const handleEmailChange = (event) => {
    //     setFormState({
    //         ...formState,
    //         email: event.target.value
    //     });
    // }

    // const handlePasswordChange = (event) => {
    //     setFormState({
    //       ...formState,
    //       password: event.target.value,
    //     });
    // }

    const handleChange = (event) => {
        setFormState({
          ...formState,
          [event.target.name]: event.target.value,
        });
    }

    const handleLogin = async (event) => {
        // get the email and password
        // send them to our server
        // get the token from the server
        event.preventDefault();
        const response = await fetch('https://academeez-login-ex.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });
        const data = await response.json();
        console.log(data);
        cb(data.token);
    }

    return (
      <div>
        <form onSubmit={handleLogin}>
          <input
            value={formState.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter Email..."
          />
          <input
            onChange={handleChange}
            value={formState.password}
            type="password"
            name="password"
            placeholder="Enter Password..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Login;