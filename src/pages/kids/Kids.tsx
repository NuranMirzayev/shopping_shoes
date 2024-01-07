import AllProduct from '../../components/Product/AllProduct'
import { AllProducts } from '../../utils/constants'
import './kids.css'

const Kids = () => {
	return (
		<div className='kids'>
			<h2 className='h2_kids'>Kids</h2>
			<div data-aos='zoom-in-up' className='kidProducts'>
				{AllProducts.filter(item => {
					return item ? item.gender === "Kids'" : null
				}).map(item => (
					<AllProduct key={item.name} products={item} />
				))}
			</div>
		</div>
	)
}

export default Kids
