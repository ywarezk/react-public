/**
 * Our todo list needs to get the token from the login
 */

import React, {useEffect, useState, useContext} from 'react';
import JWTContext from '../../jwt.context';

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const {token} = useContext(JWTContext);

    useEffect(() => {

        if (!token) return;

        fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setTodoList(data);
            });

    }, [token])

    return (
        <div>
            <ul>
                {
                    todoList.map((singleTodoList) => {
                        return (
                          <li key={singleTodoList.id}>
                            <h1>{singleTodoList.title}</h1>
                            <p>{singleTodoList.description}</p>
                          </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;