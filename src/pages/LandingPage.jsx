import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import {FaArrowRight} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
const LandingPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = '/db.json'
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
        <>
            <div className='bg-rose-200 h-max-full flex flex-row p-15 rounded-xl my-10 mx-auto outline  outline-rose-400' style={{width:"95%"}}>
                <div className='w-3/4 text-center flex flex-col justify-around p-5'>
                    <h1 className='text-9xl tracking-tighter'>START YOUR DAY</h1>
                    <p className='text-9xl text-rose-600 tracking-tighter'>ON TIME</p>
                    <p className='text-xl tracking-tighter'>Welcome to our watch shopping haven, where punctuality meets style. Begin your day on time with our curated collection of elegant timepieces. Discover a world of watches that blend form and function seamlessly. Take the next step—click 'Explore Products' to explore our range.</p>
                    <button className='border border-rose-500 rounded-lg p-2 w-max' style={{display:"block"}}><NavLink to='/store'>Explore More...</NavLink></button>
                </div>
                <div className='w-1/4'>
                    <img className='p-5' src='https://images.pexels.com/photos/1697215/pexels-photo-1697215.jpeg' alt='img' />
                </div>
            </div>
            <div style={{ margin: "auto", width: "90%", marginTop: "40px" }}>
                <div className='flex items-center justify-between'>
                    <h1 style={{ fontSize: "40px" }}>Best Sellers</h1>
                    <div className='flex items-center justify-between gap-3 border border-rose-500 rounded-2xl p-2'>
                        <p>Browse all products <FaArrowRight/></p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    {data.filter(product => product.id < 5).map(item => (
                        <div key={item.id} style={{ marginBottom: "30px", borderRadius: "20px" }} className="bg-white w-max">
                            <ProductCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LandingPage
