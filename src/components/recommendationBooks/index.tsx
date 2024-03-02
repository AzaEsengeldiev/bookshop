import { useAppSelector } from '../hooks'
import { SlBasketLoaded } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import './recBook.scss'
import { IAsync } from '../../types'

const RecomBooks = () => {
	const list = useAppSelector(s => s.list)

	const nav = useNavigate()

	const getRandomElements = (array: IAsync[], count: number) => {
		const arrayCopy = [...array]
		const shuffled = arrayCopy.sort(() => 0.5 - Math.random())
		return shuffled.slice(0, count)
	}

	const randomElements = getRandomElements(list, 4)
	console.log(randomElements)

	return (
		<div className='Rec-readProduct'>
			{randomElements &&
				randomElements.map(el => (
					<div key={el.id} className='Rec-readProductBlock'>
						<img
							onClick={() => nav(`/ProductDetails/${el.id}`)}
							src={el.image}
							alt='ProductImg'
						/>
						<div className='Rec-Price_basket'>
							<h3>{el.price}сом</h3>
							<button>
								<SlBasketLoaded />
							</button>
						</div>
						<div className='Rec-name_category_btns'>
							<div className='Rec-name-category'>
								<h1>{el.name}/</h1>
								<h1>{el.category}</h1>
							</div>
						</div>
					</div>
				))}
		</div>
	)
}

export default RecomBooks
