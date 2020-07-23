import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore';
const store = configureStore()
import Router from './src/router'

function App() {
  return (
    <Provider store={store}>
      <Router />  
    </Provider>
  )
}

export default App