/**
 * In this component we want to create a form
 * In this form the user will input his name
 * We need to grab the name he provided
 * We need to print that name to the console

 */

import React, {useState} from 'react';
import useForms from '../../hooks/forms.hook';

/** */

/**
  - controlled form
  - uncontrolled form

*/

function NameForm(props) {
    const [formState, updateMyName, handleSubmit] = useForms(
        {
            myName: '',
        },
        () => {
            console.log('name form submitting: ' + formState.myName);
        }
    );

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="myName"
            type="text"
            value={formState.myName}
            onChange={updateMyName}
            placeholder="Enter your name..."
          />
          <button type="submit">Submit form</button>
        </form>
      </div>
    );
}

export default NameForm;