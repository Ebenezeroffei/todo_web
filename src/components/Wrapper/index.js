import React,{useState,useContext} from 'react';
import Navbar from '../Navbar';
import coverImage from '../../images/cover.jpg';
import './wrapper.css'

const WrapperContext = React.createContext(null);

const Body = () => {
    return (
        <>
            <section>
                <h2 className='text-white font-normal text-5xl'>Todo</h2>
                <p className='text-white font-semibolc'>Tuesday 13th December, 2021</p>
            </section>
        </>
    );
}

const Hamburger = () => {
    let toggleNavbar = useContext(WrapperContext)['toggleNavbar']
    return (
        <>
            <section onClick={toggleNavbar} id='hamburger'>
                <p></p>
            </section>
        </>
    );
}

const TopBar = () => {
    return (
        <>
            <section id='top-bar' className='relative'>
                <div className='absolute bg-black bg-opacity-40 top-0 left-0 h-full w-full p-3'>
                    <Hamburger/>
                    <div className='absolute bottom-5 left-5'>
                        <Body/>
                    </div>
                </div>
                <img src={coverImage} className='object-cover object-center bg-red-500' alt="Top bar cover" />
            </section>
        </>
    );
}


const Wrapper = ({body}) => {
    let [showNavbar,setShowNavbar] = useState(true);

    const toggleNavbar = () => {
        setShowNavbar(prevShowNavbar => !prevShowNavbar);
        console.log("Ok")
    }

    let contextValues = {
        'toggleNavbar': toggleNavbar
    }

    return (
        <WrapperContext.Provider value={contextValues}>
            <section className='flex'>
                <div id='navbar-wrapper'>
                    <Navbar show={showNavbar}/>
                </div>
                <div className='w-full'>
                    <TopBar/>
                </div>
            </section>
        </WrapperContext.Provider>
    );
}

export default Wrapper;