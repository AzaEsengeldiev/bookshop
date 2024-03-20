import React, { useState } from 'react'
import './Checkout.scss'

const Checkout: React.FC = () => {
	const [deliveryMethod, setDeliveryMethod] = useState<string>('')
	const [deliveryAddress, setDeliveryAddress] = useState<string>('')
	const [fullName, setFullName] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [paymentMethod, setPaymentMethod] = useState<string>('')

	const handleDeliveryMethodChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setDeliveryMethod(e.target.value)
	}

	const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDeliveryAddress(e.target.value)
	}

	const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFullName(e.target.value)
	}

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value)
	}

	const handlePaymentMethodChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setPaymentMethod(e.target.value)
	}

	const handlePaymentSubmit = () => {
	}

	return (
		<div className='checkout'>
			<h2>Оформление заказа</h2>
			<div className='contact-info'>
				<div className='form-group'>
					<label htmlFor='fullName'>ФИО</label>
					<input
						type='text'
						id='fullName'
						value={fullName}
						onChange={handleFullNameChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='phone'>Телефон</label>
					<input
						type='text'
						id='phone'
						value={phone}
						onChange={handlePhoneChange}
					/>
				</div>
			</div>
			<div className='delivery-options'>
				<div className='form-group'>
					<label htmlFor='deliveryMethod'>Выберите способ доставки</label>
					<div>
						<input
							type='radio'
							id='pickup'
							value='pickup'
							checked={deliveryMethod === 'pickup'}
							onChange={handleDeliveryMethodChange}
						/>
						<label htmlFor='pickup'>Самовывоз</label>
					</div>
					<div>
						<input
							type='radio'
							id='courier'
							value='courier'
							checked={deliveryMethod === 'courier'}
							onChange={handleDeliveryMethodChange}
						/>
						<label htmlFor='courier'>Доставка курьером</label>
					</div>
				</div>
				{deliveryMethod === 'courier' && (
					<div className='form-group'>
						<label htmlFor='deliveryAddress'>Адрес доставки</label>
						<input
							type='text'
							id='deliveryAddress'
							value={deliveryAddress}
							onChange={handleAddressChange}
							placeholder='Область, город, улица, дом, квартира'
						/>
					</div>
				)}
			</div>
			<div className='payment-options'>
				<div className='form-group'>
					<label>Оплата</label>
					<div>
						<input
							type='radio'
							id='cashOnDelivery'
							value='cashOnDelivery'
							checked={paymentMethod === 'cashOnDelivery'}
							onChange={handlePaymentMethodChange}
						/>
						<label htmlFor='cashOnDelivery'>
							Оплачу наличными при получении заказа
						</label>
					</div>
					<div>
						<input
							type='radio'
							id='creditCard'
							value='creditCard'
							checked={paymentMethod === 'creditCard'}
							onChange={handlePaymentMethodChange}
						/>
						<label htmlFor='creditCard'>
							Оплата с банковской картой через PayBox
						</label>
					</div>
				</div>
			</div>
			<button onClick={handlePaymentSubmit}>Оплатить</button>
		</div>
	)
}

export default Checkout
