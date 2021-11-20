import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Content, FlexboxGrid, Header } from 'rsuite';
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
            <Content className="mt-3">
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item as={Col} xs={20} md={18} lg={16}>

                        <Outlet />

                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    );
}

ContextApp.propTypes = propTypes;
ContextApp.defaultProps = defaultProps;

export default ContextApp;