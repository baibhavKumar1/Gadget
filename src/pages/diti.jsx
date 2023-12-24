
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import { Getproduct } from '../redux/ProductReducer/action';
import ProductCard from '../components/ProductCard';
const Diti = () => {
    const dispatch = useDispatch();
    const token = useSelector((store) => store.AuthReducer.token)
    const data = useSelector((store) => store.ProductReducer.data);
    console.log(data)
    useEffect(() => {
        dispatch(Getproduct(token))
    }, [dispatch, token])
    return (
        <div>
            <Navbar />
            {data.map((item) => {
                return (
                    <ProductCard key={item._id} item={item}/>
                )
            })}
        </div>
    )
}

export default Diti
