/* eslint-disable no-unused-vars */
import logo from '../assets/shoes-logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
// import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import LoginMenu from '../pages/Login';
import { useDisclosure } from '@chakra-ui/react'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div style={{ display: "flex", justifyContent: "space-between", height: "80px" }} className='' >
      <div style={{ display: "flex", alignItems: "center", width: "25%" }}>
        <img src={logo} alt='img-logo' width={100} height={90} style={{ display: "block" }} />
        <p className='shadow-md bg-white/30 p-2 rounded-md' style={{ fontSize: "30px", display: "block" }}><NavLink to="/">Tech Wave</NavLink></p>
      </div>
      <div style={{ display: "flex", fontSize: "20px", alignItems: "center", justifyContent: "space-around", width: "30%" }}>
        <div className='hover:shadow-md hover:bg-rose-200 ml-5 p-3 rounded-md'><NavLink to='/store'>Store</NavLink></div>
        <div className='hover:shadow-md hover:bg-rose-200 p-3 rounded-md'><NavLink to='/about'>About</NavLink></div>
        <div className='hover:shadow-md hover:bg-rose-200 p-3 rounded-md'><NavLink to='/support'>Support</NavLink></div>
        <div className='hover:shadow-md hover:bg-rose-200 p-3 rounded-md'><NavLink to='/contact'>Contact</NavLink></div>
        <div className='hover:shadow-md hover:bg-rose-200 mr-5 p-3 rounded-md'><NavLink to='/admin'>Admin</NavLink></div>
      </div>
      <div style={{ display: "flex", width: "25%", justifyContent: "space-around", fontSize: "20px", alignItems: "center" }}>
        <div style={{ display: "flex", border: "1px solid black", borderRadius: "20px", alignItems: "center" }}>
          <input placeholder='Search...' type='text' style={{ display: "block", borderRight: "3px solid black", paddingLeft: "15px", borderTopLeftRadius: "20px", outline: "none", borderBottomLeftRadius: "20px" }} className='p-2' />
          <CiSearch size='xs' style={{ color: "#000", padding: "10px" }} />
        </div>

        <Popover>
          <PopoverTrigger>
            <Button>
              <FaCartShopping size='xl' onHover={onOpen} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Cart</PopoverHeader>
            <PopoverBody>Are you sure you want to checkout?</PopoverBody>
          </PopoverContent>
        </Popover>
        <LoginMenu />
      </div>
    </div>
  )
}

export default Navbar
