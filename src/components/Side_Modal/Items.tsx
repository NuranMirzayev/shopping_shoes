import { IconButton } from '@mui/material';
import { RootState } from '../../app/store';
import { addItem, getAllTotal, minQuanty, removeItem } from '../../features/ShoppingCart/CartSlice';


import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { allProducts } from '../../utils/types';
import { useEffect } from 'react';



const Items = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state: RootState) => state.cart.items);
    const cart =  useAppSelector(state => state.cart)

    useEffect(() => {
        dispatch(getAllTotal())
    }, [cart,dispatch])

    const handleCLickPlus = (items: allProducts) => {
        dispatch(addItem(items))
    }

    const handleCLickMin = (items: allProducts) => {
        dispatch(minQuanty(items))
    }


    const handleRemoveCart = (items:allProducts) => {
        dispatch(removeItem(items));
    };

    return (
        <>
            {
                cartItems.map(item => (
                    <div key={item.id} className="topBox">
                        <div className="topBox_left">
                            <img className="cartImg" src={"./assets/AllProductsImg/" + item.mainImg + ".png"} alt={item.name} />
                        </div>
                        <div className="topBox_right">

                            <div>
                                <h3 style={{ maxHeight: '70px',maxWidth:'150', textOverflow: 'ellipsis', whiteSpace: "normal",overflow: "hidden"}}>{item.name}</h3>
                                <p>Price:{(item.price * item.cartQuantity).toFixed(2) } </p>
                                <p >Size:
                                    {item.size}
                                </p>
                                <div className='selector'>
                                    <button className='selector_min btn' onClick={() => { handleCLickMin(item)}} >-</button> 
                                    <div className='selector_input'>{item.cartQuantity} </div>
                                    <button className='selector_plus btn ' onClick={() => { handleCLickPlus(item) } }>+</button>
                                </div>
                            </div>
                            <IconButton
                                sx={{ fontSize: '10px' }}
                                onClick={() => handleRemoveCart(item)}
                                className="testSpan"
                                color="inherit"
                            >
                                <ClearIcon />
                            </IconButton>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Items