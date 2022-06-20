import React from "react"
import { useDispatch } from "react-redux"
import { Track } from "./interfaces"
import { Router } from "./Router"
import { addTrack, setTrack } from "./store/trackreduser"

export const MainWrapper = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        window.electron.ipcRenderer.handleGetMusics((e:Track[]) => {
            dispatch(setTrack(e))
        })
    },[])
    return (
       <Router />
    )
}