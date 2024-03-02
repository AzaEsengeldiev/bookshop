import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import { IAsync } from '../../types'
import './ProductDetails.scss'
import { FaDollarSign } from 'react-icons/fa6'
import RecomBooks from '../recommendationBooks'

const ProductDetails = () => {
	const { id } = useParams()
	const products = useAppSelector(state => state.list)
	const res: IAsync | undefined = products.find(el => el.id === id)

	return (
		<div className='mainDetails'>
			{res && (
				<div className='ProductDetails'>
					<img src={res.image} alt='' />
					<div className='detailsText'>
						<div>
							<h1>{res.name}</h1>
							<h3>
								{res.price} <FaDollarSign />
							</h3>
						</div>
						<h2>Жанр:{res.category}</h2>
						<div className='discription'>
							<h4>Описания</h4>
							<p>{res.discription}</p>
						</div>
						<div className='detailsBtns'>
							<button>Добавить корзину</button>
							<button>Купить сейчас</button>
						</div>
					</div>
				</div>
			)}
			<div className='rec'>
				<h1>Возможно, Вам понравится</h1>
				<RecomBooks />
			</div>
		</div>
	)
}

export default ProductDetails
