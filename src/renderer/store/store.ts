import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { PlayedTrack, Track } from 'renderer/interfaces'
import PlayerReducer from './PlayerReducer'
import TrackReducer from './TrackReducer'


export const store = configureStore({
    reducer: {
        tracks: TrackReducer,
        playedTrack: PlayerReducer
    }
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
export type StoreRoot = {
    tracks: Track[],
    playedTrack: PlayedTrack | null
}
export default store