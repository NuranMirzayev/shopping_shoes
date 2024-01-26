import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
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

import { RootState } from '../../app/store'

import Favorites from './Favorite'
import './side.css'

const theme = createTheme({
	palette: {
		background: { paper: 'rgb(230, 208, 208)' },
	},
})

const DrawersFavorite = () => {
	const [open, setOpen] = useState(false)

	const favoriteItems = useAppSelector(
		(state: RootState) => state.favorite.itemsFavorites
	)
	const { favoriteTotalQuantity } = useAppSelector(state => state.favorite)

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
					onClick={toggleDrawer(true)}
					size='large'
					aria-label='show 4 new mails'
					color='inherit'
					className={`cartIcon `}
				>
					<Badge badgeContent={favoriteTotalQuantity} color='error'>
						<FavoriteBorderIcon />
					</Badge>
				</IconButton>

				<Drawer
					elevation={16}
					anchor='right'
					onClose={toggleDrawer(false)}
					open={open}
				>
					<Button
						onClick={() => setOpen(false)}
						className='p_delete'
						color='inherit'
					>
						<ArrowForwardIosIcon />
					</Button>
					<div className='scroll_box'>
						{favoriteItems.length === 0 ? (
							<h2
								style={{
									display: 'flex',
									justifyContent: 'center',
									marginTop: '60%',
								}}
							>
								You Don't Have Favorite Shoe.
							</h2>
						) : (
							<Favorites />
						)}
					</div>

					<div className='bottomBox'>
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

export default DrawersFavorite
