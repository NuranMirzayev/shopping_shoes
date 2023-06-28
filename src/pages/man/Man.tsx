
import AllProduct from '../../components/Product/AllProduct';
import { AllProducts } from '../../utils/constants';
import './man.css';



const Man = () => {

  return ( 
    <div className='man'>
      <h2 className='h2_man'>Man</h2>
      <div data-aos="zoom-in-up" className='manProducts'>
        {AllProducts.filter((item) => {
          return item ? item.gender === "Men's" : null 
        }).map(item => <AllProduct key={item.name} allPr={item} />)}
      </div>
    </div>
  )
}


export default Man;

