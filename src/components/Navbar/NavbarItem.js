import React from 'react'


const NavbarItem = ({name,image,active,id,toggleActiveItem}) => {
    return(
        <li className='my-1'>
            <a href="#" onClick={() => toggleActiveItem(id)} className={
                    active
                    ? 'block flex items-center transition-all duration-200 bg-gray-200 py-2 rounded-sm hover:bg-gray-200 relative'
                    : 'block flex items-center transition-all duration-200 py-2 rounded-sm hover:bg-gray-200 relative'
                }
            >
                <img className='inline mx-3 flex-none' src={image} width="20px" alt="Item Logo" />
                <span className='flex-none'>{name}</span>
                {/* <span className='absolute right-3 text-xs bg-gray-300 p-1 text-center rounded-full'>10</span> */}
            </a>
        </li>
    );
}

export default NavbarItem;