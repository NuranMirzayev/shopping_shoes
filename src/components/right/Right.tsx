import { useState } from 'react'

import { imagesRight } from '../../utils/constants'
import './right.css'

const Right = () => {
	const [src, setSrc] = useState(imagesRight[0])

	const handleClick = (myIndex: number) => {
		setSrc(imagesRight[myIndex])
	}

	return (
		<div className='right'>
			<div className='right_top'>
				<img
					src={src.imgUrl}
					alt='right_photo1'
					className='right_top_img animate__backInRight animate__animated'
				/>
			</div>
			<div className='right_bottom'>
				<div className='right_bottom_box animate__backInRight animate__animated animate__delay-1s'>
					<img
						src={imagesRight[0].imgUrl}
						alt='right_photo1'
						className='right_bottom_img '
						key={imagesRight[0].id}
						onClick={() => handleClick(0)}
					/>
				</div>
				<div className='right_bottom_box animate__backInRight animate__animated animate__delay-2s'>
					<img
						src={imagesRight[1].imgUrl}
						alt='right_photo2'
						className='right_bottom_img'
						key={imagesRight[1].id}
						onClick={() => handleClick(1)}
					/>
				</div>
				<div className='right_bottom_box animate__backInRight animate__animated animate__delay-3s'>
					<img
						src={imagesRight[2].imgUrl}
						alt='right_photo3'
						className='right_bottom_img '
						key={imagesRight[2].id}
						onClick={() => handleClick(2)}
					/>
				</div>
			</div>
		</div>
	)
}

export default Right
