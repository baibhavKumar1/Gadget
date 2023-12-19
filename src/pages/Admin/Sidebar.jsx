
import { FaGrip, FaShirt, FaBoxOpen, FaTags, FaGear, FaArrowRightFromBracket } from "react-icons/fa6";

import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='bg-gray-500 w-1/5 rounded-xl mt-4 m-3 flex flex-col  justify-start' style={{ height: "84vh" }}>
      <button className='w-2/3 hover:bg-white border-2 mx-auto mt-9 m-3 text-xl p-3 rounded-xl'><NavLink style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
        };
      }} to='/admin' className='flex items-center gap-2'><FaGrip /> <p>Dashboard</p></NavLink></button>
      <button className='w-2/3 hover:bg-white mx-auto m-3 text-xl p-3 rounded-xl'><NavLink to='/admin/products' className='flex items-center gap-2'><FaShirt /> <p>Products</p></NavLink></button>
      <button className='w-2/3 hover:bg-white mx-auto m-3 text-xl p-3 rounded-xl'><NavLink to='/admin/orders' className='flex items-center gap-2'><FaBoxOpen /><p>Orders</p> </NavLink></button>
      <button className='w-2/3 hover:bg-white mx-auto m-3 text-xl p-3 rounded-xl'><NavLink to='/admin/sales' className='flex items-center gap-2'><FaTags /><p>Sales</p> </NavLink></button>
      <button className='w-2/3 hover:bg-white mx-auto m-3 text-xl p-3 rounded-xl'><NavLink to='/admin/setting' className='flex items-center gap-2'><FaGear /><p>Settings</p></NavLink> </button>
      <button className='w-2/3 hover:bg-white mx-auto m-3 text-xl p-3 rounded-xl'><NavLink to="/admin/logout" className='flex items-center gap-2'><FaArrowRightFromBracket /><p>Logout</p></NavLink></button>
      <div className='bg-blue-900 h-5/6 m-2 rounded-xl text-center'></div>
    </div>
  )
}

export default Sidebar
