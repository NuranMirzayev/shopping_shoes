import 'aos-animations/dist/animations.min.js'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import About from './pages/aboutMe/About'
import Home from './pages/home/Home'
import Kids from './pages/kids/Kids'
import Man from './pages/man/Man'
import Sale from './pages/sale/Sale'
import Woman from './pages/woman/Woman'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import IconButton from '@mui/material/IconButton'

import { ToastContainer } from 'react-toastify'
import NavBar from './components/navbar/NavBar'
import MainInfo from './pages/checkOut/MainInfo'
import Loading from './pages/load/Loading'
import LogIn from './pages/logIn/LogIn'
import SignUp from './pages/signUp/SignUp'
import { MWProviders } from './provides/ModalWindowsContext'
import { AllProducts } from './utils/constants'

function App() {
	const [loading, setLoading] = useState(true)

	setTimeout(() => {
		setLoading(false)
	}, 1000)

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className='App'>
					<div className='return'>
						<IconButton color='inherit' href='#'>
							<ArrowUpwardIcon />
						</IconButton>
					</div>
					<ToastContainer />
					<NavBar filterAll={AllProducts} />
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
							{/* <Route path='/checkOut' element={<CheckOut />} /> */}
							{/* <Route path='/checkOut' element={<Country />} /> */}

							<Route path='/checkOut' element={<MainInfo />} />
						</Routes>
					</MWProviders>
					<Footer />
				</div>
			)}
		</>
	)
}

export default App
