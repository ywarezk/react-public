/**
 * component
 * function
 * 
 * componentDidMount
 * https://nztodo.herokuapp.com/api/task/?format=json
 * 
 * state initial = the list is empty
 * state 2 = we get the response and the list is full
 * 
 * initial -----> state 2
 */

import React, {useState, useEffect} from 'react';

// state initial: { list: []}
// state 2: { list: [{ ...}, ...]}
export default function TodoList() {
    const [list, setList] = useState([]);

    // componentDidMount
    useEffect(() => {
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then((response) => {
                return response.json();
            })
            .then((dataFromServer) => {
                setList(dataFromServer)
            })
    }, []);

    return (
        <ul>
            {
                list.map((singleItem) => {
                    return (
                        <li key={singleItem.id}>
                            {
                                singleItem.title
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}