import React, { useLayoutEffect, useRef, useState } from 'react';
import { Button, ButtonToolbar, Col, Divider, FlexboxGrid, Message, TagGroup , Tag } from 'rsuite';

// hooks
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
// icons


const propTypes = {};
const defaultProps = {};


const Layout = () => {
    const [boxSize, setBoxSize] = useState(0)

    const { increment, decrement, state: counter } = useCounter(3);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0]; //doble negación para return 'false' en lugar de 'null'
    // console.log(data);

    const msgPanel = useRef()
    useLayoutEffect(() => {
        // console.log("hey layout")
        // console.log(msgPanel.current.getBoundingClientRect());
        setBoxSize(msgPanel.current.getBoundingClientRect().width)
    }, [quote])

    return (
        <>
            <h3>Breaking bad API</h3>
            <Divider></Divider>
            <TagGroup>
                <Tag size="lg" color="violet">
                    {boxSize}
                </Tag>
            </TagGroup>

            <FlexboxGrid className="my-4" justify="center" align="middle">




                <FlexboxGrid.Item >
                    <Message ref={msgPanel} showIcon type="success" header="Success">
                        <h5>Author: {author}</h5>
                        <h6>Quote: {quote}</h6>
                    </Message>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item as={Col} xs={12}>
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


            </FlexboxGrid>
        </>
    );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;