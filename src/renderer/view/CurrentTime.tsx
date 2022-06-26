type Props = {
    duration: number,
    currentTime: number
}
export const CurrentTime = ({duration, currentTime}: Props) => {
    const minutes = Math.trunc(duration / 60)
    const seconds = Math.trunc(duration % 60)
    return (
        <div>
            {Math.trunc(currentTime)} / {minutes}:{seconds}
        </div>
    )
}