import React from 'react';
import { Outlet } from 'react-router-dom';
import {  Container, Content, Header } from 'rsuite';
import NavBarContext from '../NavBarContext';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const ContextApp = ({ setTheme }) => {


    return (
        <Container>
            <Header >
                <NavBarContext setTheme={setTheme} />
            </Header>
            <Content className="mt-3 container">
                <Outlet />
            </Content>
        </Container>
    );
}

ContextApp.propTypes = propTypes;
ContextApp.defaultProps = defaultProps;

export default ContextApp;