import { createContext, useContext, useRef, useState } from 'react'
import { songsData } from '../assets/assets'

const PlayerContext = createContext();

export function PlayerContextProvider({ children }) {
  const audioRef = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  function play() {
    audioRef.current.play();
    setPlayStatus(true);
  }

  function pause() {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  function togglePlay() {
    if (playStatus) {
      pause();
    } else {
      play();
    }
  }

  function playWithId(id) {
    setTrack(songsData[id]);
    setPlayStatus(true);
  }

  function previous() {
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);
      setPlayStatus(true);
    }
  }

  function next() {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
      setPlayStatus(true);
    }
  }

  function handleSongEnd() {
    next();
  }

  const contextValue = {
    audioRef,
    track,
    setTrack,
    playStatus,
    play,
    pause,
    togglePlay,
    playWithId,
    previous,
    next,
    handleSongEnd,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
