import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'rsuite';


const NotFound = () => {
    return (
        <>
            <h3>404 - Page not found</h3>
            <Divider></Divider>
            <Link className="rs-nav-item" to="/hooks">Go Home</Link>
        </>
    );
}

export default NotFound;