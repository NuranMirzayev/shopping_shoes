import './newArrivals.css'

import { AllProducts } from '../../utils/constants'
import AllProduct from '../Product/AllProduct'

const NewArrivals = () => {
	return (
		<div className='newArrivals'>
			<h2 className='h2_pr'>New Arrivals</h2>
			<div data-aos='zoom-in-up' className='newArrivalsProducts'>
				{AllProducts.filter(item => {
					return item ? item.newArrivals === 'new' : null
				}).map(item => (
					<AllProduct key={item.name} products={item} />
				))}
			</div>
		</div>
	)
}

export default NewArrivals
