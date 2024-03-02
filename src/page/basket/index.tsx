import React from 'react'
import { useAppDispatch, useAppSelector } from '../../components/hooks'
import { useNavigate } from 'react-router-dom'
import './basket.scss'
import { MdDelete } from 'react-icons/md'
import { deleteBasket } from '../../redux/Reducers'

const Basket = () => {
	const basket = useAppSelector(s => s.basket)
	const nav = useNavigate()
	const dispatch = useAppDispatch()
	console.log(basket)
  const list = useAppSelector(s => s.list)

	const handleDelete = (id: string) => {
		const res = basket.find(el => el.id === id)
		if (res) {
			dispatch(deleteBasket(res.id))
			console.log(res.id)
		} else {
			console.log('deleteErr')
		}
	}

	return (
		<div className='readProduct'>
			{basket.length > 0 && list.length > 0  ? (
				basket.map(el => (
					<div key={el.id} className='readProductBlock'>
						<img
							onClick={() => nav(`/ProductDetails/${el.id}`)}
							src={el.image}
							alt='ProductImg'
						/>
						<div className='Price_basket'>
							<h3>{el.price}</h3>
						</div>
						<div className='name_category_btns'>
							<div className='name_category'>
								<h1>{el.name}/</h1>
								<h1>{el.category}</h1>
							</div>
							<div>
								<button onClick={() => handleDelete(el.id)}><MdDelete/></button>
							</div>
						</div>
					</div>
				))
			) : (
				<p>Корзина пуст</p>
			)}
		</div>
	)
}

export default Basket
