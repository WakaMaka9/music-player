import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayedTrack} from 'renderer/interfaces';



const initialState  = null
export const PlayerReduser = createSlice({
    name: 'playedTrack',
    initialState: initialState as  PlayedTrack | null,
    reducers: {
        setPlayedTrack: (state, action: PayloadAction<PlayedTrack>) => {
            return action.payload
        },
    }
})
export const { setPlayedTrack } = PlayerReduser.actions
export default PlayerReduser.reducer