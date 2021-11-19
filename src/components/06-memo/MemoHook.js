import React, { useMemo, useState } from 'react';
import { Button, ButtonToolbar, Divider, TagGroup, Tag} from 'rsuite';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
// import PropTypes from 'prop-types';


const propTypes = {};
const defaultProps = {};

const MemoHook = () => {

    const { state: counter, increment, decrement } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <>
            <h3> useMemo </h3>
            <Divider></Divider>
            <p>
                { memoProcesoPesado }
            </p>
            <TagGroup>
                <Tag size="lg" color="green">
                    {counter}
                </Tag>
            </TagGroup>
            <ButtonToolbar className="my-5">
                <Button appearance="ghost" onClick={() => increment(2)}> + 1 </Button>
                <Button appearance="ghost" onClick={() => decrement(2)}> - 1 </Button>
                <Button color="blue" appearance="ghost" onClick={() => setShow(!show)}> show/hide ({JSON.stringify(show)}) </Button>
            </ButtonToolbar>
        </>

    );
}

MemoHook.propTypes = propTypes;
MemoHook.defaultProps = defaultProps;


export default MemoHook;