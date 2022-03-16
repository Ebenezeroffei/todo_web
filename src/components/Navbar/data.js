import todoImage from '../../images/todos.png';
import profileImage from '../../images/profile.png';
import logoutImage from '../../images/logout.png'


const navbarData = {
    "sidePanel":{
        "listItems": [
            {
                "id": 1,
                "name": "Todo",
                "image": todoImage,
                "active": true
            },
            {
                "id": 2,
                "name": "Profile",
                "image": profileImage,
                "active": false
            },
            {
                "id": 3,
                "name": "Logout",
                "image": logoutImage,
                "active": false
            }
        ]
    }
}

export default navbarData;