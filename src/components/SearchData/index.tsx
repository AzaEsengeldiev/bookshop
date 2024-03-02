import { FaDollarSign } from 'react-icons/fa6'
import { useAppDispatch, useAppSelector } from '../hooks'
import './search.scss'
import { basket } from '../../redux/Reducers'

const SearchData = () => {
	const SearchValue = useAppSelector(s => s.searchValue)
  const dispatch = useAppDispatch()
  function addSearchValueBacket() {
  if(SearchValue) {
      dispatch(basket(SearchValue))
  }else{
    console.log('no data')
  }
  }
	console.log(SearchValue)

	return (
		<div className='search-mainDetails'>
			{SearchValue && (
				<div className='search-ProductDetails'>
					<img src={SearchValue.image} alt='' />
					<div className='search-detailsText'>
						<div>
							<h1>{SearchValue.name}</h1>
							<h3>
								{SearchValue.price} <FaDollarSign />
							</h3>
						</div>
						<h2>Жанр:{SearchValue.category}</h2>
						<div className='search-discription'>
							<h4>Описания</h4>
							<p>{SearchValue.discription}</p>
						</div>
						<div className='search-detailsBtns'>
							<button onClick={addSearchValueBacket}>Добавить корзину</button>
							<button>Купить сейчас</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default SearchData
