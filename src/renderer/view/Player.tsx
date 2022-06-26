import { ActionBar } from "./ActionBar"
import { useSelector } from 'react-redux'
import { PlayedTrack, Track } from "renderer/interfaces"
import { useAppDispatch } from "renderer/store"
import React from "react"
import { CurrentTime } from "./CurrentTime"
import styled from "styled-components"


export const Player = () => {
    const handleButton = () => {
        window.electron.ipcRenderer.showHz()
    }
    const playedTrack = useSelector((state: any) => state.playedTrack as PlayedTrack | null)
    const dispacth = useAppDispatch()
    const audioRef = React.useRef<HTMLAudioElement>(null)
    const [currentTime, setCurrentTime] = React.useState(0)

    const [isPlayed, setIsPlayed] = React.useState(false)

    const play =  () => {
        setIsPlayed(true)
        audioRef.current?.play()
    }
    const pause =  () => {
        setIsPlayed(false)
        audioRef.current?.pause()
    }


    return (
        <div>
            <ButtonContainer>
            <button onClick= {handleButton}>Добавить</button>
            </ButtonContainer>
            <ActionBar />
            {playedTrack && (
                <>
                    <button onClick={() => !isPlayed? play() : pause()} >
                        {isPlayed ? <>pause</> : <>play</>}
                    </button>
                    <audio 
                        ref={audioRef} 
                        src={`file://${playedTrack.url}`}
                        onTimeUpdate={() => {
                            setCurrentTime(audioRef.current?.currentTime || 0);
                        }}    
                    />
                    <p>Щас играет: {playedTrack.name}</p>
                    <CurrentTime
                        duration={
                            audioRef.current?.duration || 0
                        }
                        currentTime={currentTime}

                    />
                </>
            )}

        </div>
    )
}

const ButtonContainer = styled.div`
    display :flex;
    align-items: flex-start;
    justify-content: flex-start;

`