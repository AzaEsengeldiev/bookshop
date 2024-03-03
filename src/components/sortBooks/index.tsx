import React, { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { sortAlphabet, sortFromBig, sortFromSmall } from '../../redux/Reducers'

const Sort = () => {
	const [sortValue, setSortValue] = useState<string>('')
	const dispatch = useAppDispatch()

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortValue(e.target.value)
		switch (e.target.value) {
			case 'alphabet':
				return dispatch(sortAlphabet())
			case 'from-big':
				return dispatch(sortFromBig())
      case 'from-small':
        return dispatch(sortFromSmall())
			default:
				break
		}
	}

	return (
		<div className='Sort'>
			<select value={sortValue} onChange={handleSortChange}>
				<option value=''>Сортировка</option>
				<option value='from-big'>По цене(от высокой к низкой)</option>
				<option value='from-small'>По цене(от низкой к высокой)</option>
				<option value='alphabet'>По алфавиту</option>
			</select>
		</div>
	)
}

export default Sort
