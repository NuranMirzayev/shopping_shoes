import 'aos-animations/dist/animations.min.js'
import 'react-toastify/dist/ReactToastify.css'

import { Route, Routes } from 'react-router-dom'

import About from '../../pages/aboutMe/About'
import Home from '../../pages/home/Home'
import Kids from '../../pages/kids/Kids'
import Man from '../../pages/man/Man'
import Sale from '../../pages/sale/Sale'
import Woman from '../../pages/woman/Woman'

import { ToastContainer } from 'react-toastify'
import MainInfo from '../../pages/checkOut/MainInfo'
import LogIn from '../../pages/logIn/LogIn'
import SignUp from '../../pages/signUp/SignUp'
import { MWProviders } from '../../provides/ModalWindowsContext'
import ScrollButton from '../ScrollTrigger'

export default function Main() {
	return (
		<>
			<ToastContainer />
			<MWProviders>
				<Routes>
					<Route path='/*' element={<Home />} />
					<Route path='/men' element={<Man />} />
					<Route path='/women' element={<Woman />} />
					<Route path='/kids' element={<Kids />} />
					<Route path='/sale' element={<Sale />} />
					<Route path='/about us' element={<About />} />

					<Route path='/log in' element={<LogIn />} />
					<Route path='/sign up' element={<SignUp />} />

					<Route path='/checkOut' element={<MainInfo />} />
				</Routes>
			</MWProviders>

			<ScrollButton />
		</>
	)
}
