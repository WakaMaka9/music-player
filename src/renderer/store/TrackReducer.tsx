import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from 'renderer/interfaces';


const initialState: Track[] = []
export const trackReducer = createSlice({
    name: 'track',
    initialState: initialState,
    reducers: {
        setTrack: (state, action: PayloadAction<Track[]>) => {
            return action.payload
        },
        addTrack: (s, action: PayloadAction<Track[]>) => {
            return [...s,...action.payload]
        },
        shuffleTracks: (s) => {
            return s.sort(() => {
                const kek = Math.random()*s.length
                return kek > s.length/2 ? -1 : 1
            })
        }
    }
})
export const { setTrack, addTrack,shuffleTracks } = trackReducer.actions
export default trackReducer.reducer