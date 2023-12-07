import {Route,Routes} from 'react-router-dom';

import HomePage from './HomePage';
import ProductPage from './ProductPage';
import { AdminPage } from './AdminPage';
import AdminProduct from './AdminProduct';
import AdminOrders from './AdminOrders';
import Login from './Login';
const MainRoutes = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/store' element={<ProductPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/admin/products' element={<AdminProduct/>}/>
        <Route path='/admin/orders' element={<AdminOrders/>}/>
     </Routes> 
    </>
  )
}

export default MainRoutes
