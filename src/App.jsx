import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PlayerContextProvider } from './contexts/PlayerContext'
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import DisplayHome from "./pages/DisplayHome";
import DisplayAlbum from "./pages/DisplayAlbum";

export default function App() {
  return (
    <PlayerContextProvider>
      <BrowserRouter>
        <div className="flex flex-col h-screen bg-black">
          <NavBar />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DisplayHome />} />
              <Route path="/album/:id" element={<DisplayAlbum />} />
            </Routes>
          </div>
          <Player />
        </div>
      </BrowserRouter>
    </PlayerContextProvider>
  );
}
