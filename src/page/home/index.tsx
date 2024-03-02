import React, { useEffect } from 'react'
import { useAppSelector } from '../../components/hooks'
import ReadProduct from './readProduct'
import './home.scss'

const Home = () => {
	// console.log(list);
	// useEffect(() => )

	return (
		<div className='home'>
			<ReadProduct />
		</div>
	)
}

export default Home
