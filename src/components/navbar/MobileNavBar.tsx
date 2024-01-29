import MenuIcon from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import { Stack, ThemeProvider, Tooltip, createTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useAuth } from '../../app/useAuth'
import { getAllTotalFavorite } from '../../features/FavoritesCart/FavoriteSlice'
import { getAllTotal } from '../../features/ShoppingCart/CartSlice'
import NoAuth from '../../pages/profile/NoAuth'
import Profile from '../../pages/profile/Profile'
import { ModalWindowsContext } from '../../provides/ModalWindowsContext'
import { navItems } from '../../utils/constants'
import { allProducts } from '../../utils/types'
import DrawerS from '../Side_Modal/Drawer'
import DrawersFavorite from '../Side_Modal/DrawersFavorite'
import ModalWindows from '../modal_windows/ModalWindows'
import Navitem from './Navitem'
import './navbar.css'

const theme = createTheme({
	palette: {
		primary: {
			main: red['500'],
		},
		secondary: {
			main: red['A700'],
		},
	},
})

interface Props {
	filterAll: allProducts[]
}

const MobileNavBar = ({ filterAll }: Props) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		useState<null | HTMLElement>(null)
	const { isOpen, openModal } = useContext(ModalWindowsContext)

	const { isAuth } = useAuth()

	const dispatch = useAppDispatch()

	const cart = useAppSelector(state => state.cart)
	const favorite = useAppSelector(state => state.favorite)

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

	const handleClick = (product: allProducts) => {
		openModal(product)
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

	useEffect(() => {
		dispatch(getAllTotalFavorite())
	}, [favorite, dispatch])

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
			open={Boolean(anchorEl)}
			onClose={handleMenuClose}
		></Menu>
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
				vertical: 'top',
				horizontal: 'right',
			}}
			sx={{ marginTop: '8px', marginLeft: '60px' }}
			open={Boolean(mobileMoreAnchorEl)}
			onClose={handleMobileMenuClose}
		>
			<Tooltip
				title='Favorite'
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			>
				<IconButton color='inherit'>
					<DrawersFavorite />
				</IconButton>
			</Tooltip>
			<Tooltip
				title='Cart Box'
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			>
				<IconButton color='inherit'>
					<DrawerS />
				</IconButton>
			</Tooltip>
			<Tooltip title='Profile'>
				<IconButton color='inherit'>
					{isAuth ? <Profile /> : <NoAuth />}
				</IconButton>
			</Tooltip>
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
				className='navbar'
			>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
					>
						<MenuIcon />
					</IconButton>

					<Stack spacing={1} direction='row' className='logo'>
						<Typography
							className='logoTypography'
							variant='h6'
							alignItems='center'
							noWrap
							component='div'
							sx={{
								display: {
									xs: 'none',
									sm: 'flex',
									md: 'flex',
								},
								height: '60px',
								maxWidth: '40svw',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<img className='logoImg' src='./assets/Logo.png' alt='navLogo' />
							<b>Space Shoes</b>
						</Typography>
					</Stack>
					<Stack
						spacing={4}
						direction='row'
						className='navLists'
						aria-label='text button group'
						sx={{ flex: 1, justifyContent: 'center', maxWidth: '90%' }}
					>
						<ThemeProvider theme={theme}>
							{navItems.map(item => (
								<Navitem key={item.route} item={item} />
							))}
						</ThemeProvider>
					</Stack>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
						<DrawersFavorite />
						<DrawerS />
						{isAuth ? <Profile /> : <NoAuth />}
					</Box>
					{/* TODO: 3 tocki (favorite,cart, profil) */}
					<Box sx={{ display: { xs: 'block', md: 'none' } }}>
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
