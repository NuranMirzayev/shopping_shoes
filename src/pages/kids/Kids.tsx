import { ChangeEvent, useState } from 'react'
import AllProduct from '../../components/Product/AllProduct'
import { AllProducts, SelectedFilter } from '../../utils/constants'
import { SelectedFilterType, allProducts } from '../../utils/types'
import './kids.css'

const Kids = () => {
	const [selectedFilterDD, setSelectedFilterDD] = useState<string>('')

	const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedFilterDD(event.target.value)
	}

	const filterAllProducts: allProducts[] = AllProducts.filter(
		(item: allProducts) => item.gender === "Kids'"
	).sort((a: allProducts, b: allProducts) => {
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

			<div data-aos='zoom-in-up' className='manProducts'>
				{filterAllProducts.map((item: allProducts) => (
					<AllProduct key={item.name} products={item} />
				))}
			</div>
		</div>
	)
}

export default Kids
