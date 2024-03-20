import React, { useState } from 'react'
import './ProductList.scss'
import { OnProduct, fetchProducts } from '../../../components/asyncs'
import { IInputValue } from '../../../types'
import { useAppDispatch, useAppSelector } from '../../../components/hooks'
import { BsFillImageFill } from 'react-icons/bs'
import {
	action,
	adventures,
	comedy,
	fantasy,
	science
} from '../../../redux/Reducers'
import uuid from 'react-uuid'

const ProductList = () => {
	const list = useAppSelector(state => state.list)
	const [inputValue, setInputValue] = useState<IInputValue>({
		id: '',
		name: '',
		price: '',
		discription: '',
		category: '',
		image: ''
	})
 
	const dispatch = useAppDispatch()
	const [openUrlInput, setOpenUrlInput] = useState<boolean>(false)
	const [clue, setClue] = useState<boolean>(false)

	async function handleSave() {
		const trimmedValues = {
			id: uuid(),
			name: inputValue.name.trim(),
			price: inputValue.price.trim(),
			discription: inputValue.discription.trim(),
			category: inputValue.category.trim(),
			image: inputValue.image.trim()
		}

		if (Object.values(trimmedValues).every(value => value !== '')) {
			try {
				await OnProduct(trimmedValues)
				switch (trimmedValues.category) {
					case 'Фантастика':
						dispatch(fantasy(trimmedValues))
						break
					case 'Детектив':
						dispatch(action(trimmedValues))
						break
					case 'adventures':
						dispatch(adventures(trimmedValues))
						break
					case 'science':
						dispatch(science(trimmedValues))
						break
					case 'Комедии':
						dispatch(comedy(trimmedValues))
						break
					default:
						break
				}
				await dispatch(fetchProducts())

				setInputValue({
					id: '',
					name: '',
					price: '',
					discription: '',
					category: '',
					image: ''
				})
			} catch (error) {
				console.error('Ошибка при добавлении продукта:', error)
			}
		} else {
			alert('Заполните пустые поля!!!')
		}
	}

	function openUrlInputs() {
		setOpenUrlInput(true)
		setClue(false)
	}

	return (
		<div className='mainClassCreateProduct'>
			<div className='CreateProduct'>
				<div className='image'>
					{openUrlInput ? (
						<input
							value={inputValue.image}
							onChange={e =>
								setInputValue({ ...inputValue, image: e.target.value })
							}
							type='text'
						/>
					) : (
						<button
							onMouseMove={() => setClue(true)}
							onMouseOut={() => setClue(false)}
							onClick={openUrlInputs}
						>
							<BsFillImageFill />
						</button>
					)}
					{clue && (
						<div>
							<h6>Нажмите чтобы добавить фото</h6>
						</div>
					)}
				</div>
				<div className='inputs'>
					<input
						value={inputValue.name}
						onChange={e =>
							setInputValue({ ...inputValue, name: e.target.value })
						}
						className='ProductName'
						type='text'
						placeholder='ProductName'
					/>
					<div className='categoryAndPrice'>
						<select
							value={inputValue.category}
							onChange={e =>
								setInputValue({ ...inputValue, category: e.target.value })
							}
							className='category'
						>
							<option value=''>Выберите категорию</option>
							<option value='Фантастика'>Фантастика</option>
							<option value='Детектив'>Детектив</option>
							<option value='Комедии'>Комедии</option>
							<option value='adventures'>Приключение</option>
							<option value='science'>Наука</option>
						</select>
						<input
							value={inputValue.price}
							onChange={e =>
								setInputValue({ ...inputValue, price: e.target.value })
							}
							className='price'
							type='number'
							placeholder='price'
						/>
					</div>
					<textarea
						value={inputValue.discription}
						onChange={e =>
							setInputValue({ ...inputValue, discription: e.target.value })
						}
						className='textArea'
						placeholder='Product Discription'
					></textarea>
					<button onClick={handleSave}>save</button>
				</div>
			</div>
		</div>
	)
}

export default ProductList
