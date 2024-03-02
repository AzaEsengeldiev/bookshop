import { Route, Routes } from 'react-router-dom'
import { IRoutes } from '../types'
import Home from '../page/home'
import Admin from '../page/admin'
import Basket from '../page/basket'
import ProductDetails from '../components/ProductDetails'
import SearchData from '../components/SearchData'
import Fantasy from '../page/categorys/fantasy'
import Comedy from '../page/categorys/comedy'
import Science from '../page/categorys/science'
import Adventures from '../page/categorys/adventures'
import Detectiv from '../page/categorys/detectiv'

export default function MainRoutes() {
	const PUBLIC: IRoutes[] = [
		{ link: '/', element: <Home />, id: 1 },
		{ link: '/admin', element: <Admin />, id: 2 },
		{ link: '/basket', element: <Basket />, id: 3 },
		{ link: '/ProductDetails/:id', element: <ProductDetails />, id: 4 },
		{ link: '/detectiv', element: <Detectiv />, id: 5 },
		{ link: '/adventures', element: <Adventures />, id: 6 },
		{ link: '/comedy', element: <Comedy />, id: 7 },
		{ link: '/science', element: <Science />, id: 8 },
		{ link: '/fantasy', element: <Fantasy />, id: 9 },
		{ link: '/SearchDetails', element: <SearchData />, id: 10 }
	]

	return (
		<Routes>
			{PUBLIC.map((el: any) => (
				<Route path={el.link} element={el.element} key={el.id} />
			))}
		</Routes>
	)
}
