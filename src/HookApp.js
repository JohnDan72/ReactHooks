import React from 'react';
// import PropTypes from 'prop-types';
import { Col, Container, Content, FlexboxGrid, Header } from 'rsuite';
import { Outlet } from "react-router-dom";
import NavBarHeader from './components/NavBarHeader';



const HookApp = ({ setTheme }) => {
    

    return (
        <Container>
            <Header className="mt-2">
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item as={Col} xs={20} md={18} lg={16}>
                        <NavBarHeader setTheme={setTheme} />
                    </FlexboxGrid.Item>
                </FlexboxGrid>
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


export default HookApp;