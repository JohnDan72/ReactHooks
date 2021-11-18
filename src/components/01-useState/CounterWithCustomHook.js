import React from 'react';
import { Button, Divider } from 'rsuite';
import { useCounter } from '../../hooks/useCounter';
// import PropTypes from 'prop-types';


const CounterWithCustomHook = () => {

    const { state: counter , increment , decrement , reset } = useCounter(100);

    return(
        <>
            <h3>Counter Hook {counter}</h3>
            <Divider></Divider>
            <Button appearance="ghost" onClick={ () => increment(2) }> + 1 </Button>
            <Button className="ml-3" appearance="ghost" onClick={ () => decrement(2) }> - 1 </Button>
            <Button className="ml-3" color="blue" appearance="ghost" onClick={ reset }> reset </Button>
            
        </>
    );
}


export default CounterWithCustomHook;