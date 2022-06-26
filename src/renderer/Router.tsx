import styled from "styled-components";
import { Player } from "./view/Player";
import { Playlist } from "./view/Playlist";

export const Router = () => (
    <Container>
        <Player />
        <Playlist />
    </Container>
)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`