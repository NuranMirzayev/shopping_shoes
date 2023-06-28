
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { getAllTotal } from '../../features/ShoppingCart/CartSlice';
import Items from './Items';
import './side.css';


interface SideModal {
    cartOpen: boolean;
    setCartOpen: (cartOpen: boolean) => void;
}



const SideModals = ({ setCartOpen, cartOpen }: SideModal) => {
    const dispatch = useAppDispatch()

    const cartItems = useAppSelector((state: RootState) => state.cart.items);

    const cart = useAppSelector(state => state.cart)

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllTotal())
    }, [cart, dispatch])

    const handleClickCheckOut = () =>{
        navigate("/checkOut")
    }

    return (
        <div className={`window_cart ${cartOpen ? "active" : ''}`}>
            <Button onClick={() => setCartOpen(false)} className="p_delete" color="inherit">
                <ArrowBackIcon />
            </Button>
            <div className='scroll_box'>
                {cartItems.length === 0 ? (
                    <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '60%' }}>Your cart is empty.</h2>
                )
                    :
                    <Items />
                }
            </div>

            <div className="bottomBox">

                <div className='amount_box'>
                    <h3 >Total: ₪
                        {(cart.cartTotalAmount).toFixed(2)}
                    </h3>
                    <h4>Delivery: Free</h4>
                </div>

                <Button
                    disableElevation variant="contained"
                    aria-label="Disabled elevation buttons"
                    className='textBtn'
                    sx={
                        {
                            color: '#CD3333',
                            fontWeight: '600',
                            backgroundColor: '#white',
                            width: '50%',
                            margin: "0 auto",
                            marginBottom: '6px'
                        }
                    }
                    color='inherit'
                    onClick={handleClickCheckOut}
                >
                    CheckOut
                </Button>
                <Button
                    onClick={() => setCartOpen(false)}
                    disableElevation variant="contained"
                    aria-label="Disabled elevation buttons"
                    className='textBtn'
                    sx={
                        {
                            color: '#CD3333',
                            fontWeight: '600',
                            backgroundColor: 'white',
                            width: '50%',
                            margin: "0 auto"
                        }
                    }
                    color='inherit'
                >
                    Continue Shopping
                </Button>
            </div>

        </div >
    )
}

export default SideModals