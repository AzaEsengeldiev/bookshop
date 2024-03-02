import './header.scss'
import { IoSearch } from 'react-icons/io5'
import { SlBasketLoaded } from 'react-icons/sl'
import { RiAdminFill } from 'react-icons/ri'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IAsync } from '../../types'
import { useAppDispatch, useAppSelector } from '../hooks'
import { SearchValue } from '../../redux/Reducers'
import { IoHomeSharp } from 'react-icons/io5'
import { keyAdmin } from '../../API'
import { IoIosCloseCircle } from 'react-icons/io'

const Header = () => {
	const [searchInputValue, setSearchInputValue] = useState<string>('')
	const SearchState = useAppSelector(state => state.list)
	const dispatch = useAppDispatch()
	const navigator = useNavigate()
	const [authModal, setAuthModal] = useState<boolean>(false)
	const [authInputValue, setAuthInputValue] = useState<string>('')
	const [invalidKey, setInvalidKey] = useState<boolean>(false)
	const [attempt, setAttempt] = useState<number>(3)
	const [loading, setLoading] = useState<boolean>(false)
	const [countDown, setCountDown] = useState<number>(15)
	const [time, setTime] = useState<number>(15000)
	const location = useLocation()

	const handleSearch = () => {
		if (SearchState) {
			const searchResult: IAsync | undefined = SearchState.find(
				el => el.name.toLowerCase() === searchInputValue.toLowerCase()
			)
			if (searchResult) {
				dispatch(SearchValue(searchResult))
				navigator('/SearchDetails')
			} else {
				alert('Книга не найдена')
			}
		} else {
			console.log('Ошибка: SearchState не определен')
		}
	}

	const handleAdminButtonClick = () => {
		setAuthModal(true)
	}

	const handleAuthSubmit = () => {
		if (authInputValue === keyAdmin) {
			navigator('/admin')
			setAuthModal(false)
			setAuthInputValue('')
		} else {
			setAuthInputValue('')
			setInvalidKey(true)
			setAttempt(attempt - 1)

			if (attempt === 1) {
				setLoading(true)
				setInvalidKey(false)
				if (time === 15000) {
					setCountDown(15)
					const countdownInterval = setInterval(() => {
						setCountDown(prevCount => prevCount - 1)
					}, 1000)
					setTimeout(() => {
						clearInterval(countdownInterval)
						setLoading(false)
						setAuthModal(true)
						setAttempt(3)
						setTime(60000)
					}, time)
				}
				// if()

				if (time === 60000) {
					setCountDown(60)
					const countdownInterval = setInterval(() => {
						setCountDown(prevCount => prevCount - 1)
					}, 1000)
					setTimeout(() => {
						clearInterval(countdownInterval)
						setLoading(false)
						setAuthModal(true)
						setAttempt(3)
						setTime(800000)
						setCountDown(24)
					}, time)
				}
				if (countDown === 24) {
					const countdownInterval = setInterval(() => {
						setCountDown(prevCount => prevCount - 1)
					}, 60000)
					setTimeout(() => {
						clearInterval(countdownInterval)
						setLoading(false)
						setAuthModal(true)
						setAttempt(3)
					}, time)
				}
			}
		}
	}
	// useEffect(() => {}, [countDown])

	const handleAuthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAuthInputValue(e.target.value)
		setInvalidKey(false)
	}

	return (
		<header id='header'>
			<div className='container'>
				<div className='header'>
					<div className='title'>
						<h1>BOOKShop</h1>
					</div>
					<div className='bookShopActions'>
						<div className='search'>
							<input
								onChange={e => setSearchInputValue(e.target.value)}
								type='text'
								placeholder='Search..'
							/>
							<button onClick={handleSearch}>
								<IoSearch />
							</button>
						</div>
						<div className='AdminBasket'>
							<NavLink to='/'>
								<div className='admin'>
									<button>
										<IoHomeSharp />
									</button>
									<h6>Главная</h6>
								</div>
							</NavLink>
							<NavLink to='/basket'>
								<div className='basket'>
									<button>
										<SlBasketLoaded />
									</button>
									<h6>Корзина</h6>
								</div>
							</NavLink>
							<div className='admin'>
								<button
									disabled={location.pathname === '/admin'}
									onClick={handleAdminButtonClick}
								>
									<RiAdminFill />
								</button>
								<h6>Админ</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			{authModal && (
				<div className='modal-overlay'>
					<div className='modal'>
						<button onClick={() => setAuthModal(false)} className='exitBtn'>
							<IoIosCloseCircle />
						</button>
						<div className='modal-content'>
							<input
								disabled={attempt === 0}
								type='text'
								value={authInputValue}
								onChange={handleAuthInputChange}
								placeholder='Admin-key'
							/>
							<button disabled={attempt === 0} onClick={handleAuthSubmit}>
								Войти
							</button>
							{invalidKey && (
								<p>
									Неправильный ключ админа. У вас осталось {attempt} попыток.
								</p>
							)}
							{loading && (
								<p>
									Повторите еще раз через:
									{countDown > 36000
										? `${Math.floor(countDown / 3600)} часа`
										: `${countDown} секунд`}
								</p>
							)}
						</div>
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
