import React from 'react';
import SidePanel from './SidePanel';
import './navbar.css'

const SmallNavbar = ({showSmallNavbar,toggleShowSmallNavbar}) => {
    return (
        <>
            <main id='navbar-small' 
                className=
                {
                    showSmallNavbar
                    ? 'fixed top-0 left-0 z-10 w-screen h-full transition-all duration-300'
                    : 'fixed top-0 left-0 z-10 w-screen h-full transition-all duration-300 show'
                }
            >
                <section className='flex'>
                    <div>
                        <SidePanel/>
                    </div>
                    <div className='w-screen bg-black bg-opacity-40 h-screen' onClick={toggleShowSmallNavbar}>
                    </div>
                </section>
            </main>
        </>
    );
}

export default SmallNavbar;