import { ActionBar } from "./ActionBar"
import { useSelector } from 'react-redux'
import { Track } from "renderer/interfaces"


export const Player = () => {
    const track = useSelector((state: any) => {
        console.log(state)
       return state.track as Track[]
    })

    return (
        <div>
            <ActionBar />
            {track.map((element) => {
                    return (
                        <div key={element.id}>
                        {element.id}
                        {element.name}
                        {element.artist}
                        </div>
                    )})}
        </div>
    )
}