import { useSelector } from "react-redux"
import { Track } from "renderer/interfaces"
import { useAppDispatch } from "renderer/store"
import { setPlayedTrack } from "renderer/store/PlayerReduser"
import styled from "styled-components"

export const Playlist = () => {

    const dispatch = useAppDispatch()
    const track = useSelector((state: any) => {
        return state.track as Track[]
     })

     const playTrack = (url: string,name:string) => {
        dispatch(setPlayedTrack({
            url,
            name
        }))
     }
    return (
        <div>
               {track.map((element) => {
                    return (
                        <Item onClick={() => playTrack(element.url, element.name)} key={element.id}>
                        {element.id}
                        {element.name}
                        {element.artist}
                        </Item>
                    )})}
        </div>
    )
}

const Item = styled.div`
    display: flex;
    min-width: 640px;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`