import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { FaArrowRight } from 'react-icons/fa'
import { Text, Button, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { useSelector,useDispatch } from 'react-redux';
import { Getproduct } from '../redux/ProductReducer/action';
const LandingPage = () => {
    const dispatch = useDispatch();
    const token = useSelector((store) => store.AuthReducer.token)
    const data = useSelector((store) => store.ProductReducer.data);
    console.log(data)
    useEffect(() => {
        dispatch(Getproduct(token))
    }, [dispatch, token])
    return (
        <>
            <div className='bg-rose-200 h-max-full flex flex-row p-15 rounded-xl my-10 mx-auto outline  outline-rose-400' style={{ width: "95%" }}>
                <div className='w-3/4 text-center flex flex-col justify-around p-5'>
                    <h1 className='text-9xl tracking-tighter'>START YOUR DAY</h1>
                    <p className='text-9xl text-rose-600 tracking-tighter'>ON TIME</p>
                    <p className='text-xl tracking-tighter'>Welcome to our watch shopping haven, where punctuality meets style. Begin your day on time with our curated collection of elegant timepieces. Discover a world of watches that blend form and function seamlessly. Take the next step—click `&apos;`Explore Products`&apos;` to explore our range.</p>
                    <button className='border border-rose-500 rounded-lg p-2 w-max' style={{ display: "block" }}><NavLink to='/store'>Explore More...</NavLink></button>
                </div>
                <div className='w-1/4'>
                    <img className='p-5' src='https://images.pexels.com/photos/1697215/pexels-photo-1697215.jpeg' alt='img' />
                </div>
            </div>
            <div style={{ margin: "auto", width: "90%", marginTop: "40px" }}>
                <div className='flex items-center justify-between'>
                    <h1 style={{ fontSize: "40px" }}>Best Sellers</h1>
                    <div className='flex items-center justify-between gap-3 border border-rose-500 rounded-2xl p-2'>
                        <p>Browse all products <FaArrowRight /></p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    {data.map((item) => {
                return (
                    <ProductCard key={item._id} item={item}/>
                )
            })}
                </div>
            </div>
            <div>
                <div className='flex justify-between p-3 text-2xl'>
                    <Text>1/4</Text>
                    <Text>What our clients say</Text>
                    <div>
                        <Button> <MdArrowBack /> </Button>
                        <Button> <MdArrowForward /></Button>
                    </div>
                </div>
                <div className='flex justify-between gap-3 m-3 border border-red-400'>
                    <div className=''>
                        <div className='relative m-auto'>
                            <Image src='https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop' className='border' />
                            <Text className='text-xl visible hover:invisible absolute left-10 bottom-10'>Hi</Text>
                        </div>
                    </div>
                    <div>
                        <div className=' relative'>
                        <Image src='https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop' className='border' />
                        <Text className='text-xl visible hover:invisible absolute left-10 bottom-10'>Hi</Text>
                        </div>
                    </div>
                    <div>
                        <div className=' relative'>
                            <Image src='https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop' className='border' />
                            <Text className='text-xl visible hover:invisible absolute left-10 bottom-10'>Hi</Text>
                        </div>
                    </div>
                    <div>
                        <div className=' relative'>
                            <Image src='https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop' className='border' />
                            <Text className='text-xl visible hover:invisible absolute left-10 bottom-10'>Hi</Text>
                        </div>
                    </div>
                    <div>
                        <div className=' relative'>
                            <Image src='https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop' className='border' />
                            <Text className='text-xl visible hover:invisible absolute left-10 bottom-10'>Hi</Text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
