import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Button, Tooltip, useMediaQuery } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
	ModalWindowsContext,
	Product,
} from '../../provides/ModalWindowsContext'
import ModalWindows from '../modal_windows/ModalWindows'
import MobileVersionAllProducts from './MobileVersionAllProducts'
import './Product.css'

interface AllProductProps {
	products: Product
}

const AllProduct = ({ products }: AllProductProps) => {
	const { isOpen, openModal } = useContext(ModalWindowsContext)
	const isMobileMedia = useMediaQuery('(max-width:940px)')

	return (
		<div className='Product'>
			{!isMobileMedia ? (
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
											maxFontSize: '15.5px',
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
			) : (
				<MobileVersionAllProducts mobProducts={products} />
			)}
			{isOpen && (
				<div className='modal'>
					<ModalWindows />
				</div>
			)}
		</div>
	)
}

export default AllProduct
