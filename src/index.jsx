import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/app/app.component'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<Root />, root)
