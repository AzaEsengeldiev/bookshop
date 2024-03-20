import React, { useState } from 'react'
import './Cart.scss'
import { useAppDispatch, useAppSelector } from '../../../components/hooks'
import {
	basketMinucCount,
	basketPlucCount,
	deleteBasket
} from '../../../redux/Reducers'

const Cart: React.FC = () => {
	const basket = useAppSelector(s => s.basket)
	const dispatch = useAppDispatch()

	const handleDelete = (id: string) => {
		const res = basket.find(el => el.id === id)
		if (res) {
			dispatch(deleteBasket(res.id))
		} else {
			console.log('deleteErr')
		}
	}
	// console.log()

	return (
		<div className='cart'>
			{basket.length > 0 && basket ? (
				basket.map(el => (
					<div className='cart-item' key={el.id}>
						<div className='item-details'>
							<h3>{el.name}</h3>
							<p>{el.discription}</p>
						</div>
						<div className='item-price'>
							<p>{el.price}coм</p>
						</div>
						<div className='item-actions'>
							<button onClick={() => dispatch(basketMinucCount(el.id))}>
								-
							</button>

							<span>{el.quantity}</span>
							<button onClick={() => dispatch(basketPlucCount(el.id))}>
								+
							</button>
							<button onClick={() => handleDelete(el.id)}>Удалить</button>
						</div>
					</div>
				))
			) : (
				<h1
					style={{
						fontSize: '15px',
						fontWeight: '300'
					}}
				>
					корзина пуст
				</h1>
			)}
		</div>
	)
}

export default Cart
