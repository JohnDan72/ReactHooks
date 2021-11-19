import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Dropdown, Nav } from 'rsuite';
import ResponsiveNav from '@rsuite/responsive-nav';



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
        <>
            <ResponsiveNav activeKey={active} onSelect={setActive} appearance="tabs">

                <ResponsiveNav.Item icon={<BsFillHouseFill />} eventKey='home'> Home </ResponsiveNav.Item>
                <ResponsiveNav.Item href="/counter" eventKey='useState'> 01-useState</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/counterHook" eventKey='useStateHook'> 01-useState-Hook</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/useEffect" eventKey='useEffect'> 02-useEffect</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/useEffectHook" eventKey='useEffectHook'> 02-useEffect-Hook</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/useFetch" eventKey='useFetch'> 03-useFetch</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/useRef" eventKey='useRef'> 04-useRef</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/useRefReal" eventKey='useRefReal'> 04-useRefReal</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/useLayoutEffect" eventKey='useLayoutEffect'> 05-useLayoutEffect</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/memorize" eventKey='memorize'> 06-memorize</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/memoHook" eventKey='memoHook'> 06-memoHook</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/useCallback" eventKey='useCallback'> 06-useCallback</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/tareaMemo" eventKey='tareaMemo'> 07-tareaMemo</ResponsiveNav.Item>
                <ResponsiveNav.Item href="/useReducer" eventKey='useReducer'> 08-useReducer</ResponsiveNav.Item>
                
                
                <ResponsiveNav.Item eventKey='light' onClick={()=>handleTheme('light')}> Mode light</ResponsiveNav.Item>
                <ResponsiveNav.Item eventKey='dark' onClick={()=>handleTheme('dark')}> Mode dark</ResponsiveNav.Item>
                <ResponsiveNav.Item eventKey='highContrast' onClick={()=>handleTheme('high-contrast')}> Mode highContrast</ResponsiveNav.Item>
                
            </ResponsiveNav>
        </>
    );
}

NavBarHeader.propTypes = propTypes;
NavBarHeader.defaultProps = defaultProps;
// #endregion

export default NavBarHeader;