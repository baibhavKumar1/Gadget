
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import { Getproduct } from '../redux/ProductReducer/action';
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
            {token}
            {data.map((item) => {
                return (
                    <div key={item._id}>{item._id}</div>
                )
            })}
        </div>
    )
}

export default Diti
