
import './basket.scss'
import Checkout from './chekout'
import Cart from './card'
import TotalPrice from './totalPrice'

const Basket = () => {
	return (
		<div className='basket'>
			<Checkout />
			<div className='basket-cart'>
				<Cart />
				<TotalPrice />
			</div>
		</div>
	)
}

export default Basket
