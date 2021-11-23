import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Form } from 'rsuite';
import { useSimpleForm } from '../../hooks/useSimpleForm';

const propTypes = {
    handleAdd: PropTypes.func.isRequired,
};
const defaultProps = {};


const FormTask = ({ handleAdd }) => {
    const inputRef = useRef();

    const { formValue, handleInputChange } = useSimpleForm({ task: '' });
    const { task } = formValue;

    const handleSumbit = (e) => {

        if (formValue.task.trim() === '') {
            console.log("Campo vacío");
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: formValue.task,
            done: false
        }
        

        handleInputChange({ name: 'task', value: '' });
        // inputRef.current.firstChild.value = '';
        // inputRef.current.firstChild.select();
        handleAdd(newTodo);

    }
    return (
        <Form onSubmit={handleSumbit}>
            <Form.Group controlId="name">
                <Form.ControlLabel>Task description</Form.ControlLabel>
                <Form.Control name="task"
                    placeholder="new task"
                    ref={inputRef}
                    value={task}
                    onChange={(value) => handleInputChange({ name: 'task', value })}
                />

            </Form.Group>
            <Form.Group>
                <ButtonToolbar >
                    <Button appearance="primary" type="submit">Add Item</Button>
                </ButtonToolbar>
            </Form.Group>
        </Form>
    );
}

FormTask.propTypes = propTypes;
FormTask.defaultProps = defaultProps;

export default FormTask;