import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/footer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
				<MainRoutes />
				{/* <Footer/> */}
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
