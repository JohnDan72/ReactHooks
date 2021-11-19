import React from 'react';
import PropTypes from 'prop-types';
import { List } from "rsuite";
import ListTodoItem from './ListTodoItem';

const propTypes = {
    state: PropTypes.array.isRequired,
    handleTogle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
const defaultProps = {};

/**
 * 
 */
const ListTodos = ({ state , handleTogle , handleDelete }) => {
    return (
        <List bordered className="my-4" >
            {
                state.map(todo => (
                    <ListTodoItem   key={todo.id} todo={todo} 
                                    handleTogle={handleTogle} 
                                    handleDelete={handleDelete} />
                ))
            }

        </List>
    );
}

ListTodos.propTypes = propTypes;
ListTodos.defaultProps = defaultProps;

export default ListTodos;