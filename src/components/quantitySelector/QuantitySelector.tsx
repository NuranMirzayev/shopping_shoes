
import './selector.css';

interface Quantity {
    quantity: number
    cartQuantity:number
    setQuantity: (quantity: number) => void;
}

const QuantitySelector = ({ quantity, setQuantity, cartQuantity }: Quantity) => {

    // const {  } = useAppSelector((state) => state.cart)

    // const handleCLickPlus = () => {
    //     if (quantity < 10){
    //         setQuantity(quantity + 1)
    //         cartQuantity++;
    //     }
        
    // }

    // const handleCLickMin = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1)
    //         cartQuantity--;
    //     }
        
    // }


  return (

    //readOnly => eto dlya udaleniye krayniye knobki

    <div className='selector'> 
          <button className='selector_min btn' onClick={() => cartQuantity--}>-</button>
          <input className='selector_input' type='number' min={1} max={10} value={cartQuantity} readOnly />{cartQuantity}
          <button className='selector_plus btn' onClick={() => cartQuantity++}>+</button>
    </div>
  )
}

export default QuantitySelector