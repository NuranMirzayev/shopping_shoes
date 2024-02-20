import { Link } from 'react-router-dom'
import './gender.css'

const Gender = () => {
	return (
		<div className='gender' data-aos='zoom-in-right'>
			<div className='main'>
				<Link to='/women' className='box main_right'>
					<p className='p_right'>Women</p>
				</Link>
				<Link to='/kids' className='box main_center'>
					<p className='p_center'>Kids</p>
				</Link>
				<Link to='/men' className='box main_left'>
					<p className='p_left'>Men</p>
				</Link>
			</div>
		</div>
	)
}

export default Gender
