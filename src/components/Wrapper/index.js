import React,{useState,useContext,useEffect} from 'react';
import Navbar from '../Navbar';
import SmallNavbar from '../Navbar/SmallNavbar';
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
            <section className='cursor-pointer' onClick={toggleNavbar} id='hamburger'>
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


const Wrapper = () => {
    let [screen,setScreen] = useState(window.innerWidth);
    let [showNavbar,setShowNavbar] = useState(() => {
        return screen < 800 ? false : true;
    });

    useEffect(() => {
        window.onresize = () => {
            setScreen(window.innerWidth);
        }
        screen < 800 && setShowNavbar(false);

        return window.removeEventListener('resize',()=>{});
    },[screen]);

    const toggleNavbar = () => {
        setShowNavbar(prevShowNavbar => !prevShowNavbar);
    }

    let contextValues = {
        'toggleNavbar': toggleNavbar
    }
    
    if(screen < 800){
        return (
            <WrapperContext.Provider value={contextValues}>
                <section> 
                    <SmallNavbar showSmallNavbar={showNavbar} toggleShowSmallNavbar={toggleNavbar}/>
                    <TopBar/>
                    <h1>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aspernatur. Quis beatae odio dignissimos iusto atque recusandae nisi dolores in voluptates. Iusto similique rem in culpa itaque, asperiores laboriosam ab.
                    </h1>
                </section>
            </WrapperContext.Provider>
        );
    }
    else{

        return (
            <WrapperContext.Provider value={contextValues}>
                <section 
                className={
                    showNavbar
                    ? 'flex'
                    : 'flex show'
                } 
                id='wrapper'
            >     
                    <div id='navbar-wrapper' className='transition-all duration-300'>
                        <Navbar/>
                    </div>
                    <div className='w-full transition-all duration-300 bg-white' id='body-wrapper'>
                        <TopBar/>
                        <h1 className='text-5xl p-2'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aspernatur. Quis beatae odio dignissimos iusto atque recusandae nisi dolores in voluptates. Iusto similique rem in culpa itaque, asperiores laboriosam ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci nihil, tenetur ullam cumque blanditiis provident consequatur reiciendis illum id, delectus, minus ratione dignissimos sed excepturi. Animi temporibus laborum possimus!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores minima unde asperiores quo minus ratione eius quae rerum architecto aspernatur quidem reiciendis veritatis, qui soluta dicta, consequatur consequuntur odit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis, quas debitis quo ipsa doloribus magni accusantium nostrum eligendi corrupti ex aliquid, necessitatibus, dolorem voluptates quidem! Ratione asperiores quas provident.
                        </h1>
                    </div>
                </section>
            </WrapperContext.Provider>
        );
    }
}

export default Wrapper;