/**
 * component
 * Function
 * 5..4..3..2..1 BOM!
 * 
 */

import React, {useState, useEffect} from 'react';

// {cb: () => ...}
export default function Countdown(/*props*/ {cb}) {
    const [counter, setCounter] = useState(5);
    const [message, setMessage] = useState('hello');

    // it will call the function after each render
    // componentDidMount + componentDidUpdate* + componentWillUnmount+++

    /**
     componentDidUpdate() {
         if(...) {

         }
     }
     */
    useEffect(
        function() {
            if (counter <= 0) {
                cb();
                return;
            }

            // this function will be called multiple times
            // after each render this is the default behavior 
            const intervalId = setInterval(() => {
                setCounter(counter - 1);
            }, 1000);

            return () => {
                // this will clean the previous run of the callback
                clearInterval(intervalId);
            }
        },
        [counter, cb] // which render will the function be called
        // if empty array - componentDidMount
        // componentDidMount + componentWillUnmount
    )

    useEffect(() => {

    }, [message])


    return (
        <h1>
            {
                counter
            }
        </h1>
    )
}