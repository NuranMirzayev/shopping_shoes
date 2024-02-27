import { Pagination, useMediaQuery } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import AllProduct from '../../components/Product/AllProduct'
import {
	AllProducts,
	SelectedFilter,
	itemsPerPageDesktop,
	itemsPerPageMobile,
} from '../../utils/constants'
import { SelectedFilterType, allProducts } from '../../utils/types'
import './kids.css'

// ... Import statements

const Kids = () => {
	const [selectedFilterDD, setSelectedFilterDD] = useState<string>('')
	const [currentPage, setCurrentPage] = useState(1)
	const isMobile = useMediaQuery('(max-width:940px)')

	const handleChange = (event: ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value)
	}

	const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage

	const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedFilterDD(e.target.value)
	}

	const sortedAndFilteredProducts: allProducts[] = AllProducts.filter(
		(item: allProducts) => item.gender === "Kids'"
	)
		.sort((a: allProducts, b: allProducts) => {
			if (selectedFilterDD === 'caseOne') {
				return a.name.localeCompare(b.name)
			} else if (selectedFilterDD === 'caseTwo') {
				return b.name.localeCompare(a.name)
			} else if (selectedFilterDD === 'caseThree') {
				return a.price - b.price
			} else if (selectedFilterDD === 'caseFour') {
				return b.price - a.price
			}
			return 0
		})
		.slice(startIndex, endIndex)

	return (
		<div className='kids'>
			<h2 className='h2_kids'>Kids</h2>
			<div className='divSelectedSort'>
				<select
					className='selectedSort'
					onChange={handleFilterChange}
					value={selectedFilterDD}
				>
					<option value=''>--Filter--</option>
					{SelectedFilter.map((option: SelectedFilterType) => (
						<option
							className='optionSort'
							key={option.selectOption}
							value={option.selectOption}
						>
							{option.titleOption}
						</option>
					))}
				</select>
			</div>

			<div data-aos='zoom-in-up' className='kidProducts'>
				{sortedAndFilteredProducts.map((item: allProducts, index) => (
					<AllProduct index={index} key={item.name} products={item} />
				))}
			</div>
			<Pagination
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: '20px',
				}}
				hidePrevButton
				size='large'
				shape='rounded'
				color='secondary'
				count={Math.ceil(
					AllProducts.filter(item => item.gender === "Kids'").length /
						itemsPerPage
				)}
				page={currentPage}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Kids
