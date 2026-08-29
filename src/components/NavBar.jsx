import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

function NavBar() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <Link to="/">
        <img src={assets.spotify_logo} className="w-8 h-8" />
        </Link>
        <button>
          <Link to="/">
          <img src={assets.arrow_left} className="w-4 h-4" />
          </Link>
        </button>
        <button>
          <Link to="/album/1">
          <img src={assets.arrow_right} className="w-4 h-4" />
          </Link>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/" className="bg-zinc-800 rounded-full p-3">
          <img src={assets.home_icon} className="w-6 h-6" />
        </Link>
        <form className="bg-zinc-800 rounded-full px-4 py-2 w-64 flex items-center gap-2">
          <img src={assets.search_icon} className="w-4 h-4" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent outline-none w-full text-sm text-white placeholder-zinc-400"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <img src={assets.bell_icon} className="w-5 h-5" />
        <img src={assets.clock_icon} className="w-5 h-5" />
        <button className="hover:cursor-pointer text-zinc-300 font-bold text-sm hover:text-white">
          Sign up
        </button>
        <button className="hover:cursor-pointer bg-white text-black rounded-full px-8 py-3 font-bold text-sm hover:scale-105 transition">
          Log in
        </button>
      </div>
    </div>
  );
}

export default NavBar;
