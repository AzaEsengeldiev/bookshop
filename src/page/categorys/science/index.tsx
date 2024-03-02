import { SlBasketLoaded } from 'react-icons/sl'
import { useAppDispatch, useAppSelector } from '../../../components/hooks'
import { DeleteProduct, fetchProducts } from '../../../components/asyncs'
import { useNavigate } from 'react-router-dom'
import { IAsync } from '../../../types'
import { action, basket, removeScienceProduct } from '../../../redux/Reducers'
import { MdDelete } from 'react-icons/md'

const Science = () => {
	const science = useAppSelector(s => s.science)
	const nav = useNavigate()
	const list = useAppSelector(state => state.list)
	const dispatch = useAppDispatch()
	const bask = useAppSelector(s => s.basket)

	const handleDelete = async (id: string) => {
		try {
			await DeleteProduct(id)
			await dispatch(fetchProducts())
			dispatch(removeScienceProduct(id))
		} catch (error) {
			console.error('Ошибка при удалении продукта:', error)
		}
	}
	// console.log(Basket())
	console.log(list)
	function Basket(id: string) {
		const res: IAsync | undefined = list.find(el => el.id === id)
		if (res) {
			const trueOrFale = bask.some(el => el.id === res.id)
			if (!trueOrFale) {
				dispatch(basket(res))
			} else {
				console.log('ужк есть')
			}
		} else {
			console.log('errorBasket')
		}
	}

	return (
		<div>
			<div className='readProduct'>
				{science ? (
					science.map(el => (
						<div key={el.id} className='readProductBlock'>
							<img
								onClick={() => nav(`/ProductDetails/${el.id}`)}
								src={el.image}
								alt='ProductImg'
							/>
							<div className='Price_basket'>
								<h3>{el.price}сом</h3>
								<button onClick={() => Basket(el.id)}>
									<SlBasketLoaded />
								</button>
							</div>
							<div className='name_category_button'>
								<div className='name_category'>
									<h1>{el.name}/</h1>
									<h1>{el.category}</h1>
								</div>
								<button onClick={() => handleDelete(el.id)}>
									<MdDelete />
								</button>
							</div>
						</div>
					))
				) : (
					<p>Список книг пуст</p>
				)}
			</div>
		</div>
	)
}

export default Science
