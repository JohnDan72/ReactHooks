import React from 'react';
import { Button, ButtonToolbar, Col, Divider, FlexboxGrid, Message } from 'rsuite';
import { useFetch } from '../../hooks/useFetch';
// import PropTypes from 'prop-types';

// icons
import { Icon } from '@rsuite/icons';
import { RiReactjsLine } from "react-icons/ri";
import { useCounter } from '../../hooks/useCounter';


const propTypes = {};
const defaultProps = {};


const MultipleCustomHooks = () => {
    const { increment, decrement, state: counter } = useCounter(3);
    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0]; //doble negación para return 'false' en lugar de 'null'
    console.log(data);


    return (
        <>
            <h3>Use Fetch (Breaking bad API)</h3>

            <Divider></Divider>
            {/* <Icon as={RiReactjsLine} spin size="4em" /> */}

            <FlexboxGrid className="my-4" justify="center" align="middle">
                {
                    (loading)
                        ?
                        (
                            <FlexboxGrid.Item as={Col} >
                                <Icon as={RiReactjsLine} spin size="4em" />
                            </FlexboxGrid.Item>

                        )
                        :
                        (
                            <>
                                <FlexboxGrid.Item as={Col} xs={12}>
                                    <Message showIcon type="success" header="Success">
                                        <h5>Author: {author}</h5>
                                        <h6>Quote: {quote}</h6>
                                    </Message>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item as={Col} >
                                    <ButtonToolbar>
                                        <Button color="yellow"
                                            appearance="ghost"
                                            onClick={(e) => decrement()}
                                        >
                                            Anterior
                                        </Button>
                                        <Button color="blue"
                                            appearance="ghost"
                                            onClick={(e) => increment()}
                                        >
                                            Siguiente
                                        </Button>

                                    </ButtonToolbar>
                                </FlexboxGrid.Item>

                            </>
                        )
                }
            </FlexboxGrid>
        </>
    );
}

MultipleCustomHooks.propTypes = propTypes;
MultipleCustomHooks.defaultProps = defaultProps;

export default MultipleCustomHooks;