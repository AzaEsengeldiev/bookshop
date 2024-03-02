import { Link } from 'react-router-dom'
import { useAppSelector } from '../../components/hooks'
import './nav_categorys.scss'

const NavCategorys = () => {
	// const fantasy = useAppSelector(S => S.fantasy)
	// console.log(fantasy)

	return (
		<div className='Categorys'>
			<div className='title'>
				<h1>Категории</h1>
			</div>
			<div className='category_nav'>
				<Link to={'/detectiv'}>
					<div className='action'>
						<h1>Детектив</h1>
					</div>
				</Link>
				<Link to={'/comedy'}>
					<div className='comedy'>
						<h1>Комедии</h1>
					</div>
				</Link>
				<Link to={'/science'}>
					<div className='science'>
						<h1>Наука</h1>N
					</div>
				</Link>
				<Link to={'/adventures'}>
					<div className='adventures'>
						<h1>приключения</h1>N
					</div>
				</Link>
				<Link to={'/fantasy'}>
					<div className='fantasy'>
						<h1>Фантастика</h1>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default NavCategorys
