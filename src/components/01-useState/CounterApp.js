import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Button, Divider } from 'rsuite';


/**
 * 
 */
const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })
    const { counter1 } = state;

    const handleCounter1 = () => {
        setState({ ...state , counter1: counter1 + 1})
    }

    return(
        <>
            <h3>Counter {counter1}</h3>
            <Divider></Divider>
            <Button appearance="ghost" onClick={ handleCounter1 }>Count</Button>
            
        </>
    );
}

export default CounterApp;