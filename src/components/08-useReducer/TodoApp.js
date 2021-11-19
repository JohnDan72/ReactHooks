import React, { useEffect, useReducer } from 'react';
import JSONTree from 'react-json-tree';
import { Col, Divider, FlexboxGrid } from 'rsuite';

// hooks
import { todoReducer } from './todoReducer';

import FormTask from './FormTask';
import ListTodos from './ListTodos';

// const initialState = [
//     {
//         id: new Date().getTime(),
//         desc: 'Aprender React',
//         done: false
//     }
// ];

const init = () => {
    return JSON.parse(localStorage.getItem('state')) || [];
}

const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, [], init);
    

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
    }, [state]);

    const handleDelete = (idItem) => {
        const action = {
            type: 'D_ITEM',
            payload: idItem
        }

        dispatch(action);
    }

    const handleTogle = (idItem) => {
        dispatch({
            type: 'TOGGLE',
            payload: idItem
        });
    }

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'C_ITEM',
            payload: newTodo
        });
    }
    

    return (
        <>
            <h3>TodoApp (total: {state.length})</h3>
            <Divider></Divider>

            <FlexboxGrid align="middle">
                <FlexboxGrid.Item as={Col} xs={24} sm={12}>
                    
                    <FormTask   handleAdd={handleAdd}/>

                    <ListTodos  state={state}
                                handleTogle={handleTogle}
                                handleDelete={handleDelete}
                                />


                </FlexboxGrid.Item>
                <FlexboxGrid.Item as={Col} xs={24} sm={12}>
                    <Divider>state</Divider>
                    <JSONTree data={state} />

                </FlexboxGrid.Item>
            </FlexboxGrid>


        </>
    );
}


export default TodoApp;