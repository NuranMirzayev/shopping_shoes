import AllProduct from '../../components/Product/AllProduct'
import { AllProducts } from '../../utils/constants'
import './man.css'

// TODO:

// FIXME:

const Man = () => {
	// const {product}= useContext(ModalWindowsContext)
	return (
		<div className='man'>
			<div>
				<h2 className='h2_man'>Man</h2>
			</div>
			<div data-aos='zoom-in-up' className='manProducts'>
				{AllProducts.filter(item => {
					return item ? item.gender === "Men's" : null
				}).map(item => (
					<AllProduct key={item.name} products={item} />
				))}
			</div>
		</div>
	)
}

export default Man
