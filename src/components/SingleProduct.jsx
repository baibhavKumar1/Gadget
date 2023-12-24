import { TiStar } from 'react-icons/ti'
import Navbar from './Navbar'
import { Text } from '@chakra-ui/react'
import { FaPercent } from 'react-icons/fa'
import { TiLocation } from 'react-icons/ti'
import { FaTruckFast } from 'react-icons/fa6'

const SingleProduct = () => {
  return (
    <div className='h-full w-full'>
      <Navbar  className='border'/>
      {/* {breadcrumb} */}
      <div className='flex items-center m-auto w-[90%] h-[85vh] justify-center'>
        <div className='flex items-start gap-4 self-center justify-around border shadow-xl rounded-xl p-5 py-10'>
          <div className='w-1/3 m-auto'>
            <img className='m-auto' src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe485817b/images/Titan/Catalog/1802NL02_1.jpg?sw=360&sh=360' />
          </div>
          <div className='w-1/3 space-y-4'>
            <Text>Minimalist bedroom lamp</Text>
            <Text className='text-6xl font-semibold'>Minimalist white study lamp with solid material</Text>
            <div className='flex gap-4 items-center'><div className='flex items-center gap-1'><TiStar color='gold' size="1.5em" /> <Text>4.6</Text></div> <Text>432 Reviews</Text></div>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1 bg-green-200 rounded-xl p-1'><FaPercent className='bg-lime-500 rounded-full p-1' size='2em' /><Text>20%</Text></div>
              <div className='flex gap-3 items-center'><Text className='text-xl'><s>IDR 599.00</s></Text><Text className='text-3xl'>IDR 479.20</Text></div>
            </div>
            <div className='space-y-2'>
              <Text className='font-bold text-xl'>About Product</Text>
              <Text className='text-lg'>This Watch Offers 24 Months Warranty On The Movement And 12 Months Warranty On The Battery From The Date Of PurchaseThis Watch Offers 24 Months Warranty On The Movement And 12 Months Warranty On The Battery From The Date Of Purchase</Text>
            </div>
            <div className='space-y-2'>
              <Text className='font-bold text-xl'>Shipping</Text>
              <div className='flex items-center gap-1 text-lg'><TiLocation /><Text>Set from Surbaya City</Text></div>
              <div className='flex items-center gap-1 text-lg'><FaTruckFast /><Text>Estimated Shipping IDR 48.000</Text></div>
            </div>
          </div>
          <div className='w-1/3 text-lg my-auto p-6 border space-y-4'>
            <Text>Order Summary</Text>
            <hr />
            <div className='text-lg w-[90%] space-y-2'>
              <Text>Sent to</Text>
              <div className='flex'><TiLocation /></div>
              <div className='flex justify-between'>
              <Text>Quantity</Text>
              <div className='items-center'>
                <button className='bg-rose-200 rounded-full p-1 px-2.5'>+</button>
                <input className='border w-10 p-1'/>
                <button className='bg-rose-200 rounded-full p-1 px-3'>-</button>
              </div>
              </div>
              <Text>Delivery</Text>
              <div className='flex flex-col gap-3  m-auto'>
                <button className='p-3 rounded-xl bg-yellow-200 w-full'>Add to cart</button>
                <button className='p-3 border border-black rounded-xl'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
