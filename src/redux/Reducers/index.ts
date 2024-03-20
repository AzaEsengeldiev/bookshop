import { IAsync, IBasketItem } from './../../types/index'
// import { fethProducts } from '../../components/asyncs'
import { fetchProducts } from '../../components/asyncs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BookState = {
	list: IAsync[]
	searchValue: IAsync | null
	loading: boolean
	error: string | null
	recomBooks: IAsync[]
	basket: IBasketItem[]
	action: IAsync[]
	fantasy: IAsync[]
	comedy: IAsync[]
	science: IAsync[]
	adventures: IAsync[]
	authModals: boolean
	countAuth: number
  plusPrice:number
  minusPrice:number
}

const initialState: BookState = {
	list: [],
	loading: false,
	error: null,
	searchValue: null,
	recomBooks: [],
	basket: [],
	action: [],
	fantasy: [],
	comedy: [],
	science: [],
	adventures: [],
	authModals: false,
	countAuth: 1,
  plusPrice:0,
  minusPrice:0
}

export const toolkitSlice = createSlice({
	name: 'toolkitSlice',
	initialState,
	reducers: {
		SearchValue(state, action: PayloadAction<IAsync>) {
			state.searchValue = action.payload
		},
		basketPlucCount(state, action: PayloadAction<number>) {
			const itemIndex = state.basket.findIndex(
				item => item.id === action.payload
			)
			if (itemIndex !== -1) {
				state.basket[itemIndex].quantity += 1
				        state.basket[itemIndex].price = (
									2 * parseFloat(state.basket[itemIndex].price)
								).toString()

			}
		},
		basketMinucCount(state, action: PayloadAction<number>) {
			const itemIndex = state.basket.findIndex(
				item => item.id === action.payload
			)
			if (itemIndex !== -1 && state.basket[itemIndex].quantity > 1) {
				state.basket[itemIndex].quantity -= 1
        state.basket[itemIndex].price = (
					parseFloat(state.basket[itemIndex].price) / 2
				).toString()


				// Number(state.basket[itemIndex].price) -= Number(
				// 	state.basket[itemIndex].price
				// )
				// state.basket[itemIndex].price += state.basket[itemIndex].price
			}
		},
		RecomBooks(state, action: PayloadAction<IAsync[]>) {
			state.recomBooks = action.payload
		},
		basket(state, action: PayloadAction<IAsync>) {
			const newItem: IBasketItem = {
				...action.payload,
				quantity: 1
			}
			state.basket.push(newItem)
		},
		fantasy(state, action: PayloadAction<IAsync>) {
			state.fantasy.push(action.payload)
		},
		action(state, action: PayloadAction<IAsync>) {
			state.action.push(action.payload)
		},
		comedy(state, action: PayloadAction<IAsync>) {
			state.comedy.push(action.payload)
		},
		science(state, action: PayloadAction<IAsync>) {
			state.science.push(action.payload)
		},
		adventures(state, action: PayloadAction<IAsync>) {
			state.adventures.push(action.payload)
		},
		deleteBasket(state, action: PayloadAction<string>) {
			state.basket = state.basket.filter(el => el.id !== action.payload)
		},
		removeFantasyProduct(state, action: PayloadAction<string>) {
			state.fantasy = state.fantasy.filter(el => el.id !== action.payload)
		},
		removeActionProduct(state, action: PayloadAction<string>) {
			state.fantasy = state.fantasy.filter(el => el.id !== action.payload)
		},
		removeScienceProduct(state, action: PayloadAction<string>) {
			state.science = state.science.filter(el => el.id !== action.payload)
		},

		removeAdventuresProduct(state, action: PayloadAction<string>) {
			state.adventures = state.adventures.filter(el => el.id !== action.payload)
		},
		sortAlphabet(state) {
			state.list.sort((a, b) => {
				return a.name.localeCompare(b.name)
			})
		},
		sortFromBig(state) {
			state.list.sort((a, b) => {
				return Number(b.price) - Number(a.price)
			})
		},
		sortFromSmall(state) {
			state.list.sort((a, b) => Number(a.price) - Number(b.price))
		},
		falseAuthModal(state) {
			state.authModals = false
		},
		trueAuthModal(state) {
			state.authModals = true
		},
		countAuthModal(state) {
			state.countAuth = state.countAuth + 1
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.list = action.payload
				state.loading = false
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false
				state.error =
					action.payload || 'Произошла ошибка при загрузке продуктов'
			})
	}
})

export default toolkitSlice.reducer
export const {
	SearchValue,
	deleteBasket,
	RecomBooks,
	basket,
	comedy,
	action,
	fantasy,
	adventures,
	science,
	removeFantasyProduct,
	removeActionProduct,
	removeAdventuresProduct,
	removeScienceProduct,
	sortAlphabet,
	sortFromBig,
	sortFromSmall,
	falseAuthModal,
	trueAuthModal,
	countAuthModal,
	basketMinucCount,
	basketPlucCount
} = toolkitSlice.actions
