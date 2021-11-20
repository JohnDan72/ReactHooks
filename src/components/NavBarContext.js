import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'rsuite';
import { CustomNavLink } from './CustomNavItem';
import { BsFillBookmarksFill, BsFillHouseFill, BsFillPersonFill } from 'react-icons/bs';

const propTypes = {
    setTheme: PropTypes.func.isRequired
};
const defaultProps = {};


const NavBarContext = ({ setTheme }) => {
    const [active, setActive] = useState('home');
    const handleTheme = (theme) => setTheme(theme);

    return (

        <Navbar appearance="inverse">
            <div className="container">
                <Navbar.Brand as={CustomNavLink} href="/context">LOGO</Navbar.Brand>
                <Nav activeKey={active} onSelect={setActive}>
                    <Nav.Item as={CustomNavLink} href="/context" eventKey="home" icon={<BsFillHouseFill />}>Home</Nav.Item>
                    <Nav.Item as={CustomNavLink} href="/context/about" eventKey="about" icon={<BsFillBookmarksFill />}>About</Nav.Item>

                    <Nav.Dropdown title="Theme">
                        <Nav.Dropdown.Item as={CustomNavLink} eventKey='light' onClick={() => handleTheme('light')}> Mode light</Nav.Dropdown.Item>
                        <Nav.Dropdown.Item as={CustomNavLink} eventKey='dark' onClick={() => handleTheme('dark')}> Mode dark</Nav.Dropdown.Item>
                        <Nav.Dropdown.Item as={CustomNavLink} eventKey='highContrast' onClick={() => handleTheme('high-contrast')}> Mode highContrast</Nav.Dropdown.Item>
                    </Nav.Dropdown>
                </Nav>
                <Nav pullRight>
                    <Nav.Item as={CustomNavLink} href="/context/login" icon={<BsFillPersonFill />}>Login</Nav.Item>
                </Nav>

            </div>
        </Navbar>
    );
}

NavBarContext.propTypes = propTypes;
NavBarContext.defaultProps = defaultProps;

export default NavBarContext;