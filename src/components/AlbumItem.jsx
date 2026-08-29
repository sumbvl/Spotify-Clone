import { Link } from 'react-router-dom'

function AlbumItem({ album }) {
  return (
    <Link
      to={`/album/${album.id}`}
      style={{ backgroundColor: album.bgColor }}
      className="rounded-lg p-4 w-44 hover:brightness-110 transition"
    >
      <img src={album.image} className="w-full aspect-square object-cover rounded-md mb-3" />
      <p className="text-white font-semibold text-sm truncate">{album.name}</p>
      <p className="text-zinc-200 text-xs truncate opacity-80">{album.desc}</p>
    </Link>
  );
}

export default AlbumItem;
