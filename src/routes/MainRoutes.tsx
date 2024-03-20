import { Route, Routes } from 'react-router-dom'
import { IRoutes } from '../types'
import Home from '../page/home'
import Admin from '../page/admin'
import Basket from '../page/basket'
import ProductDetails from '../components/ProductDetails'
import SearchData from '../components/SearchData'
import Fantasy from '../page/categorys/fantasy'
import Science from '../page/categorys/science'
import Adventures from '../page/categorys/adventures'
import Detectiv from '../page/categorys/detectiv'
import { useAppSelector } from '../components/hooks'
import FalseKeyAdmin from '../components/falseKeyAdmin'

export default function MainRoutes() {
	const { countAuth } = useAppSelector(s => s)
	const PUBLIC: IRoutes[] = [
		{ link: '/', element: <Home />, id: 1 },
		{
			link: '/admin',
			element: countAuth > 1 ? <Admin /> : <FalseKeyAdmin />,
			id: 2
		},
		{ link: '/basket', element: <Basket />, id: 3 },
		{ link: '/ProductDetails/:id', element: <ProductDetails />, id: 4 },
		{ link: '/detectiv', element: <Detectiv />, id: 5 },
		{ link: '/adventures', element: <Adventures />, id: 6 },
		{ link: '/science', element: <Science />, id: 7 },
		{ link: '/fantasy', element: <Fantasy />, id: 8 },
		{ link: '/SearchDetails', element: <SearchData />, id: 9 }
	]

	return (
		<Routes>
			{PUBLIC.map((el: any) => (
				<Route path={el.link} element={el.element} key={el.id} />
			))}
		</Routes>
	)
}
