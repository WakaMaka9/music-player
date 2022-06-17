import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from 'renderer/interfaces';


const initialState: Track[] = [
{
    id:1,
    name:"zalupa",
    artist: '3'
}

]
export const trackReducer = createSlice({
    name: 'track',
    initialState: initialState,
    reducers: {
        setTrack: (state, action: PayloadAction<Track[]>) => {
            return action.payload
        }
    }
})
export const {  } = trackReducer.actions
export default trackReducer.reducer