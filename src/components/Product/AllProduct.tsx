import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Button, Tooltip } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
	ModalWindowsContext,
	Product,
} from '../../provides/ModalWindowsContext'
import ModalWindows from '../modal_windows/ModalWindows'
import './Product.css'

// FIXME: Nado ispravit btn posle najat i obnavlenie ne iscezala i pri otklucenie serdecki ctob umenwilsa i v favoriteDrawers

interface AllProductProps {
	products: Product
}

const AllProduct = ({ products }: AllProductProps) => {
	const { isOpen, openModal } = useContext(ModalWindowsContext)
	// const dispatch = useDispatch()

	// const [heart, setHeart] = useState(false)

	// const handleClickLike = () => {
	// 	setHeart(!heart)
	// 	dispatch(addToFavorites(products))
	// }

	return (
		<div className='Product'>
			<div className='top_product'>
				<img
					className='product_img'
					src={`./assets/AllProductsImg/${products.mainImg}.png`}
					alt={products.name}
				/>
				<div className='product_infoes_icons'>
					<p className='name_p'>{products.name}</p>
					{products.sale ? (
						<p className='price_p'>
							{`₪${products!.price.toFixed(2)}`}{' '}
							<del className='red'>{`₪${products.sale.toFixed(2)}`}</del>{' '}
						</p>
					) : (
						<p className='price_p'>{`₪${products.price.toFixed(2)}`}</p>
					)}
					<div className='test'>
						{/* <Tooltip title='Favorite' arrow>
							<IconButton
								className={`heart_btn ${heart && 'active'}`}
								onClick={handleClickLike}
							>
								<FavoriteIcon sx={{ fontSize: 50 }} />
							</IconButton>
						</Tooltip> */}
						<Link
							to={`#/${products.name}/${products.id}`}
							className='product_windows'
						>
							<Tooltip title='See More' arrow>
								<Button
									color='inherit'
									className='seeMore'
									onClick={() => openModal(products)}
									sx={{
										fontSize: '15.5px',
										fontWeight: '600',
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
			{isOpen && (
				<div className='modal'>
					<ModalWindows />
				</div>
			)}
		</div>
	)
}

export default AllProduct
