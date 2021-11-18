import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Nav } from 'rsuite';


// icons
import { BsFillHouseFill } from "react-icons/bs";


const propTypes = {
    setTheme: PropTypes.func.isRequired
};
const defaultProps = {};


const NavBarHeader = ({ setTheme }) => {

    const [active, setActive] = useState('home');
    const handleTheme = (theme) => setTheme(theme);

    return (
        <Nav appearance="tabs" active={active} onSelect={setActive}>
            <Nav.Item href="/" eventKey="home" icon={<BsFillHouseFill />}>
                Home
            </Nav.Item>
            
            <Nav.Item href="/counter" eventKey="useState">01-useState</Nav.Item>
            <Nav.Item href="/counterHook" eventKey="useStateHook">01-useState-Hook</Nav.Item>
            <Nav.Item href="/useEffect" eventKey="useEffect">02-useEffect</Nav.Item>
            <Nav.Item href="/useEffectHook" eventKey="useEffectHook">02-useEffect-Hook</Nav.Item>
            <Nav.Item href="/useFetch" eventKey="useFetch">03-useFetch</Nav.Item>
            <Dropdown title="Mode">
                <Dropdown.Item  eventKey="light" 
                                onClick={() => handleTheme('light')}>
                                    Light
                </Dropdown.Item>  
                <Dropdown.Item  eventKey="dark" 
                                onClick={() => handleTheme('dark')}>
                                    Dark
                </Dropdown.Item> 
                <Dropdown.Item  eventKey="highContrast" 
                                onClick={() => handleTheme('high-contrast')}>
                                    High Contrast
                </Dropdown.Item>   
            </Dropdown>
        </Nav>

    );
}

NavBarHeader.propTypes = propTypes;
NavBarHeader.defaultProps = defaultProps;
// #endregion

export default NavBarHeader;