import todoImage from '../../assets/todos.png';
import profileImage from '../../assets/profile.png';
import logoutImage from '../../assets/logout.png'


const navbarData = {
    "defaultItems":[
        {
            "id": 1,
            "name": "Todo",
            "image": todoImage,
            "active": true
        },
        {
            "id": 2,
            "name": "Important",
            "image": todoImage,
            "active": false
        },
        {
            "id": 3,
            "name": "Profile",
            "image": profileImage,
            "active": false
        },
        {
            "id": 4,
            "name": "Logout",
            "image": logoutImage,
            "active": false
        }
    ]
}

export default navbarData;