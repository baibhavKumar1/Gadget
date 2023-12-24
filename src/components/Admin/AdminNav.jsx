import logo from '../../assets/shoes-logo.png'
import {CiSearch} from 'react-icons/ci'
import {FiUser} from 'react-icons/fi'
//import {PiShoppingCartSimpleLight} from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import { Switch } from '@chakra-ui/react';

const AdminNav = ({name}) => {
    return (
        <div className='pt-2 h-14 justify-between flex'>
            <div className='w-1/5' style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt='img-logo' width={100} height={90} style={{ display: "block"}}/>
                <p className='shadow-md bg-white/30 p-2 rounded-md' style={{ fontSize: "28px", display: "block" }}><NavLink to="/">Tech Wave</NavLink></p>
            </div>
            <div className='shadow-md rounded-xl bg-white/50 w-3/5 flex justify-between text-2xl items-center'>
                <div className='hover:shadow-md hover:bg-white/50 ml-5 p-3 rounded-md'><NavLink to='/store'>{name}</NavLink></div>
                <Switch size="lg" className='p-3'/>
            </div>
            <div className='w-1/5 flex justify-around items-center text-xl'>
                <p icon={CiSearch} size='xs' style={{ color: "#000", padding: "10px" }} className='border-2 border-black rounded-full'></p>
                <div className='flex shadow-md bg-white/50 rounded-xl items-center'>
                <p icon={FiUser} size='xl' color="gray" className='p-3'></p>
                <p className='pr-3 text-md'>USER</p>
                </div>
            </div>
        </div>
    )
}

export default AdminNav
