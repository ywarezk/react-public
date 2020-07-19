/**
 * In this component we want to create a form
 * In this form the user will input his name
 * We need to grab the name he provided
 * We need to print that name to the console

 */

import React, {useState} from 'react';

/** */

/**
  - controlled form
  - uncontrolled form

*/

function NameForm(props) {
    const [formState, setFormState] = useState({
        myName: '',
        // password: '',
        // email: ..
    });

    /**
     * this function will be called
     * every time the user change the text in the input
     * in this function we will update myName
     */
    const updateMyName = (event) => {
        setFormState({
            ...formState,
            myName: event.target.value
        })
    }

    const handleSubmit = (event) => {
        console.log('name form submitting: ' + formState.myName);

        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    name="my-name"
                    type="text"
                    value={formState.myName}
                    onChange={updateMyName}
                    placeholder="Enter your name..." />
                <button type="submit">
                    Submit form
                </button>
            </form>
        </div>
    );
}

export default NameForm;