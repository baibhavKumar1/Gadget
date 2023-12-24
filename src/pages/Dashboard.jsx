import  { useState, useEffect } from 'react'
//import { IoMdPricetags } from "react-icons/io";
import { FaSackDollar,FaBoxOpen ,FaTags} from "react-icons/fa6";
//import { AreaChart } from 'recharts';
import Sidebar from './Admin/Sidebar'
import OrdersNav from '../components/OrdersNav';
const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = '/db.json';
        //console.log(data)
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
    }, [data]);
    return (
        <>
        <OrdersNav/>
        <div className='flex'>
            <Sidebar />
            <div className='w-3/5 bg-red-300 mt-4 m-3 rounded-xl flex flex-col' style={{ height: "84vh" }}>
                <div className='flex w-full'>
                    <div className='w-1/3 bg-gray-200 h-44 m-2 rounded-xl text-3xl p-4 text-center' style={{}}>
                        <p><FaTags/> Total Sales</p>
                        <p className='p-4'>3400$</p>
                    </div>
                    <div className='w-1/3 h-44 bg-green-200 my-2 rounded-xl p-4 text-center text-3xl'><FaSackDollar/> Total Earnings</div>
                    <div className='w-1/3 h-44 bg-yellow-300 m-2 rounded-xl p-4 text-center text-3xl'><FaBoxOpen/> Total Orders</div>
                </div>
                <div className='mx-auto bg-purple-200 rounded-xl' style={{ width: "98%",height:"50vh" }}>

                </div>
                <div className='mx-auto h-max bg-purple-700 rounded-xl m-2 p-2' style={{ width: "98%" }}>
                    <p>Top Selling Product</p>
                    <table className='w-full  text-center'>
                        <thead className='bg-white'>
                            <tr>
                                <th className='border border-gray-900'>Product</th>
                                <th className='border border-gray-900'>Price</th>
                                <th className='border border-gray-900'>Order</th>
                                <th className='border border-gray-900'>Stock</th>
                                <th className='border border-gray-900'>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter((item) => item.id <= 3).map((item) => {
                                return (
                                    <tr key={item.id} className='bg-white/50'>
                                        <td >{item.name}</td>
                                        <td >{item.price}</td>
                                        <td >{item.name}</td>
                                        <td >{item.name}</td>
                                        <td >{item.name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='w-1/5 bg-teal-300 m-3 mt-4 rounded-xl' style={{ height: "84vh" }}></div>
        </div>
        </>
    )
}

export default Dashboard
