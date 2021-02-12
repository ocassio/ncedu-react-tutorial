import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/app/app.component'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'

const root = document.getElementById('root')

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<Root />, root)
