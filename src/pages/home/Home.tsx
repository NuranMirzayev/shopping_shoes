import Carousel from '../../components/carousel/Carousel'
import Gender from '../../components/gender/Gender'
import Left from '../../components/left/Left'
import Right from '../../components/right/Right'

import Category from '../../components/category/Category'

import { Box } from '@mui/material'
import NewArrivals from '../../components/new_arrivals/NewArrivals'
import Subscribe from '../../components/subscribe/Subscribe'
import './home.css'

const Home = () => {
	return (
		<div className='home'>
			<Box
				sx={{
					display: {
						xs: 'columns',
						md: { flexDirection: 'column' },
					},
				}}
				className='wrapper'
			>
				<Left />
				<Right />
			</Box>
			<Carousel />
			<Gender />
			<NewArrivals />
			<Category />
			<Subscribe />
		</div>
	)
}

export default Home
