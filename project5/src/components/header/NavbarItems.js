import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as MdIcons from 'react-icons/md'

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
        title: 'Orders',
        icon: <BsIcons.BsListCheck />,
        url: '/orders',
    },
]