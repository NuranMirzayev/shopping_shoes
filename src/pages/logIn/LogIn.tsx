import EastIcon from '@mui/icons-material/East'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks'

import {
	GoogleAuthProvider,
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth'
import { setUser } from '../../features/User/UserSlice'

import Divider from '@mui/material/Divider'

import { toast } from 'react-toastify'
import { auth } from '../../Auth'
import { setGoogle } from '../../features/User/GoogleSlice'
import './logIn.css'

const LogIn = () => {
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const [isSwitch, setIsSwitch] = useState(false)
	const [email, setEmail] = useState('')
	const [pwd, setPWD] = useState('')

	const handleClickSwitch = (): void => {
		setIsSwitch(!isSwitch)
	}

	//Regular LogIn

	const handleCLickLogin = (email: string, pwd: string) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, pwd)
			.then(({ user }) => {
				console.log(user)

				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.refreshToken,
					})
				)
				toast.success(`${email} Welcome`, {
					position: 'bottom-left',
				})

				navigate('/')
			})
			.catch(() =>
				toast.error(`Email or Password wrong`, {
					position: 'bottom-left',
				})
			)
		setEmail('')
		setPWD('')
	}

	//Google LogIn

	const provider = new GoogleAuthProvider()

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(res => {
				console.log(res)
				const photoGoogle: string | null = res.user.photoURL
				localStorage.setItem('photoGoogle', photoGoogle!)
				dispatch(
					setGoogle({
						emailGoogle: res.user.email,
						idGoogle: res.user.uid,
						tokenGoogle: res.user.refreshToken,
					})
				)
				toast.success(`${res.user.email} Welcome`, {
					position: 'bottom-left',
				})
				navigate('/')
			})
			.catch(error => {
				toast.error(`${error} account or password wrong`, {
					position: 'bottom-left',
				})
			})
	}

	return (
		<div className='logIn'>
			{isSwitch ? (
				<Navigate to='/sign up' />
			) : (
				<div className='box_form'>
					<div className='left_box_form'>
						<h2 className='text_form'>{isSwitch ? 'Sign up' : 'Login'}</h2>
						<div>
							<input
								placeholder='Email'
								className='input_left'
								type='text'
								pattern='/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/'
								required
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>

							<input
								placeholder='Password'
								className='input_left'
								type='password'
								value={pwd}
								onChange={e => setPWD(e.target.value)}
							/>

							<div className='logIn_btn_div'>
								<button
									className='btn_submit_logIn'
									type='submit'
									onClick={() => handleCLickLogin(email, pwd)}
								>
									Login
								</button>
							</div>
							<Divider sx={{ marginTop: '15px' }}>or</Divider>
							<button className='buttonGoogle' onClick={signInWithGoogle}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									preserveAspectRatio='xMidYMid'
									viewBox='0 0 256 262'
								>
									<path
										fill='#4285F4'
										d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
									></path>
									<path
										fill='#34A853'
										d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
									></path>
									<path
										fill='#FBBC05'
										d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
									></path>
									<path
										fill='#EB4335'
										d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
									></path>
								</svg>
								Continue with Google
							</button>
							<button className='buttonMicr'>
								<img
									src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEXz8/PzUyWBvAYFpvD/ugjz9fb19Pbz+fr39fr69vPy9foAofD/tgDzRQB9ugAAo/Df6dCv0Xjz2dPzTBfzl4PznImz04CAx/H60oHS5vJ5xPH60Hn16dIAnvDz7u3z4t7n7dzzNADzkXurz3BwtQDzvrLM36zf6/Os2PL336z07d/7z3RN8WfWAAABg0lEQVR4nO3cyVLCYBCFURwCkXlygDBFUBTf//3cSGIVf5WrDi7O9wJdp3p/Wy1JkvSrLLzqVDu8FHAzjW57JrZ34+hSH5yWg9jK187PrXx/GMZ2GF9+MZsObmKbzSvhZHgb25CQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwUWE5i21QC/fB86Xp/dLt/DG4t/MGbf7+FNxkl9jZzTrR1TvCeXjJIWFJkv7uIbzqVDe8LAE8Lp+D+zgTu5/FS2zFKUFcrEex9ZaV8Ksf3Sol7N3FNqqFRf8+NkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsJmhetebOtr75dmi+iO1anTKrrNJbDRsvCuDJQk6Z/1DSzvYqEfRCNJAAAAAElFTkSuQmCC'
									alt='mic'
								/>
								Continue with Microsoft
							</button>
							<button className='buttonFace'>
								<img
									src='https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png'
									alt='fb'
								/>
								Continue with Facebook
							</button>
						</div>
					</div>

					<div className='right_box_form '>
						<button onClick={handleClickSwitch} className='span_right_icon'>
							<span className='a_left_text'>
								{isSwitch ? 'Switch to Login' : 'Switch to Sign up'}
							</span>
							<EastIcon sx={{ fontSize: '30px' }} />
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default LogIn
