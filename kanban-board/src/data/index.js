import redIcon from '../images/009-red-circle.png';
import yellowIcon from '../images/011-yellow-circle.png';
import blueIcon from '../images/008-blue-circle.png';
import greenIcon from '../images/010-green-circle.png';

const data = [
    {
        id: 1,
        icon: redIcon,
        status: "requests",
        title: "Set up Two Factor Authentication",
        content: "User can signup/login/logout"
    },
    {
        id: 2,
        icon: redIcon,
        status: "requests",
        title: "Shopping Cart",
        content: "User can add items to shopping cart and the app remembers it next time you login. User can view all the items in their shopping cart. User can delete items in the shopping cart. Shopping cart uses an integer column to store \"state\"."
    },
    {
        id: 3,
        icon: redIcon,
        status: "requests",
        title: "\"Submit\" button posts to /register",
        content: "User can signup/login/logout"
    },
    {
        id: 4,
        icon: redIcon,
        status: "requests",
        title: "Items for sale",
        content: "User can view lists of items for sale and search by name, filter by price."
    },
]
const statuses = [{
    status: "requests",
    icon: redIcon,
    color: "#EB5A46"
}, {
    status: "development",
    icon: yellowIcon,
    color: "#ffff00"
}, {
    status: "in progress",
    icon: blueIcon,
    color: "#0000ff"
}, {
    status: "completed",
    icon: greenIcon,
    color: "#008000"
}];


export { data, statuses };