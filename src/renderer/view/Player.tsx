import styled, { css } from "styled-components"
import {AiFillPlayCircle} from 'react-icons/ai'
import {IoPlayForward, IoPlayBack} from 'react-icons/io5'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {ImShuffle} from 'react-icons/im'
import {TbRepeat} from 'react-icons/tb'
import {MdPauseCircle} from 'react-icons/md'
import { useSelector } from "react-redux"
import { useAppDispatch } from "renderer/store/store"
import { PlayedTrack } from "renderer/interfaces"
import React from "react"
import { CurrentTime } from "./CurrentTime"
import { nextTrack, backTrack } from "renderer/store/PlayerReducer"
import { shuffleTracks } from "renderer/store/TrackReducer"

export const Player = () => {
    const handleButton = () => {
        window.electron.ipcRenderer.showHz()
    }
    const playedTrack = useSelector((state: any) => state.playedTrack as PlayedTrack | null)
    const dispatch = useAppDispatch()
    const audioRef = React.useRef<HTMLAudioElement>(null)

    const [isPlayed, setIsPlayed] = React.useState(false)
    const [currentTime, setCurrentTime] = React.useState(0)
    const [repeatModeEnabled, setRepeatModeEnabled] = React.useState(false)

    const play =  () => {
        setIsPlayed(true)
        audioRef.current?.play()
    }
    const pause =  () => {
        setIsPlayed(false)
        audioRef.current?.pause()
    }
    

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play()
            setIsPlayed(true)
        }
    },[playedTrack])

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = repeatModeEnabled
        }
    },[repeatModeEnabled, audioRef])

    const onChangeMusicTime = (v: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = v
        }
    }

    return (
        <Container>
            <Row>
                <ActionButton
                    onClick= {handleButton}
                >
                    <AiOutlinePlusCircle />
                </ActionButton>
                <ActionButton
                    onClick={() => setRepeatModeEnabled(!repeatModeEnabled)} 
                    isEnabled={repeatModeEnabled}
                >
                        <TbRepeat />
                </ActionButton>
                <ActionButton onClick={() => dispatch(shuffleTracks())}><ImShuffle /></ActionButton>
                <ActionButton onClick={()=> dispatch(backTrack())}><IoPlayBack /></ActionButton>
                <ActionButton onClick={() => !isPlayed? play() : pause()} > 
                            {isPlayed ? <MdPauseCircle/> : <AiFillPlayCircle/>}
                </ActionButton>
                <ActionButton onClick={() => dispatch(nextTrack())}><IoPlayForward /></ActionButton>
            </Row>
            <CurrentTime
                name={playedTrack?.name || 'Трек не выбран'}
                duration={audioRef.current?.duration || 0}
                currentTime={currentTime}
                onChangeTime={onChangeMusicTime}
                
            />
            {playedTrack && (
                <audio 
                    ref={audioRef} 
                    src={`file://${playedTrack.url}`}
                    onEnded={() => dispatch(nextTrack())}
                    onTimeUpdate={() => {
                        setCurrentTime(audioRef.current?.currentTime || 0);
                    }}    
                />
            )
        }
        </Container>
    )
}
const Container = styled.div`
    padding: 36px;
    margin-bottom: 12px;
    width: 90vw;
    box-sizing: border-box;
    background-color: #000;
    border-radius: 16px;
    padding-top: 8px;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`

type ActionButtonProps = {
    isEnabled?: boolean
}
const ActionButton = styled.div<ActionButtonProps>`
    display :flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    padding: 16px;
    &:hover {
        transition: 0.5s;
        background-color: #333;
    }
    ${({isEnabled}) => isEnabled && css`
        background-color: #fff;
        color: #000;
        
    `}
    
`
