import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, FlexboxGrid, List, Toggle } from "rsuite";
import { Icon } from '@rsuite/icons';
import CheckIcon from '@rsuite/icons/Check';
import { BsFillDiamondFill } from 'react-icons/bs';



const propTypes = {
    todo: PropTypes.object.isRequired,
    handleTogle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

const defaultProps = {};


const ListTodoItem = ({ todo, handleTogle, handleDelete }) => {
    return (
        <List.Item key={todo.id} className="disabled">
            <FlexboxGrid justify="space-between" align="middle">
                <FlexboxGrid.Item as={Col} className={`${todo.done && 'disabled'}`} >
                    <Icon as={BsFillDiamondFill} spin style={{ marginRight: '10px' }} />
                    {todo.desc}
                </FlexboxGrid.Item>

                <FlexboxGrid.Item as={Col}>
                    <Toggle size="md" className="mr-3"
                        checkedChildren={<CheckIcon />}
                        checked={todo.done}
                        onChange={() => handleTogle(todo.id)} />
                    <Button color="red"
                        appearance="ghost"
                        onClick={() => handleDelete(todo.id)}>delete</Button>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </List.Item>
    );
}

ListTodoItem.propTypes = propTypes;
ListTodoItem.defaultProps = defaultProps;

export default ListTodoItem;