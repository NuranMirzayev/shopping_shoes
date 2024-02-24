import { Pagination, useMediaQuery } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import {
	AllProducts,
	itemsPerPageDesktop,
	itemsPerPageMobile,
} from '../../utils/constants'
import AllProduct from '../Product/AllProduct'
import './newArrivals.css'

const NewArrivals = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const isMobile = useMediaQuery('(max-width:940px)')

	const handleChange = (e: ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value)
	}

	const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage

	const newArrivalsToDisplay = AllProducts.filter(
		item => item.newArrivals === 'new'
	).slice(startIndex, endIndex)

	return (
		<div className='newArrivals'>
			<h2 className='h2_pr'>New Arrivals</h2>
			<div data-aos='zoom-in-up' className='newArrivalsProducts'>
				{newArrivalsToDisplay.map(item => (
					<AllProduct key={item.name} products={item} />
				))}
			</div>
			<Pagination
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mt: 5,
				}}
				hidePrevButton
				size='large'
				shape='rounded'
				color='secondary'
				count={Math.ceil(
					AllProducts.filter(item => item.newArrivals === 'new').length /
						itemsPerPage
				)}
				page={currentPage}
				onChange={handleChange}
			/>
		</div>
	)
}

export default NewArrivals
