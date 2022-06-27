import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { PlayedTrack} from 'renderer/interfaces';
import store from './store'


const initialState  = null
export const PlayerReducer = createSlice({
    name: 'playedTrack',
    initialState: initialState as  PlayedTrack | null,
    reducers: {
        setPlayedTrack: (state, action: PayloadAction<PlayedTrack>) => {
            return action.payload
        },
    }
})

export const { setPlayedTrack } = PlayerReducer.actions
export default PlayerReducer.reducer

export function nextTrack(): ThunkAction<any,any,any,any> {
    return async function (dispatch, getState) {
        const currentTrack = getState().playedTrack
        const tracks = getState().tracks
        if (currentTrack === null) {
            return null
        }
        for (let i = 0; i < tracks.length-1; i++) {
            if (tracks[i].id === currentTrack.id) {
                dispatch(setPlayedTrack(tracks[i+1]))
            }
        }
    }
}

export function backTrack(): ThunkAction<any,any,any,any> {
    return async function (dispatch, getState) {
        const currentTrack = getState().playedTrack
        const tracks = getState().tracks
        if (currentTrack === null) {
            return null
        }
        for (let i = tracks.length-1; i > 0; i--) {
            if (tracks[i].id === currentTrack.id) {
                dispatch(setPlayedTrack(tracks[i-1]))
            }
        }
    }
}