import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../components/hooks'
import { RecomBooks, basket } from '../Reducers'
import { IAsync } from '../../types'

const list = useAppSelector(state => state.list)
const dispatch = useAppDispatch()
const [recomBooks, setRecomBooks] = useState<IAsync[]>([])

useEffect(() => {
	const firstFourBooks = list.slice(0, 4)
	setRecomBooks(firstFourBooks)

}, [list])


useEffect(() => {
	console.log(recomBooks)
	dispatch(RecomBooks(recomBooks))
}, [dispatch])
