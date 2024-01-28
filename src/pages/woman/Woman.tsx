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
import './woman.css'

const Woman = () => {
	const [selectedFilterDD, setSelectedFilterDD] = useState<string>('')
	const [currentPage, setCurrentPage] = useState(1)
	const isMobile = useMediaQuery('(max-width:940px)')

	const handleChange = (event: ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value)
	}

	const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage

	const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedFilterDD(event.target.value)
	}

	const filterAllProducts: allProducts[] = AllProducts.filter(
		(item: allProducts) => item.gender === "Women's"
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
		<div className='woman'>
			<h2 className='h2_man'>Woman</h2>
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

			<div data-aos='zoom-in-up' className='womanProducts'>
				{filterAllProducts.map((item: allProducts) => (
					<AllProduct key={item.name} products={item} />
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

export default Woman
