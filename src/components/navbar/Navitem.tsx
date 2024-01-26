import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Item } from '../../utils/types'

interface Props {
	item: Item
}

const Navitem = ({ item }: Props) => {
	return (
		<Button sx={{ display: { xs: 'none', md: 'flex' } }}>
			<Link className='navList' to={`${item.route}`}>
				{item.title}
			</Link>
		</Button>
	)
}

export default Navitem
