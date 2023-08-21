import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'


export const NavbarItems = [
    {
        title: 'Home',
        icon: <AiIcons.AiFillHome />,
        url: '/',
    },
    {
        title: 'About us',
        icon: <BsIcons.BsFillInfoCircleFill />,
        url: '/about-us',
    },
    {
        title: 'Contact',
        icon: <BsIcons.BsFillTelephoneFill />,
        url: '/contact',
    },
    {
        title: 'Menu',
        icon: <MdIcons.MdOutlineRestaurantMenu />,
        url: '/menu',
    },
    {
        title: 'My Account',
        icon: <FaIcons.FaUserAlt />,
        url: '/my-account',
    },
]