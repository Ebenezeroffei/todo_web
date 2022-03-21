import React from 'react'
import userAvatar from '../../assets/user.png';

const NavbarUser = () => {
    return (
        <>
            <section className='text-center'>
                <img className='m-auto border-4 p-1 rounded-full' width="100px" src={userAvatar} alt="User Avatar"/>
                <h3 className='mt-2 font-semibold'>Ebenezer Offei</h3>
                <p className='text-gray-400 text-sm'>eoffei7536@gmail.com</p>
            </section>
        </>
    );
}

export default NavbarUser;