import React from 'react'
import { Provider } from 'mobx-react'

import stores from './store/index'

import './app.scss'

export default function App({children}) {
  return (
    <Provider {...stores}>
      {children}
    </Provider>
  )
}
