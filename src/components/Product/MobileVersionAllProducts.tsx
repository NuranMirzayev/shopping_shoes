import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
	ModalWindowsContext,
	Product,
} from '../../provides/ModalWindowsContext'

interface MobileProductsProps {
	mobProducts: Product
	index: number
}

const MobileVersionAllProducts = ({
	mobProducts,
	index,
}: MobileProductsProps) => {
	const { openModal } = useContext(ModalWindowsContext)
	const delay = index * 200

	return (
		<Card
			data-aos='zoom-in-up'
			data-aos-delay={delay}
			sx={{ maxWidth: 300, height: 265, m: 0 }}
		>
			<CardMedia
				sx={{ height: 125 }}
				image={`./assets/AllProductsImg/${mobProducts.mainImg}.png`}
				title={mobProducts.name}
			/>
			<CardContent>
				<Typography
					gutterBottom
					className='mobNameText'
					sx={{ fontSize: '16px' }}
					variant='h6'
					component='div'
				>
					{mobProducts.name}
				</Typography>
				{mobProducts.sale ? (
					<Typography sx={{ color: 'black' }} variant='inherit'>
						{`₪${mobProducts!.price.toFixed(2)}`}{' '}
						<del className='red'>{`₪${mobProducts.sale.toFixed(2)}`}</del>{' '}
					</Typography>
				) : (
					<Typography
						sx={{ color: 'black' }}
						variant='inherit'
					>{`₪${mobProducts.price.toFixed(2)}`}</Typography>
				)}
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
				<Link to={`#/${mobProducts.name}/${mobProducts.id}`}>
					<Tooltip title='See More' arrow>
						<Button
							onClick={() => openModal(mobProducts)}
							sx={{
								color: 'black',
								maxFontSize: '15.5px',
								fontWeight: '600',
							}}
							size='medium'
						>
							See More
						</Button>
					</Tooltip>
				</Link>
			</CardActions>
		</Card>
	)
}

export default MobileVersionAllProducts
