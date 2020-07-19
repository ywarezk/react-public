/**
 * I have common things between the components with forms
 * - state
 * - handleInputChage
 */

import {useState} from 'react';

export default function useForms(initialFormState, submitCb) {
    const [formState, setFormState] = useState(initialFormState);

    /**
     * this function will be called
     * every time the user change the text in the input
     * in this function we will update myName
     */
    const updateField = (event) => {
        setFormState({
          ...formState,
          [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        submitCb();
    }


    return [formState, updateField, handleSubmit];
}