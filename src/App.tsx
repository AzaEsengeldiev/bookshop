import { useEffect } from 'react'
import './App.scss'
import Header from './components/Header'
import { useAppDispatch } from './components/hooks'
import { DeleteProduct, fetchProducts } from './components/asyncs'
import MainRoutes from './routes/MainRoutes'
import NavCategorys from './page/nav_catergorys'
import { useLocation } from 'react-router-dom'
import Swipers from './components/swiper'
import MySwiper from './components/swiper'

function App() {
	const dispatch = useAppDispatch()
	const locaction = useLocation()

	useEffect(() => {
		dispatch(fetchProducts())
		// DeleteProduct()
	}, [dispatch])
	return (
		<div className='App'>
			<Header />
			{locaction.pathname === '/' ? <MySwiper /> : ''}
			{locaction.pathname === '/' ? <NavCategorys /> : ''}
		</div>
	)
}

export default App
