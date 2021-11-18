

import React from 'react';
import { Button, ButtonToolbar, Col, Divider, FlexboxGrid, Form, toaster } from 'rsuite';
import { useSimpleForm } from '../../hooks/useSimpleForm';
import JSONView from '../JSONView';
import { Message } from './Message';
// import PropTypes from 'prop-types';


// const propTypes = {};
// const defaultProps = {};

const SimpleFormWithCustomHook = () => {

    const { formValue , handleInputChange } = useSimpleForm({
        name: 'Juan Daniel',
        email: '',
        password: ''
    });

    const { name } = formValue;


    return (
        <>
            <h3>Use Effect</h3>
            
            <Divider></Divider>
            <FlexboxGrid className="my-4" justify="space-between">
                <FlexboxGrid.Item as={Col} xs={12}>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.ControlLabel>Name</Form.ControlLabel>
                            <Form.Control name="name"
                                placeholder="type a new Name"
                                onChange={(value) => handleInputChange({ name: 'name', value })}
                            />
                            <Form.HelpText>Name is required</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.ControlLabel>Email</Form.ControlLabel>
                            <Form.Control name="email"
                                placeholder="enter your email addres"
                                type="email"
                                onChange={(value) => handleInputChange({ name: 'email', value })}
                            />
                            <Form.HelpText tooltip>Email is required</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.ControlLabel>Password</Form.ControlLabel>
                            <Form.Control name="password"
                                placeholder="Introduce a saved password"
                                type="password"
                                autoComplete="off" 
                                onChange={(value) => handleInputChange({ name: 'password', value })}
                                />
                        </Form.Group>

                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={() => toaster.push(<Message />,{placement:'topCenter'})}>Submit</Button>
                                <Button appearance="default">Cancel</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item as={Col} xs={12}>
                    <JSONView formValue={formValue} />

                </FlexboxGrid.Item>
            </FlexboxGrid>

            { name === '123' && <Message /> }
        </>
    );
}

// SimpleFormWithCustomHook.propTypes = propTypes;
// SimpleFormWithCustomHook.defaultProps = defaultProps;

export default SimpleFormWithCustomHook;