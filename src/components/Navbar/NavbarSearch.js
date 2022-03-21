import React from 'react'

const NavbarSearch = ({searchQuery,searchFunc}) => {
    return(
        <>
            <section className='py-3 px-2 my-2'>
                <input onChange={searchFunc} value={searchQuery} type="search" className='rounded w-full px-2 py-1 text-sm border-b border-black outline-none' />
            </section>
        </>
    );
}

export default NavbarSearch;