import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import AdminNav from '../../components/AdminNav'
import OrdersNav from '../../components/OrdersNav';
const AdminProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = '/db.json';
    console.log(data)
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.watch);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <AdminNav name="Product"/>
      <OrdersNav/>
      <div className='flex'>
        <Sidebar />
        <div className='w-4/5 bg-green-200 mt-4 m-2 rounded-xl' style={{height:"84vh"}}>
        <h1 className='text-4xl m-5'>Products</h1>
          <table className='w-full text-center'>
            <thead>
              <tr className='bg-red-100 p-2'>
                <th className='rounded-l-full'>Name</th>
                <th>Name</th>
                <th>Name</th>
                <th>Name</th>
                <th>Name</th>
                <th>Edit</th>
                <th className='rounded-r-full'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item)=>{
                return (
                  <tr key={item.id} className="p-2 border-2">
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.price}</td>
                  <td>{item.price}</td>
                  <td>{item.price}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default AdminProduct
