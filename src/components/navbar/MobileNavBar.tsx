import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MenuIcon from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import NoAuth from '../../pages/profile/NoAuth'
import {
	ModalWindowsContext,
	Product,
} from '../../provides/ModalWindowsContext'

import { ChangeEvent, MouseEvent, useContext, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useAuth } from '../../app/useAuth'
import { getAllTotal } from '../../features/ShoppingCart/CartSlice'
import Profile from '../../pages/profile/Profile'
import { allProducts } from '../../utils/types'
import SideModals from '../Side_Modal/SideModals'
import ModalWindows from '../modal_windows/ModalWindows'
import './navbar.css'

interface Props {
	filterAll: allProducts[]
}

const MobileNavBar = ({ filterAll }: Props) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		useState<null | HTMLElement>(null)
	const { isOpen, openModal } = useContext(ModalWindowsContext)

	const [cartOpen, setCartOpen] = useState(false)

	const { cartTotalQuantity } = useAppSelector(state => state.cart)
	const { isAuth } = useAuth()

	const dispatch = useAppDispatch()
	const cart = useAppSelector(state => state.cart)

	const isMenuOpen = Boolean(anchorEl)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

	const [searchTerm, setSearchTerm] = useState<string>('')
	const [searchResults, setSearchResults] = useState<allProducts[]>([])
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

	const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
		handleMobileMenuClose()
	}

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}
	useEffect(() => {
		dispatch(getAllTotal())
	}, [cart, dispatch])

	const menuId = 'primary-search-account-menu'
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	)

	const mobileMenuId = 'primary-search-account-menu-mobile'
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size='large' aria-label='show 4 new mails' color='inherit'>
					<Badge badgeContent={2} color='error'>
						<FavoriteBorderIcon />
					</Badge>
				</IconButton>
				<p>Favorite</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size='large'
					aria-label='show 17 new notifications'
					color='inherit'
					className={`cartIcon ${cartOpen ? 'active' : ''}`}
					onClick={() => setCartOpen(!cartOpen)}
				>
					<Badge badgeContent={cartTotalQuantity} color='error'>
						<ShoppingCartOutlinedIcon color='inherit' />
					</Badge>
				</IconButton>
				{cartOpen ? (
					<SideModals setCartOpen={setCartOpen} cartOpen={cartOpen} />
				) : null}
				<p>Cart Box</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				{isAuth ? <Profile /> : <NoAuth />}
				<p>Profile</p>
			</MenuItem>
		</Menu>
	)

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				sx={{
					backgroundColor: 'rgb(218, 212, 212)',
					color: 'black',
				}}
				position='fixed'
			>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ display: { xs: 'none', sm: 'block' }, height: '60px' }}
					>
						<div className='logo'>
							<img className='logoImg' src='./assets/Logo.png' alt='navLogo' />
							<b>Space Shoes</b>
						</div>
					</Typography>

					<div className='navSearch'>
						<IconButton color='default' className='navSearchIcon'>
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
												<span className='fillter_photo_name'>
													{product.name}
												</span>
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
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							size='large'
							aria-label='show 4 new mails'
							color='inherit'
						>
							<Badge badgeContent={4} color='error'>
								<FavoriteBorderIcon />
							</Badge>
						</IconButton>
						<IconButton
							size='large'
							aria-label='show 17 new notifications'
							color='inherit'
							className={`cartIcon ${cartOpen ? 'active' : ''}`}
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
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'
						>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</Box>
	)
}

export default MobileNavBar
