import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "react-toastify/dist/ReactToastify.css";
import ConfirmOrder from './ConfirmOrder';
import Payment from './Payment';
import './mainInfo.css';
import './shipping.css';

const steps = [
    'Shipping',
    'Payment',
    'Confirm Order',
];

const MainInfo = () => {
    const [step, setStep] = useState(0)
    const [loading, setLoading] = useState<boolean>(true)
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

    const handleStepPlus = () => {
        if (step <= 3) {
            setStep(step + 1)
        }
    }


    const handleStepMin = () => {
        if (step) {
            setStep(step - 1)
        }
    }

    useEffect(() => {
        if (step === 3) {
            const timeout = setTimeout(() => {
                setLoading(false);
            }, 3500);

            return () => {

                clearTimeout(timeout)
            }
        }

    }, [step]);


    return (
        <div className='mainInfo'>
            <div className='mainInfo_left_container'>
                {step === 3 ?
                    null :
                    <Box sx={{
                        width: '100%', alignItems: 'flex-start',
                        marginBottom: '20px'
                    }}>
                        <Stepper activeStep={step} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                }

                {step === 0
                    ?
                    <div className='mainInfo_left_box'>
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
                                <div className='checkout_div_btn'>
                                    <button className='checkout_btn_submit' type='submit' onClick={handleStepPlus}>Payment</button>
                                </div>
                            </form>
                            <div className='checkout_div_btn'>
                                <button className='checkout_btn_submit' type='submit' onClick={handleStepPlus}>Payment</button>
                            </div>
                        </div>

                    </div>
                    :
                    null
                }
                {step === 1
                    ?
                    <div className='mainInfo_left_box'>
                        <Payment />
                        <div className='checkout_div_btn'>
                            <button className='checkout_btn_submit' type='submit' onClick={handleStepPlus}>Confirn Order</button>
                        </div>
                        <div className='checkout_div_btn_return'>
                            <button className='checkout_btn_submit' type='submit' onClick={handleStepMin}>Shipping</button>
                        </div>
                    </div>
                    :
                    null
                }
                {step === 2
                    ?
                    <div className='mainInfo_left_box'>
                        <ConfirmOrder />
                        <div className='checkout_div_btn'>
                            <button className='checkout_btn_submit' type='submit' onClick={handleStepPlus}>
                                Confirm
                            </button>
                        </div>
                        <div className='checkout_div_btn_return'>
                            <button className='checkout_btn_submit' type='submit' onClick={handleStepMin}>
                                Payment
                            </button>

                        </div>

                    </div>
                    :
                    null
                }
                {step === 3 ?
                    <div className='mainInfo_left_box'>
                        {
                            loading ?
                                <section className="dots-container">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </section>
                                :
                                <div className='withText'>
                                    <img className='confirm_animation' src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" alt="sucAnim" />
                                    <h3 className='confirm_animationText'> Your order is accepted</h3>
                                </div>
                        }
                    </div>
                    :
                    null

                }


            </div >
            {/* <div style={{ width: '200px', height: '200px', background: 'green' }}>
                {`
                ${name}
                ${email}
                ${state}
                `}
            </div> */}
        </div >
    )
}

export default MainInfo