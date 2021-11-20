import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { Divider } from 'rsuite';
import { UserContext } from "./UserContext";
import JSONTree from 'react-json-tree';


const HomeScreen = () => {

    const { user , setUser} = useContext(UserContext);

    console.log(setUser);
    return (
        <>
            <h3>Home page</h3>
            <Divider></Divider>
            <JSONTree data={user}/>
        </>
    );
}


export default HomeScreen;