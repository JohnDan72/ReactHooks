import React, { useState } from 'react';
import { Button, ButtonToolbar, Divider} from 'rsuite';
import { useCounter } from '../../hooks/useCounter';
import Small from './Small';
// import PropTypes from 'prop-types';


const propTypes = {};
const defaultProps = {};

const Memorize = () => {

    const { state: counter , increment , decrement } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>

            <h3> Memorize </h3>
            <Divider></Divider>
            <Small  value={counter}></Small>
            <ButtonToolbar className="my-5">
                <Button appearance="ghost" onClick={() => increment(2)}> + 1 </Button>
                <Button appearance="ghost" onClick={() => decrement(2)}> - 1 </Button>
                <Button color="blue" appearance="ghost" onClick={()=>setShow(!show)}> show/hide ({JSON.stringify(show)}) </Button>
            </ButtonToolbar>
        </>

    );
}

Memorize.propTypes = propTypes;
Memorize.defaultProps = defaultProps;


export default Memorize;