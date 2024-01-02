import { ThemeProvider } from '@emotion/react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import NoAuth from '../../pages/profile/NoAuth'
import { navItems } from '../../utils/constants'
import SideModals from '../Side_Modal/SideModals'
import Navitem from './Navitem'

import { useAuth } from '../../app/useAuth'
import { getAllTotal } from '../../features/ShoppingCart/CartSlice'
import Profile from '../../pages/profile/Profile'
import { allProducts } from '../../utils/types'
import './navbar.css'

const theme = createTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: red['500'],
		},
		secondary: {
			// This is green.A700 as hex.
			main: red['A700'],
		},
	},
})

interface Props {
	filterAll: allProducts[]
}

const NavBar = ({ filterAll }: Props) => {
	const [cartOpen, setCartOpen] = useState(false)

	const { cartTotalQuantity } = useAppSelector(state => state.cart)
	const { isAuth } = useAuth()

	const dispatch = useAppDispatch()
	const cart = useAppSelector(state => state.cart)

	const [searchTerm, setSearchTerm] = useState<string>('')
	const [searchResults, setSearchResults] = useState<allProducts[]>([])
	useEffect(() => {
		dispatch(getAllTotal())
	}, [cart, dispatch])

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setSearchTerm(value)

		const results = filterAll.filter(item =>
			item.name?.toLowerCase().includes(value.toLowerCase())
		)
		setSearchResults(results)
	}

	return (
		<div className='navbar'>
			<div className='logo'>
				<img className='logoImg' src='./assets/Logo.png' alt='navLogo' />
				<b>Space Shoes</b>
			</div>
			<Stack
				spacing={4}
				direction='row'
				className='navLists'
				aria-label='text button group'
			>
				<ThemeProvider theme={theme}>
					{navItems.map(item => (
						<Navitem key={item.route} item={item} />
					))}
				</ThemeProvider>
			</Stack>
			<div className='navIcons'>
				<div className='navSearch'>
					<IconButton color='inherit' className='navSearchIcon'>
						<SearchIcon />
					</IconButton>
					<input
						type='search'
						placeholder='Search'
						className='navSearchInput'
						value={searchTerm}
						onChange={handleSearch}
					/>
				</div>
				<ul className='fillter'>
					{!searchTerm
						? searchTerm
						: searchResults.map(product => (
								<li className='div_fillter' key={product.id}>
									<div className='link_fillter'>
										<img
											className='fillter_photo'
											src={`./assets/AllProductsImg/${product.mainImg}.png`}
											alt={product.name}
										/>
										<span className='fillter_photo_name'>{product.name}</span>
									</div>
								</li>
						  ))}
				</ul>
				<IconButton color='inherit' className='navIcon'>
					<FavoriteBorderIcon />
				</IconButton>

				<IconButton
					color='inherit'
					className={`cartIcon ${cartOpen ? 'active' : null}`}
					onClick={() => setCartOpen(!cartOpen)}
				>
					<Badge badgeContent={cartTotalQuantity} color='error'>
						<ShoppingCartOutlinedIcon color='inherit' />
					</Badge>
				</IconButton>

				{cartOpen ? (
					<SideModals setCartOpen={setCartOpen} cartOpen={cartOpen} />
				) : null}

				{isAuth ? <Profile /> : <NoAuth />}
			</div>
		</div>
	)
}

export default NavBar
