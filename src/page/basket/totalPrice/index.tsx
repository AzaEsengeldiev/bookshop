import React from 'react'
import './totalPrice.scss'
import { useAppSelector } from '../../../components/hooks'
import { IAsync, IBasketItem } from '../../../types'
// import { IBasketItem } from '../../../types'

const TotalPrice = () => {
	const { basket } = useAppSelector(s => s)

	const sum: number = basket.reduce((acc: number, el: IBasketItem) => {
		return acc + Number(el.price)
	}, 0)

	return (
		<div className='TotalPrice'>
			<h1>Общая сумма</h1>
			<h1>{sum}сом</h1>
		</div>
	)
}

export default TotalPrice
