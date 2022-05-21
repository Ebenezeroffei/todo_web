import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar';
import Hamburger from './Hamburger';

const Wrapper = () => {
    const [showBigScreenNavbar,setShowBigScreenNavbar] = useState(true);
    const [searchQuery,setSearchQuery] = useState('');
    const [screenSize,setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        // window.onresize = () => {
        //     if(window.innerWidth < 800){
        //         setShowBigScreenNavbar(false);
        //     }
        //     window.innerWidth < 800 ? setShowBigScreenNavbar(false): setShowBigScreenNavbar(true);
        // }
    },[]);

    const search = (e)  => {
        let {value} = e.target
        // Search in the data base 
        setSearchQuery(value);
    }

    return (
        <>
            <main className='flex fixed w-screen h-screen z-0 '>
                <div className={
                        showBigScreenNavbar
                        ? 'w-72 bg-red-400 flex-none transition-all duration-100'
                        : 'w-0 transition-all duration-100'
                    }
                >
                    <Navbar searchQuery={searchQuery} searchFunc={search} />
                </div>
                
                <div className='bg-green-500 w-full'>
                    <section className='overflow-auto w-full h-full bg-blue-500 p-2'>
                        <Hamburger/>
                        <h1 className='text-5xl'> 
                            {searchQuery}
                        </h1>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Wrapper;