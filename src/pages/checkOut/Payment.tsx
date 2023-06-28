import { ChangeEvent, useState } from 'react';
import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './payToCart.css';

interface State {
  number: number | string;
  expiry: number | string;
  cvc: number | string;
  name: string;
  focus: Focused | '';
}

const Payment = () => {
  const [state, setState] = useState<State>({
    number: "",
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name as Focused }));
  }

  return (
    <div className='payToCart_box_container'>
      <div className='payToCart_left_container'>
        <form className='payToCart_left_form'>
          <input
            className='payToCart_left_input'
            type="tel"
            name="number"
            placeholder="Card Number"
            value={+state.number || ""}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            pattern="[\d| ]{16,22}"
            minLength={16}
            maxLength={22}
            required
          />
          <input
            className='payToCart_left_input'
            type="text"
            name="name"
            placeholder="Full Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <input
            className='payToCart_left_input'
            type="tel"
            name="expiry"
            placeholder="Valid Thru"
            value={+state.expiry || ""}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            pattern="[\d\d/\d\d| ]{2,2}"
            required
            maxLength={4}
          />
          <input
            className='payToCart_left_input'
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={+state.cvc || ""}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            pattern="\d{3,4}"
            minLength={3}
            maxLength={4}
            required
          />
        </form>
      </div>
      <div className='payToCart_right_container'>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
      </div>
    </div>
  );
}

export default Payment