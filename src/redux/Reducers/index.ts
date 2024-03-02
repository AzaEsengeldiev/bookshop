import { IAsync } from './../../types/index'
// import { fethProducts } from '../../components/asyncs'
import { fetchProducts } from '../../components/asyncs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BookState = {
	list: IAsync[]
	searchValue: IAsync | null
	loading: boolean
	error: string | null
	recomBooks: IAsync[]
	basket: IAsync[]
	action: IAsync[]
	fantasy: IAsync[]
	comedy: IAsync[]
	science:IAsync[]
	adventures: IAsync[]
}

const initialState: BookState = {
	list: [],
	loading: false,
	error: null,
	searchValue: null,
	recomBooks: [],
	basket: [],
  action:[] ,
  fantasy:[],
  comedy:[],
  science:[],
  adventures:[]

}

export const toolkitSlice = createSlice({
	name: 'toolkitSlice',
	initialState,
	reducers: {
		SearchValue(state, action: PayloadAction<IAsync>) {
			state.searchValue = action.payload
		},
		RecomBooks(state, action: PayloadAction<IAsync[]>) {
			state.recomBooks = action.payload
		},
		basket(state, action: PayloadAction<IAsync>) {
			state.basket.push(action.payload)
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
		removeComedyProduct(state, action: PayloadAction<string>) {
			state.comedy = state.comedy.filter(el => el.id !== action.payload)
		},
		removeAdventuresProduct(state, action: PayloadAction<string>) {
			state.adventures = state.adventures.filter(el => el.id !== action.payload)
		},

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
  removeComedyProduct,
  removeScienceProduct
} = toolkitSlice.actions
