import { useState } from 'react'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../app/hooks'
import { setUser } from '../../features/User/UserSlice'
import './signUp.css'

const SignUp = () => {
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const [isSwitch, setIsSwitch] = useState(false)
	const [email, setEmail] = useState('')
	const [pwd, setPWD] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const handleClickSwitch = (): void => {
		setIsSwitch(!isSwitch)
	}

	const handleClickSignup = (email: string, pwd: string) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, pwd)
			.then(({ user }) => {
				console.log(user)
				navigate('/')

				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.refreshToken,
					})
				)
			})
			.catch(console.log)
	}

	return (
		<div className='signUp'>
			{isSwitch ? (
				<Navigate to='/log in' />
			) : (
				<div className='box_form'>
					<div className='form_left_img '>
						<button onClick={handleClickSwitch} className='span_left_icon'>
							<KeyboardBackspaceIcon sx={{ fontSize: '30px' }} />
							<span className='a_left_text'>
								{isSwitch ? 'Switch to Sign up' : 'Switch to Login'}
							</span>
						</button>
					</div>
					<div>
						<div className='form_sign_up'>
							<h2 id='h3'>{isSwitch ? 'Login' : 'Sign up'}</h2>
							<input
								className='input'
								type='email'
								placeholder='Email'
								// pattern='[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}'
								// required
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>

							<input
								className='input'
								type='password'
								placeholder='Password'
								value={pwd}
								onChange={e => setPWD(e.target.value)}
							/>

							<input
								className='input'
								type='text'
								placeholder='First name'
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
							/>

							<input
								className='input'
								type='text'
								placeholder='Last name'
								value={lastName}
								onChange={e => setLastName(e.target.value)}
							/>

							<input
								className='input'
								type='date'
								placeholder='Day/Month/Year'
							/>
							<div className='check'>
								<input className='checking' type='radio' value={'Male'} />
								Male
								<input className='checking' type='radio' value='Female' />
								Female
								<input className='checking' type='radio' value='Other' />
								Other
							</div>
							<div className='check'>
								<input
									className='checking'
									type='checkbox'
									placeholder='check'
								/>
								<span className='span_check'>
									Sign up for emails to get updates from Space Shoes on products
									,offers ,and your Member benefits
								</span>
							</div>
							<button
								className='btn_submit'
								onClick={() => handleClickSignup(email, pwd)}
							>
								{' '}
								Sign up
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default SignUp
