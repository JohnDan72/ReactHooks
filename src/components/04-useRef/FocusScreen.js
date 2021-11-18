import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Col, Divider, FlexboxGrid, Form } from 'rsuite';


const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const FocusScreen = () => {

    const inputRef = useRef()

    const handleSubmit = (e) => {
        inputRef.current.firstChild.select();
        console.log(inputRef)
    }

    return (
        <>
            <h3>Use Ref</h3>

            <Divider></Divider>
            {/* <Icon as={RiReactjsLine} spin size="4em" /> */}

            <FlexboxGrid className="my-4" justify="center">
                <FlexboxGrid.Item as={Col} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.ControlLabel>Name</Form.ControlLabel>
                            <Form.Control 
                                name="name"
                                ref={inputRef}
                                placeholder="Su nombre"
                                // onChange={(value) => handleInputChange({ name: 'name', value })}
                            />
                            <Form.HelpText>Name is required</Form.HelpText>
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary"
                                    type="submit">Focus</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </>
    );
}

FocusScreen.propTypes = propTypes;
FocusScreen.defaultProps = defaultProps;
// #endregion

export default FocusScreen;