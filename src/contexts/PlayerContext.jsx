import { createContext, useContext, useRef, useState } from 'react'
import { assets, songsData } from '../assets/assets'

const PlayerContext = createContext();

export function PlayerContextProvider({ children }) {
  const audioRef = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

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
    if (isShuffle) {
      const randomId = Math.floor(Math.random() * songsData.length);
      setTrack(songsData[randomId]);
      setPlayStatus(true);
      return;
    }
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);
      setPlayStatus(true);
    }
  }

  function next() {
    if (isShuffle) {
      const randomId = Math.floor(Math.random() * songsData.length);
      setTrack(songsData[randomId]);
      setPlayStatus(true);
      return;
    }
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
      setPlayStatus(true);
    }
  }

  function handleSongEnd() {
    if (isLoop) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      next();
    }
  }

  function toggleShuffle() {
    setIsShuffle(function (prev) {
      return !prev;
    });
  }

  function toggleLoop() {
    setIsLoop(function (prev) {
      return !prev;
    });
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
    isShuffle,
    toggleShuffle,
    isLoop,
    toggleLoop,
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
