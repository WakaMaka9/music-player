import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Player } from "./view/Player";
import { Playlist } from "./view/Playlist";

export const Router = () => (
    <>
    <MemoryRouter>
        <Routes>
            <Route path='/' element={<Player />} />
            <Route path='/' element={<Playlist />} />
        </Routes>
    </MemoryRouter>
    </>
)