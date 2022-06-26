import styled from "styled-components"
import {AiFillPlayCircle} from 'react-icons/ai'
import {IoPlayForward, IoPlayBack} from 'react-icons/io5'
import {ImShuffle} from 'react-icons/im'
import {TbRepeat} from 'react-icons/tb'

export const ActionBar = () => {
    return (
        <Container>
            <ActionButton> <TbRepeat /></ActionButton>
            <ActionButton><ImShuffle /></ActionButton>
            <ActionButton><IoPlayBack /></ActionButton>
            <ActionButton><AiFillPlayCircle /></ActionButton>
            <ActionButton><IoPlayForward /></ActionButton>
            <input type="range"></input>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 48px;
    padding: 8px;
    margin-bottom: 12px;
    gap: 16px;
`

const ActionButton = styled.div`
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
    
`