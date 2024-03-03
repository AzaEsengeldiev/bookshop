import React, { useEffect } from 'react'
import { useAppSelector } from '../../components/hooks'
import ReadProduct from './readProduct'
import './home.scss'
import Sort from '../../components/sortBooks'

const Home = () => {
	// console.log(list);
	// useEffect(() => )

	return (
		<div className='home'>
			<div className='sort'>
						<h1>Возможно, Вам понравится</h1>
						<Sort />
					</div>
			<ReadProduct />
		</div>
	)
}

export default Home
