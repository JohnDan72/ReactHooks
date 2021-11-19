import React, { memo } from 'react';
import { TagGroup , Tag } from 'rsuite';
import PropTypes from 'prop-types';



const Small = memo(({value}) => {

    console.log("Me volví a llamar");

    return (
        <TagGroup>
            <Tag size="lg" color="violet">
                {value}
            </Tag>
        </TagGroup>
    );
})

Small.propTypes = {
    value: PropTypes.number.isRequired
}

export default Small;