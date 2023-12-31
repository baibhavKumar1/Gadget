
import AdminNav from '../../components/Admin/AdminNav'
import Sidebar from './Sidebar'
import OrdersNav from '../../components/OrdersNav'

const AdminOrders = () => {
  return (
    <div className=''>
      <AdminNav name="Orders"/>
      <OrdersNav/>
      <Sidebar/>
    </div>
  )
}

export default AdminOrders
