import { ThemeProvider } from '@emotion/react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { ChangeEvent, useContext, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import NoAuth from '../../pages/profile/NoAuth'
import { navItems } from '../../utils/constants'
import Navitem from './Navitem'

import { useAuth } from '../../app/useAuth'
import Profile from '../../pages/profile/Profile'
import {
	ModalWindowsContext,
	Product,
} from '../../provides/ModalWindowsContext'
import { allProducts } from '../../utils/types'
import ModalWindows from '../modal_windows/ModalWindows'
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
	const { isOpen, openModal } = useContext(ModalWindowsContext)

	const [cartOpen, setCartOpen] = useState(false)

	const { cartTotalQuantity } = useAppSelector(state => state.cart)
	const { isAuth } = useAuth()

	const dispatch = useAppDispatch()
	const cart = useAppSelector(state => state.cart)

	const [searchTerm, setSearchTerm] = useState<string>('')
	const [searchResults, setSearchResults] = useState<allProducts[]>([])
	// useEffect(() => {
	// 	dispatch(getAllTotal())
	// }, [cart, dispatch])

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setSearchTerm(value)

		const results = filterAll.filter(item =>
			item.name?.toLowerCase().includes(value.toLowerCase())
		)
		setSearchResults(results)
	}

	const handleClick = (product: Product) => {
		openModal(product)
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
				{!isOpen ? (
					<ul className='fillter'>
						{!searchTerm
							? searchTerm
							: searchResults.map(product => (
									<li
										className='div_fillter'
										onClick={() => handleClick(product)}
										key={product.name}
									>
										<div className='link_fillter'>
											<img
												className='fillter_photo'
												src={`./assets/AllProductsImg/${product.mainImg}.png`}
												alt={product.name}
											/>
											<span className='fillter_photo_name'>{product.name}</span>
											{product.sale ? (
												<p className='price_p_filter'>
													{`₪${product!.price.toFixed(2)}`}
													<span>
														<del className='red'>{`₪${product.sale.toFixed(
															2
														)}`}</del>
													</span>
												</p>
											) : (
												<p className='price_p_filter'>{`₪${product.price.toFixed(
													2
												)}`}</p>
											)}
										</div>
									</li>
							  ))}
					</ul>
				) : (
					<ModalWindows />
				)}

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

				{/* {cartOpen ? (
					<SideModals setCartOpen={setCartOpen} cartOpen={cartOpen} />
				) : null} */}

				{isAuth ? <Profile /> : <NoAuth />}
			</div>
		</div>
	)
}

export default NavBar
