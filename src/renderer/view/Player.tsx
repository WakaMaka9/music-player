import { ActionBar } from "./ActionBar"
import { useSelector } from 'react-redux'
import { Track } from "renderer/interfaces"


export const Player = () => {
    const track = useSelector((state: any) => {
       return state.track as Track[]
    })
    const handleButton = () => {
        window.electron.ipcRenderer.showHz()
        console.log('govno')
    }


    return (
        <div>
            <button onClick= {handleButton}>Добавить</button>
            <ActionBar />
            {track.map((element) => {
                    return (
                        <div key={element.id}>
                        {element.id}
                        {element.name}
                        {element.artist}
                        </div>
                    )})}
                     <audio controls
                     src="file:///Users/nikitaslotin/Desktop/nikPlayer/assets/file1.mp3"/>
        </div>
    )
}