import React from 'react';
import { Button, ButtonToolbar } from 'rsuite';
import PropTypes from "prop-types";

const ShowIncrement = React.memo(({ increment }) => {
    
    console.log("Come on Jeff get over here...");

    return (
        <ButtonToolbar className="my-5">
            <Button appearance="ghost" onClick={() => increment(20)}> Increment </Button>
        </ButtonToolbar>
    );
})

ShowIncrement.protoTypes = {
    increment: PropTypes.func.isRequired
}
export default ShowIncrement;