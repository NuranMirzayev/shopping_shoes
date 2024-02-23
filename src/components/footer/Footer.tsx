import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

import { IconButton, MenuList, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Item } from '../../utils/types'
import './footer.css'

const products: Array<Item> = [
	{
		title: 'Women',
		route: 'women',
	},
	{
		title: 'Kids',
		route: 'kids',
	},
	{
		title: 'Men',
		route: 'men',
	},
	{
		title: 'Sale',
		route: 'sale',
	},
	{
		title: 'About us',
		route: 'about us',
	},
]

const getHelp = [
	{
		title: 'Order status',
		route: 'orderStatus',
	},
	{
		title: 'Shipping and delivery',
		route: 'shippingDelivery',
	},
	{
		title: 'Returns',
		route: 'returns',
	},
	{
		title: 'Payment optionss',
		route: 'paymentOptions',
	},
]

const Contact = [
	{
		p: 'Email',
		h5: 'SpaceShoes@gmail.com',
	},
	{
		p: 'Phone',
		h5: '+972 555 777 77 77',
	},
	{
		p: 'Address',
		h5: '2424 David ,Jerusalem 2424',
	},
]

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer_top'>
				<Stack
					sx={{
						display: { xs: 'none', md: 'flex' },
						height: '150px',
						width: '350px',
					}}
					className='footer_logo'
				>
					<img className='footer_logo_img' src='./assets/Logo.png' alt='' />
					<b>Space Shoes</b>
				</Stack>
				<div className='products'>
					<h2>Products</h2>
					{products.map(item => (
						<Link className='footer_a' to={item.route}>
							<MenuList key={item.route}>
								<Typography color={'white'} textAlign='center'>
									{item.title}
								</Typography>
							</MenuList>
						</Link>
					))}
				</div>
				<div className='getHelp'>
					<h2>Get help</h2>
					{getHelp.map(item => (
						<Link className='footer_a' to={item.route}>
							<MenuList key={item.route}>
								<Typography color={'white'} textAlign='center'>
									{item.title}
								</Typography>
							</MenuList>
						</Link>
					))}
				</div>
				<div className='contact'>
					<h2>Contact</h2>{' '}
					{Contact.map(item => (
						<MenuList>
							<Typography variant='body1'>{item.p}</Typography>
							<Typography variant='body2'>{item.h5}</Typography>
						</MenuList>
					))}
				</div>
			</div>
			<hr />
			<div className='footer_bottom'>
				<div className='footer_bottom_left'>
					<h6>Nuran Mirzayev © 2023</h6>
				</div>
				<div className='footer_bottom_right'>
					<IconButton color='inherit'>
						<FacebookOutlinedIcon sx={{ fontSize: 35 }} />
					</IconButton>
					<IconButton color='inherit'>
						<InstagramIcon sx={{ fontSize: 35 }} />
					</IconButton>
					<IconButton color='inherit'>
						<TwitterIcon sx={{ fontSize: 35 }} />
					</IconButton>
				</div>
			</div>
		</div>
	)
}

export default Footer
