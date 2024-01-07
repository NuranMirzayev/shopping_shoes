import AllProduct from '../../components/Product/AllProduct'
import { AllProducts } from '../../utils/constants'
import './sale.css'

const Sale = () => {
	return (
		<div className='sale'>
			<h2 className='h2_man'>Sale</h2>
			<div data-aos='zoom-in-up' className='saleProducts'>
				{AllProducts.filter(item => {
					return item.sale
				}).map(item => (
					<AllProduct key={item.id} products={item} />
				))}
			</div>
		</div>
	)
}

export default Sale
