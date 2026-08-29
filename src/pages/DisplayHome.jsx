import { albumsData } from '../assets/assets'
import AlbumItem from '../components/AlbumItem'

function DisplayHome() {
  return (
    <div className="bg-linear-to-b from-zinc-800 to-black p-6 min-h-full">
      <h1 className="text-white text-2xl font-bold mb-6">Good afternoon</h1>
      <div className="flex flex-wrap gap-4">
        {albumsData.map(function (album) {
          return <AlbumItem key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
}

export default DisplayHome;
