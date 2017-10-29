import React from 'react'
import ReactDOM from 'react-dom'
import './semantic/dist/semantic.min.css'
import Routes from './routes'

import moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr')

ReactDOM.render(
   <Routes/>,
   document.getElementById('root') 
)