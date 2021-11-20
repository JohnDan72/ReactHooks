import React, { useContext } from 'react';
import JSONTree from 'react-json-tree';
// import PropTypes from 'prop-types';
import { Button, Divider } from 'rsuite';
import { UserContext } from './UserContext';


const propTypes = {};
const defaultProps = {};


const AboutScreen = () => {

    const { user , setUser} = useContext(UserContext);

    const handleLogout = () => {
        setUser({});
    }

    return (
        <>
            <h3>About page</h3>
            <Divider></Divider>
            <Button appearance="primary" onClick={handleLogout}>Log out</Button>
            <Divider></Divider>
            <JSONTree data={user}/>
        </>
    );
}

AboutScreen.propTypes = propTypes;
AboutScreen.defaultProps = defaultProps;

export default AboutScreen;