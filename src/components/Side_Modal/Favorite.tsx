import ClearIcon from '@mui/icons-material/Clear'
import { RootState } from '../../app/store'
import { getAllTotal } from '../../features/ShoppingCart/CartSlice'

import { IconButton } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { removeFromFavorites } from '../../features/FavoritesCart/FavoriteSlice'
import { allProducts } from '../../utils/types'

const Favorites = () => {
	const dispatch = useAppDispatch()
	const favoriteItems = useAppSelector(
		(state: RootState) => state.favorite.itemsFavorites
	)

	const favorite = useAppSelector(state => state.favorite)

	useEffect(() => {
		dispatch(getAllTotal())
	}, [favorite, dispatch])

	const handleRemoveFavorite = (items: allProducts) => {
		dispatch(removeFromFavorites(items))
	}

	return (
		<>
			{favoriteItems.map(item => (
				<div key={item.id} className='topBox'>
					<div className='topBox_left'>
						<img
							className='cartImg'
							src={'./assets/AllProductsImg/' + item.mainImg + '.png'}
							alt={item.name}
						/>
					</div>
					<div className='topBox_right'>
						<div>
							<h3
								style={{
									maxHeight: '70px',
									maxWidth: '150',
									textOverflow: 'ellipsis',
									whiteSpace: 'normal',
									overflow: 'hidden',
								}}
							>
								{item.name}
							</h3>
							<p>
								Price:{(item.price * item.likeQuantity).toFixed(2)} x{' '}
								{item.likeQuantity}
							</p>
							<p>
								Size:
								{item.size}
							</p>
						</div>
						<IconButton
							sx={{ fontSize: '10px' }}
							onClick={() => handleRemoveFavorite(item)}
							className='testSpan'
							color='inherit'
						>
							<ClearIcon />
						</IconButton>
					</div>
				</div>
			))}
		</>
	)
}

export default Favorites
