import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import {
	Badge,
	Box,
	Drawer,
	IconButton,
	ThemeProvider,
	createTheme,
} from '@mui/material'
import { useState } from 'react'
import { useAppSelector } from '../../app/hooks'

import Button from '@mui/material/Button'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RootState } from '../../app/store'
import Items from './Items'

import { useAuth } from '../../app/useAuth'

import './side.css'

const theme = createTheme({
	palette: {
		background: { paper: 'rgb(230, 208, 208)' },
	},
})

const DrawerS = () => {
	const [open, setOpen] = useState(false)
	const { cartTotalQuantity } = useAppSelector(state => state.cart)

	// const dispatch = useAppDispatch()

	const cartItems = useAppSelector((state: RootState) => state.cart.items)

	const cart = useAppSelector(state => state.cart)

	const navigate = useNavigate()

	const { isAuth } = useAuth()

	// useEffect(() => {
	// 	dispatch(getAllTotal())
	// }, [cart, dispatch])

	const handleClickCheckOut = () => {
		if (isAuth) {
			if (cartItems.length === 1) {
				navigate('/checkOut')
			} else {
				toast.warning(`Your cart is empty.`, {
					position: 'bottom-left',
				})
			}
		} else {
			toast.warning(
				`You are not Logged in,please Sign up or Login to your account `,
				{
					position: 'bottom-left',
				}
			)
		}
	}

	const toggleDrawer =
		(inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return
			}

			setOpen(inOpen)
		}
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: 'flex' }}>
				<IconButton
					size='large'
					aria-label='show 17 new notifications'
					color='inherit'
					className={`cartIcon `}
					onClick={toggleDrawer(true)}
				>
					<Badge badgeContent={cartTotalQuantity} color='error'>
						<ShoppingCartOutlinedIcon color='inherit' />
					</Badge>
				</IconButton>

				<Drawer anchor='right' onClose={toggleDrawer(false)} open={open}>
					<Button
						onClick={() => setOpen(false)}
						className='p_delete'
						color='inherit'
					>
						<ArrowForwardIosIcon />
					</Button>
					<div className='scroll_box'>
						{cartItems.length === 0 ? (
							<h2
								style={{
									display: 'flex',
									justifyContent: 'center',
									marginTop: '60%',
								}}
							>
								Your cart is empty.
							</h2>
						) : (
							<Items />
						)}
					</div>

					<div className='bottomBox'>
						<div className='amount_box'>
							<h3>Total: ₪{cart.cartTotalAmount.toFixed(2)}</h3>
							<h4>Delivery: Free</h4>
						</div>

						<Button
							disableElevation
							variant='contained'
							aria-label='Disabled elevation buttons'
							className='textBtn'
							sx={{
								color: '#CD3333',
								fontWeight: '600',
								backgroundColor: '#white',
								width: '50%',
								margin: '0 auto',
								marginBottom: '6px',
							}}
							color='inherit'
							onClick={handleClickCheckOut}
						>
							CheckOut
						</Button>
						<Button
							onClick={toggleDrawer(false)}
							disableElevation
							variant='contained'
							aria-label='Disabled elevation buttons'
							className='textBtn'
							sx={{
								color: '#CD3333',
								fontWeight: '600',
								backgroundColor: 'white',
								width: '50%',
								margin: '0 auto',
							}}
							color='inherit'
						>
							Continue Shopping
						</Button>
					</div>
				</Drawer>
			</Box>
		</ThemeProvider>
	)
}

export default DrawerS
