import React, { useEffect, useState } from 'react';
import { Button, ButtonToolbar, Col, Divider, FlexboxGrid, Form, toaster } from 'rsuite';
import JSONView from '../JSONView';
import { Message } from './Message';
// import PropTypes from 'prop-types';


// const propTypes = {};
// const defaultProps = {};

const SimpleForm = () => {

    const [fomrState, setFomrState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = fomrState;

    useEffect(() => {
        console.log("Hey man!!")
    } , []);

    useEffect(() => {
        console.log("email cambió")
    } , [email]);

    // useEffect(() => {
    //     console.log("email cambió")
    // } , [email]);

    const handleInputChange = ({ name, value }) => {
        // console.log(value)
        setFomrState({
            ...fomrState,
            [name]: value
        })
    }


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
                                autoComplete="off"
                                type="email"
                                onChange={(value) => handleInputChange({ name: 'email', value })}
                            />
                            <Form.HelpText tooltip>Email is required</Form.HelpText>
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
                    <JSONView formValue={fomrState} />

                </FlexboxGrid.Item>
            </FlexboxGrid>

            { name === '123' && <Message /> }
        </>
    );
}

// SimpleForm.propTypes = propTypes;
// SimpleForm.defaultProps = defaultProps;

export default SimpleForm;