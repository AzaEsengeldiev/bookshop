import { useAppDispatch, useAppSelector } from './../hooks/index'
import { IAsync } from './../../types/index'
import { ProductAPI } from '../../API'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { basket } from '../../redux/Reducers'

export async function OnProduct(newProduct: IAsync) {
	try {
		const response = await axios.post(ProductAPI, newProduct)
		return response.status === 200 || response.status === 204
		// await dispatch(fetchProducts())
	} catch (error) {
		console.error('Ошибка при отправке продукта:', error)
		return false
	}
}

export async function DeleteProduct(id: string) {
	try {
		const response = await axios.delete(`${ProductAPI}/${id}`)
		console.log(`Продукт с id ${id} успешно удален`)
		return response.status === 200 || response.status === 204
	} catch (error) {
		console.error(`Ошибка при удалении продукта с id ${id}:`, error)
		throw error
	}
}

export const fetchProducts = createAsyncThunk<
	IAsync[],
	undefined,
	{ rejectValue: string }
>('toolkitSlice/fetchProducts', async (_, { rejectWithValue }) => {
	try {
		const response = await axios.get(ProductAPI)
		return response.data
	} catch (error) {
		console.error('Ошибка при получении продуктов:', error)
		return {
			errorMessage: 'Ошибка при получении продуктов',
			originalError: error
		}
	}
})
