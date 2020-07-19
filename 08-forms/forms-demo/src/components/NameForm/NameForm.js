/**
 * In this component we want to create a form
 * In this form the user will input his name
 * We need to grab the name he provided
 * We need to print that name to the console

 */

import React, {useRef} from 'react';

/** */

/**
  - controlled form
  - uncontrolled form

*/

function NameForm(props) {
    // { current: null -> DOMInput }
    const inputRef = useRef(null);
    // const inputRef = {current: null};

    // function handleSubmit() {
    // ...
    // }

    const handleSubmit = (event) => {
        console.log('name form submitting: ' + inputRef.current.value);

        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    ref={inputRef}
                    name="my-name"
                    type="text"
                    placeholder="Enter your name..." />


                <button type="submit">
                    Submit form
                </button>
            </form>
        </div>
    );
}

export default NameForm;