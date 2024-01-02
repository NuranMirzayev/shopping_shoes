import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Product.css'

import FavoriteIcon from '@mui/icons-material/Favorite'
import { Button, IconButton, Tooltip } from '@mui/material'
import { allProducts } from '../../utils/types'

import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ModalWindows from '../modal_windows/ModalWindows'

interface Props {
	allPr: allProducts
}

const AllProduct = ({ allPr }: Props) => {
	const [heart, setHeart] = useState(allPr.isLike)
	let [windowOpen, setWindowOpen] = useState(false)

	return (
		<div className='Product'>
			<div className='top_product'>
				<img
					className='product_img'
					src={'./assets/AllProductsImg/' + allPr.mainImg + '.png'}
					alt={allPr.name}
				/>
				<div className='product_infoes_icons'>
					<p className='name_p'>{allPr.name}</p>
					{allPr.sale ? (
						<p className='price_p'>
							{`₪${allPr.price.toFixed(2)}`}{' '}
							<del className='red'>{`₪${allPr.sale.toFixed(2)}`}</del>{' '}
						</p>
					) : (
						<p className='price_p'>{`₪${allPr.price.toFixed(2)}`}</p>
					)}
					<div className='test'>
						<Tooltip title='Favorite' arrow>
							<IconButton
								className={`heart_btn ${heart && 'active'}`}
								onClick={() => setHeart(!heart)}
							>
								<FavoriteIcon sx={{ fontSize: 50 }} />
							</IconButton>
						</Tooltip>
						<Link
							to={`#/${allPr.name}/${allPr.id}`}
							className='product_windows'
						>
							<Tooltip title='See More' arrow>
								<Button
									color='inherit'
									className='seeMore'
									onClick={() => setWindowOpen(true)}
									sx={{
										fontSize: '15.5px',
										fontWeight: '600',
										// color:'#CD3333'
									}}
								>
									See More
									<NavigateNextIcon
										className='icon_test'
										sx={{ fontSize: 50 }}
										color='action'
									/>
								</Button>
							</Tooltip>
						</Link>
					</div>
				</div>
			</div>
			{windowOpen ? (
				<div className='modal'>
					<ModalWindows
						active={windowOpen}
						setActive={setWindowOpen}
						allPr={allPr}
					/>
				</div>
			) : null}
		</div>
	)
}

export default AllProduct
