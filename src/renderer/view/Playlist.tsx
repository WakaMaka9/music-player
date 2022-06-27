import { useSelector } from "react-redux"
import { PlayedTrack, Track } from "renderer/interfaces"
import { useAppDispatch } from "renderer/store/store"
import { setPlayedTrack } from "renderer/store/PlayerReducer"
import styled, { css } from "styled-components"

export const Playlist = () => {

    const dispatch = useAppDispatch()
    const track = useSelector((state: any) => {
        return state.tracks as Track[]
     })
     const playedTrack = useSelector((state: any) => state.playedTrack as PlayedTrack | null) 

     const playTrack = (url: string,name:string, id:number) => {
        dispatch(setPlayedTrack({
            url,
            name,
            id
        }))
     }
    return (
        <div>
               {track.map(({id,name,artist,url}) => {
                    return (
                        <Container>
                        <Item active={playedTrack?.id===id} onClick={() => playTrack(url, name, id)} key={id}>
                        {id+1} {" "}
                        {artist} -{" "}
                        {name}
                        </Item>
                        </Container>
                    )})}
        </div>
    )
}

type ItemProps = {
    active?:boolean
}

const Item = styled.div<ItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000050;
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid white;
    min-width: 640px;
    width: 100%;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    ${({active}) => active && css`
    border: 1px solid green; 
    `}
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 640px;
    width: 100%;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
