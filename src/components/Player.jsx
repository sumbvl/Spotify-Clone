import { assets } from '../assets/assets'
import { usePlayer } from '../contexts/PlayerContext'

function Player() {
  const {
    audioRef, track, playStatus, togglePlay, previous, next,
    isShuffle, toggleShuffle, isLoop, toggleLoop, handleSongEnd,
  } = usePlayer();

  return (
    <div className="h-20 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between px-4">
      <audio ref={audioRef} src={track.file} onEnded={handleSongEnd} preload="auto" />

      <div className="flex items-center gap-3 w-1/4">
        <img src={track.image} className="w-14 h-14 rounded" />
        <div>
          <p className="text-white text-sm font-semibold">{track.name}</p>
          <p className="text-zinc-400 text-xs">{track.desc}</p>
        </div>
        <img src={assets.like_icon} className="w-4 h-4 ml-2 opacity-70 hover:opacity-100 cursor-pointer" />
      </div>

      <div className="flex flex-col items-center gap-2 w-1/2">
        <div className="flex items-center gap-5">
          <img
            src={assets.shuffle_icon}
            onClick={toggleShuffle}
            className={`w-4 h-4 cursor-pointer ${isShuffle ? "opacity-100" : "opacity-60"}`}
          />
          <img src={assets.prev_icon} onClick={previous} className="w-5 h-5 cursor-pointer" />
          <button
            onClick={togglePlay}
            className="bg-zinc-600 rounded-full w-8 h-8 flex items-center justify-center"
          >
            <img src={playStatus ? assets.pause_icon : assets.play_icon} className="w-4 h-4" />
          </button>
          <img src={assets.next_icon} onClick={next} className="w-5 h-5 cursor-pointer" />
          <img
            src={assets.loop_icon}
            onClick={toggleLoop}
            className={`w-4 h-4 cursor-pointer ${isLoop ? "opacity-100" : "opacity-60"}`}
          />
        </div>
      </div>

      <div className="flex items-center gap-4 w-1/4 justify-end">
        <img src={assets.mic_icon} className="w-4 h-4 opacity-70" />
        <img src={assets.queue_icon} className="w-4 h-4 opacity-70" />
        <img src={assets.speaker_icon} className="w-4 h-4 opacity-70" />
        <img src={assets.volume_icon} className="w-4 h-4 opacity-70" />
        <img src={assets.mini_player_icon} className="w-4 h-4 opacity-70" />
        <img src={assets.zoom_icon} className="w-4 h-4 opacity-70" />
      </div>
    </div>
  );
}

export default Player;
