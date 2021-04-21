import './index.css'
import 'antd/dist/antd.css'

import Amplify from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import config from './aws-exports'
import reportWebVitals from './reportWebVitals'

Amplify.configure(config)

ReactDOM.render(<Router />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
