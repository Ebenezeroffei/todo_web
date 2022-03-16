import React from "react";
import navbarData from './data';
import userImage from '../../images/user.png';

const SidePanelTopBar  = () => {
    return (
        <>
            <section id="side-panel-top-bar" className="text-center py-4 px-1">
                <img src={userImage} width="100px" className="p-2 m-auto rounded-full border-4" alt="User"/>
                <h2 className="text-2xl mt-2 truncate">Ebenezer Offei</h2>
                <p className="text-gray-500 mb-4 font-semibold">@eoffei7536@gmail.com</p>
            </section>
        </>
    );
}

const SidePanelListItem = ({image,name,active,logout}) => {
    return (
        <>
            <li 
                className={ active
                    ? "font-semibold bg-gray-300 transition-all duration-250"
                    : "font-semibold hover:bg-gray-200 transition-all duration-250"
                }
            >
                <a 
                    href="#" className={
                            logout
                            ? "block px-5 py-3 flex text-red-600"
                            : "block px-5 py-3 flex"
                        }
                >
                    <img width="25px" src={image} className='mr-3' alt={name} />
                    {name}
                </a>
            </li>
        </>
    );
}

const SidePanel = () => {
    const sidePanelListItemsData = navbarData['sidePanel']['listItems'];
    return(
        <>
            <section id="side-panel">
                <SidePanelTopBar/>
                <ul>{
                        sidePanelListItemsData.map(
                            item => <SidePanelListItem logout={item.name === "Logout" && true} key={item.id} name={item.name} image={item.image} active={item.active} />
                        )
                    }
                </ul>
            </section>
        </>
    );
}

export default SidePanel;