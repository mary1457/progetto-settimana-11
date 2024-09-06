import { configureStore } from '@reduxjs/toolkit'
import musicReducer from '../reducers'

const store = configureStore({
  reducer: musicReducer,
})

export default store
