import React from 'react'
import { Button } from 'rsuite';

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <Button
            className=" mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </Button>
    )
})
