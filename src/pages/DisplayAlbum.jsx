import { useParams } from 'react-router-dom'
import { assets, albumsData, songsData } from '../assets/assets'
import { usePlayer } from '../contexts/PlayerContext'

function DisplayAlbum() {
  const { id } = useParams();
  const { playWithId, track, playStatus, togglePlay } = usePlayer();
  const album = albumsData.find(function (a) {
    return a.id === Number(id);
  });

  if (!album) return <p className="text-white p-6">Album not found</p>;

  return (
    <div
      className="min-h-full"
      style={{ background: `linear-gradient(to bottom, ${album.bgColor}, black)` }}
    >
      <div className="flex items-end gap-6 p-6">
        <img src={album.image} className="w-52 h-52 object-cover rounded shadow-2xl" />
        <div>
          <p className="text-zinc-300 text-sm">Playlist</p>
          <h1 className="text-white text-5xl font-bold my-2">{album.name}</h1>
          <p className="text-zinc-300 text-sm">{album.desc}</p>
        </div>
      </div>

      <div className="p-6">
        {songsData.map(function (song, index) {
          const isCurrentSong = track.id === song.id;
          return (
            <button
              key={song.id}
              onClick={function () {
                if (isCurrentSong) {
                  togglePlay();
                } else {
                  playWithId(song.id);
                }
              }}
              className="flex items-center justify-between w-full px-4 py-3 rounded hover:bg-zinc-800/60 text-left"
            >
              <div className="flex items-center gap-4">
                {isCurrentSong && playStatus ? (
                  <img src={assets.pause_icon} className="w-4 h-4" />
                ) : (
                  <span className="text-zinc-400 w-4">{index + 1}</span>
                )}
                <img src={song.image} className="w-10 h-10 rounded" />
                <div>
                  <p className={`text-sm ${isCurrentSong ? "text-green-500" : "text-white"}`}>
                    {song.name}
                  </p>
                  <p className="text-zinc-400 text-xs">{song.desc}</p>
                </div>
              </div>
              <span className="text-zinc-400 text-sm">{song.duration}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayAlbum;
