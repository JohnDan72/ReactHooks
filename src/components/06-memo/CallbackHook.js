import React, { useCallback, useState } from 'react';
import { Divider, TagGroup, Tag } from 'rsuite';
import ShowIncrement from './ShowIncrement';



const CallbackHook = () => {

    const [counter, setCounter] = useState(10)
    // const increment = () => setCounter(counter + 1);
    // const decrement = () => setCounter(counter - 1);

    const increment = useCallback(
        (num) => {
            setCounter( c => c + num );
        },
        [setCounter],
    );

    return (
        <>
            <h3> useCallback </h3>
            <Divider></Divider>
            
            <TagGroup>
                <Tag size="lg" color="green">
                    {counter}
                </Tag>
            </TagGroup>

            <ShowIncrement increment={increment} />

        </>
    );
}


export default CallbackHook;