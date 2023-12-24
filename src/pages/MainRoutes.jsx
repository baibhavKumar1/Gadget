import {Route,Routes} from 'react-router-dom';
import SingleProduct from '../components/SingleProduct'
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import { AdminPage } from './Admin/AdminPage';
import AdminProduct from './Admin/AdminProduct';
import AdminOrders from './Admin/AdminOrders';
import Login from './Login';
import About from './About';
import Support from './Support';
import Diti from './diti';
const MainRoutes = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/diti" element={<Diti/>}/>
        <Route path="/support" element={<Support/>}/>
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
