import { ChangeEvent, FormEvent, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './shipping.css';

const Shipping = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [number, setNumber] = useState<string | undefined>();

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    }
    const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    }
    const handleStateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    }
    const handleZipChange = (event: ChangeEvent<HTMLInputElement>) => {
        setZip(event.target.value);
    }
    const handleNumberChange = (value: string | undefined) => {
        setNumber(value);
    };

    const handleSubmitShipping = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    return (
        <div className="shipping">
            <form className='mainInfo_left_form' onSubmit={handleSubmitShipping}>
                <div className='mainInfo_left_form_box'>
                    <input className='mainInfo_left_form_input' type="text" id="name"
                        placeholder='Full Name'
                        value={name} onChange={handleNameChange}
                        required />
                    <input className='mainInfo_left_form_input' placeholder='Email' type="email" id="email" value={email} onChange={handleEmailChange} required />
                    <PhoneInput
                        className='test_num'
                        placeholder="Enter phone number"
                        value={number}
                        onChange={handleNumberChange}
                    />
                    <p>{number}</p>
                </div>
                <div className='mainInfo_right_form_box'>


                    <input className='mainInfo_left_form_input' placeholder='State' type="text" id="state" value={state} onChange={handleStateChange} required />
                    <input className='mainInfo_left_form_input' placeholder='City' type="text" id="city" value={city} onChange={handleCityChange} required />

                    <input id="address"
                        className='mainInfo_left_form_input'
                        placeholder='Address'
                        type='text'
                        value={address} onChange={handleAddressChange}
                        required />

                    <input className='mainInfo_left_form_input' placeholder='Zip Code' type="text" id="zip" value={zip} onChange={handleZipChange} required />
                </div>
            </form>
        </div>
    )
}

export default Shipping