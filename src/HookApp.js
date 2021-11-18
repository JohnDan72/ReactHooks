import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Col, Container, Content, CustomProvider, FlexboxGrid, Header } from 'rsuite';
import NavBarHeader from './components/NavBarHeader';
import CounterApp from './components/01-useState/CounterApp';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';
import SimpleFormWithCustomHook from './components/02-useEffect/SimpleFormWithCustomHook';
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
import FocusScreen from './components/04-useRef/FocusScreen';
import RealExampleRef from './components/04-useRef/RealExampleRef';
import Layout from './components/05-layoutEffect/Layout';


const HookApp = () => {
    const [theme, setTheme] = useState('dark');

    return (
        <>
            <CustomProvider theme={theme}>
                <Container>
                    <Header className="mt-2">
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item as={Col} xs={20}>
                                <NavBarHeader setTheme={setTheme} />
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Header>
                    <Content className="mt-3">
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item as={Col} xs={20}>
                                <Router>
                                    <Routes>
                                        <Route exact path="/" element={<h2>Home</h2>} />
                                        <Route exact path="/counter" element={<CounterApp />} />
                                        <Route exact path="/counterHook" element={<CounterWithCustomHook />} />
                                        <Route exact path="/useEffect" element={<SimpleForm />} />
                                        <Route exact path="/useEffectHook" element={<SimpleFormWithCustomHook />} />
                                        <Route exact path="/useFetch" element={<MultipleCustomHooks />} />
                                        <Route exact path="/useRef" element={<FocusScreen />} />
                                        <Route exact path="/useRefReal" element={<RealExampleRef />} />
                                        <Route exact path="/useLayoutEffect" element={<Layout />} />
                                    </Routes>
                                </Router>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Content>
                </Container>
            </CustomProvider>
        </>
    );
}


export default HookApp;