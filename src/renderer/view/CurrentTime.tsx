import styled from "styled-components"

type Props = {
    duration: number,
    currentTime: number
    name: string,
    onChangeTime: (v: number) => void
}
export const CurrentTime = ({duration, currentTime, name, onChangeTime}: Props) => {
    const minutes = Math.trunc(duration / 60)
    const seconds = Math.trunc(duration % 60)
    return (
        <Container>
        <p>Сейчас играет: {name}</p>
        <DurationWrapper>
           <div>{Math.trunc(currentTime)} / {minutes}:{seconds}</div>
            <Slider 
                type="range" 
                max={duration} 
                value={currentTime}
                onChange={(e) => onChangeTime(parseFloat(e.target.value))}
            />
        </DurationWrapper>
        </Container>
    )
}

const Container = styled.div`
    height: 36px;
`

const DurationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Slider = styled.input`
    margin-left: 16px;
    flex: 1;
`