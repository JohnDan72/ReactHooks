import React, { useState } from 'react';
import { Button, Divider } from 'rsuite';
// import PropTypes from 'prop-types';
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";
const propTypes = {};
const defaultProps = {};


const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);


    return (
        <>
            <h3>Use Ref</h3>

            <Divider></Divider>
            {/* <Icon as={RiReactjsLine} spin size="4em" /> */}

            { show && <MultipleCustomHooks /> }

            <Button className="my-5"
                    appearance="default"
                    onClick={()=>setShow(!show)}>Show/Hide</Button>
            
        </>
    );
}

RealExampleRef.propTypes = propTypes;
RealExampleRef.defaultProps = defaultProps;

export default RealExampleRef;