import React from 'react';
import SidePanel from './SidePanel';
import './navbar.css'

const Navbar = ({show}) => {
    console.log(show)
    return (
        <>
            <main id='navbar'>
                <SidePanel/>
            </main>
        </>
    );
}

export default Navbar;