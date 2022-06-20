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
        }
    }
})
export const { setTrack, addTrack } = trackReducer.actions
export default trackReducer.reducer