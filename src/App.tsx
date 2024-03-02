import { useEffect } from 'react'
import './App.scss'
import Header from './components/Header'
import { useAppDispatch } from './components/hooks'
import { DeleteProduct, fetchProducts } from './components/asyncs'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/footer'
import NavCategorys from './page/nav_catergorys'
import { useLocation } from 'react-router-dom'

function App() {
	const dispatch = useAppDispatch()
	const locaction = useLocation()
	console.log(locaction)

	useEffect(() => {
		dispatch(fetchProducts())
		// DeleteProduct()
	}, [dispatch])
	return (
		<div className='App'>
			<Header />
		{
      locaction.pathname === '/' ? <NavCategorys/> :''
    }
			{/* <Footer /> */}
		</div>
	)
}

export default App
