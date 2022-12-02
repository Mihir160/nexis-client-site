import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
        </div>
    );
};

export default Home;