import { useContext, useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Modal, Typography } from '@mui/material'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { allProducts } from '../../utils/types'

import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addItem, getAllTotal } from '../../features/ShoppingCart/CartSlice'
import { ModalWindowsContext } from '../../provides/ModalWindowsContext'
import './modal_windows.css'

// interface ModalWindowsProps {
// 	// active: boolean
// 	// setActive: (active: boolean) => void
// 	allPr: allProducts
// }

// const ModalWindows = ({ allPr }: ModalWindowsProps) => {
const ModalWindows = () => {
	const { isOpen, closeModal, product } = useContext(ModalWindowsContext)

	console.log('product Men2 => ', product)

	const chooseImg: string[] = [
		'./assets/AllProductsImg/' + product.mainImg + '.png',
		'./assets/AllProductsImg/' + product.firsImg + '.png',
		'./assets/AllProductsImg/' + product.secondImg + '.png',
		'./assets/AllProductsImg/' + product.threeImg + '.png',
	]

	const size = ['40', '40.5', '41', '41.5', '42', '42.5', '43', '43.5', '44']
	const [sizeName, setSizeName] = useState('')
	const [selectedImg, setSelectedImg] = useState(chooseImg[0])
	const dispatch = useAppDispatch()
	const cart = useAppSelector(state => state.cart)

	useEffect(() => {
		dispatch(getAllTotal())
	}, [cart, dispatch])

	const handleChange = (event: SelectChangeEvent) => {
		setSizeName(event.target.value as string)
	}

	const handleSelectedImg = (index: number) => {
		setSelectedImg(chooseImg[index])
	}

	const handleClickAddItem = (productSize: allProducts) => {
		const selectedSize = sizeName
		if (!selectedSize) {
			toast.info(`You need add size`, {
				position: 'bottom-left',
			})
			return productSize == null
		}

		dispatch(addItem({ ...productSize, size: selectedSize }))
	}

	return (
		<Modal
			key={product.name}
			className={isOpen ? 'modal_windows active' : ''}
			open={isOpen}
			onClose={closeModal}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<div
				data-aos='zoom-up'
				className={isOpen ? 'modal_windows_page active' : 'modal_windows_page'}
			>
				<div className='modal_windows_content_left'>
					<div className='modal_windows_img_top'>
						<img
							className='kingImg'
							src={selectedImg}
							alt={`${product.name}`}
						/>
					</div>
					<div className='modal_windows_img_bottom'>
						{chooseImg.map((image: string, index: number) => (
							<img
								key={index}
								src={image}
								alt={product.name}
								onClick={() => handleSelectedImg(index)}
								className='imgAll'
							/>
						))}
					</div>
				</div>
				<div className='modal_windows_content_right'>
					<div className='modal_windows_content_right_info'>
						<p className='h1_name_pageProduct'>{product.name}</p>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-around',
								mt: 3,
							}}
						>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography component='h6' variant='h6'>
									{product.gender}
								</Typography>
								<Typography component='p' sx={{ fontSize: '22px' }}>
									{product.category}
								</Typography>
								<Typography component='h3' variant='h5' sx={{ mb: 4 }}>
									{product.sale ? (
										<span>
											{'₪' + product!.price.toFixed(2)}
											<del>{'₪' + product.sale.toFixed(2)}</del>
										</span>
									) : (
										'₪' + product.price.toFixed(2)
									)}
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									width: 100,
									mb: 4,
								}}
							>
								<FormControl fullWidth>
									<InputLabel id='demo-simple-select-label'>Size</InputLabel>
									<Select
										labelId='demo-simple-select-label'
										id='demo-simple-select'
										//Cerez Value mi polucim dannie i vivodim na ekran

										value={sizeName}
										label='Size'
										onChange={handleChange}
										// onClick={() => handleClickAddItem(allPr)}
									>
										{size.map(size => (
											<MenuItem key={size} value={size}>
												{size}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Box>
						</Box>

						<p className='p_descrip'>{product.description}</p>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-evenly',
								mb: 6,
								alignItems: 'center',
							}}
						>
							<button
								className='btn_focus add'
								onClick={() => handleClickAddItem(product)}
								onChange={() => handleChange}
							>
								<span className='add_icon'> &#10003; </span>
								<span className='textAdd'>Buy</span>
							</button>
							<button className='btn_focus heart'>
								<span className='textHeart'>Favourite</span>
								<span className='heart_icon'> &#9829; </span>
							</button>
						</Box>
					</div>
				</div>

				<div className='btn_close'>
					<Button onClick={closeModal} color='inherit'>
						<CloseIcon className='btn_close_icon' />
					</Button>
				</div>
			</div>
		</Modal>
	)
}

export default ModalWindows
