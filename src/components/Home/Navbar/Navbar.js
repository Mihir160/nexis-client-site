import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mt-4'>
        <button className='btn btn-sm'>  <Link to='/attendance'>Attendance</Link> </button> 
        </div>
    );
};

export default Navbar;