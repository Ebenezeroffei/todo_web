import React,{useState} from 'react'
import NavbarSearch from './NavbarSearch';
import NavbarUser from './NavBarUser';
import NavbarItem from './NavbarItem';
import navbarData from './data';
import './navbar.css';

const Navbar = ({searchQuery,searchFunc}) => {
    const [navbarDefaultItems,setNavbarDefaultItems] = useState(navbarData['defaultItems']);

    const toggleActiveItem  =  (id) => {
        setNavbarDefaultItems(prevNavbarDeafultItems => {
            let updatedNavbarDefaultItems = prevNavbarDeafultItems.map(
                item => {
                    let modifiedItem = {...item,active:false}
                    if(item.id === id){
                        modifiedItem['active'] = true;
                    }
                    return modifiedItem;
                }
            );
            return updatedNavbarDefaultItems;
        })
    }

    return (
        <>
            <section className='bg-gray-100 h-full py-3 px-1'>
                <NavbarUser/>
                <NavbarSearch searchFunc={searchFunc} searchQuery={searchQuery}/>
                <ul id='navbar-list'>
                    {navbarDefaultItems.map(
                        item => <NavbarItem toggleActiveItem={toggleActiveItem} id={item.id} key={item.id} active={item.active} image={item.image} name={item.name} />
                    )}
                </ul>
                <div className='bg-gray-100 hover:bg-gray-200 items-center transition-all flex duration-200 p-2 cursor-pointer'>
                    <span className='text-3xl font-light mr-2 pb-1'>+</span> New List
                </div>
            </section>
        </>
    );
}

export default Navbar;