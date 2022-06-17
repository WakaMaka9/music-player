import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import trackreduser from './store/trackreduser'

export const store = configureStore({
    reducer: {
        track: trackreduser
    }
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types