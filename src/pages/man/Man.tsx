import { ChangeEvent, useState } from 'react'
import AllProduct from '../../components/Product/AllProduct'
import { AllProducts, SelectedFilter } from '../../utils/constants'
import { SelectedFilterType, allProducts } from '../../utils/types'
import './man.css'

const Man = () => {
	const [selectedFilterDD, setSelectedFilterDD] = useState<string>('')

	const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedFilterDD(event.target.value)
	}

	const filterAllProducts: allProducts[] = AllProducts.filter(
		(item: allProducts) => item.gender === "Men's"
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
		<div className='man'>
			<div>
				<h2 className='h2_man'>Man</h2>
			</div>
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

export default Man
