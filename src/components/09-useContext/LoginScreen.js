import React, { useContext } from 'react';
import JSONTree from 'react-json-tree';
// import PropTypes from 'prop-types';
import { Button, Divider } from 'rsuite';
import { UserContext } from './UserContext';

const propTypes = {};
const defaultProps = {};

const LoginScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const handleLogin = () => {
        setUser({
            id: 123,
            name: 'Juan Daniel Garcia',
            edad: 24
        })
    }
    return (
        <>
            <h3>Login page</h3>
            <Divider></Divider>
            <Button appearance="primary" onClick={handleLogin}>Login</Button>
            <Divider></Divider>
            <JSONTree data={user}/>

        </>
    );
}

LoginScreen.propTypes = propTypes;
LoginScreen.defaultProps = defaultProps;

export default LoginScreen;