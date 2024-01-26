import 'aos-animations/dist/animations.min.js'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import Footer from './components/footer/Footer'

import Main from './components/main/Main'
import MobileNavBar from './components/navbar/MobileNavBar'
import Loading from './pages/load/Loading'
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
				<>
					<MobileNavBar filterAll={AllProducts} />
					<Main />
					<Footer />
				</>
			)}
		</>
	)
}

export default App
