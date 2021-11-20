import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CustomNavLink } from './CustomNavItem';


// icons
import { BsFillHouseFill } from "react-icons/bs";
import { Nav } from 'rsuite';



const propTypes = {
    setTheme: PropTypes.func.isRequired
};
const defaultProps = {};


const NavBarHeader = ({ setTheme }) => {
    const [active, setActive] = useState('home');
    const handleTheme = (theme) => setTheme(theme);

    return (
        <>
            <Nav activeKey={active} onSelect={setActive} appearance="tabs">
                <Nav.Item as={CustomNavLink} href="/hooks" eventKey="home" icon={<BsFillHouseFill />}>Home</Nav.Item>
                <Nav.Dropdown title="01">
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/counter" eventKey='useState'>01-useState</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/counterHook" eventKey='useStateHook'>01-useState-Hook</Nav.Dropdown.Item>
                </Nav.Dropdown>
                <Nav.Dropdown title="02">
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/useEffect" eventKey='useEffect'>02-useEffect</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/useEffectHook" eventKey='useEffectHook'>02-useEffect-Hook</Nav.Dropdown.Item>
                </Nav.Dropdown>
                <Nav.Dropdown title="03">
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/useFetch" eventKey='useFetch'> 03-useFetch</Nav.Dropdown.Item>
                </Nav.Dropdown>
                <Nav.Dropdown title="04">
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/useRef" eventKey='useRef'> 04-useRef</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/useRefReal" eventKey='useRefReal'> 04-useRefReal</Nav.Dropdown.Item>
                </Nav.Dropdown>
                <Nav.Dropdown title="05">
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/useLayoutEffect" eventKey='useLayoutEffect'> 05-useLayoutEffect</Nav.Dropdown.Item>
                </Nav.Dropdown>
                <Nav.Dropdown title="06">
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/memorize" eventKey='memorize'> 06-memorize</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/memoHook" eventKey='memoHook'> 06-memoHook</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/useCallback" eventKey='useCallback'> 06-useCallback</Nav.Dropdown.Item>
                </Nav.Dropdown>
                <Nav.Dropdown title="07">
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/tareaMemo" eventKey='tareaMemo'> 07-tareaMemo</Nav.Dropdown.Item>
                </Nav.Dropdown>
                <Nav.Dropdown title="08">
                    <Nav.Dropdown.Item as={CustomNavLink} href="/hooks/useReducer" eventKey='useReducer'> 08-useReducer</Nav.Dropdown.Item>
                </Nav.Dropdown>
                <Nav.Dropdown title="theme">
                    <Nav.Dropdown.Item eventKey='light' onClick={() => handleTheme('light')}> Mode light</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item eventKey='dark' onClick={() => handleTheme('dark')}> Mode dark</Nav.Dropdown.Item>
                    <Nav.Dropdown.Item eventKey='highContrast' onClick={() => handleTheme('high-contrast')}> Mode highContrast</Nav.Dropdown.Item>
                </Nav.Dropdown>
            </Nav>
        </>
    );
}

NavBarHeader.propTypes = propTypes;
NavBarHeader.defaultProps = defaultProps;
// #endregion

export default NavBarHeader;