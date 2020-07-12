import React, { useState } from 'react';

// {name: 'Yariv', age: 35, grade: 50}

// state: { isHelloVisible: true, message: '..', age: 35, todo: [] }
export default function HelloWorld(props) {
    // this undefined

    // wrong
    //if () {
        // [[], function]
        const [todo, setTodo] = useState([]);
    //}
    

    // [state, setState]
    // setMessage( { message: 'foo', age: 36} )
    // destructuring
    const [messageAge, setMessageAge] = useState({
        message: 'hello',
        age: 35
    });

    // isHelloVisible
    // [isHelloVisible, setIsHelloVisible]
    const [isHelloVisible, setIsHelloVisible] = useState(true);
    // const helloVisibleArray = useState(true);
    // const isHelloVisible = helloVisibleArray[0];
    // const setIsHelloVisible = helloVisibleArray[1];
    
    const toggleVisiblity = () => {
        console.log('button clicked');
        setIsHelloVisible(!isHelloVisible);
    }

    const setAgeMessage = () => {
        // im placing only a new message
        setMessageAge({
            message: 'something new',
            age: messageAge.age
        })
    }

    return (
        <>
            {
                isHelloVisible && (
                    <h1>
                        Hello world function {props.name} {props.age}
                    </h1>
                )
            }
            <button onClick={toggleVisiblity}>
                Toggle Visibility
            </button>
        </>
    )
}