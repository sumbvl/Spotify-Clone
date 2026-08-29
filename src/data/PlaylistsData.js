import { assets } from '../assets/assets'

const playlists = [
  {
    id: 1,
    name: "Sleep",
    cover: assets.img6,
    songs: [
      { id: 1, title: "Deep Sleep", artist: "Ambient Sounds", duration: "3:12", src: assets.song1, cover: assets.img6 },
      { id: 2, title: "Night Rain", artist: "Ambient Sounds", duration: "4:05", src: assets.song2, cover: assets.img6 },
    ],
  },
  {
    id: 2,
    name: "lofi beats",
    cover: assets.img7,
    songs: [
      { id: 3, title: "Chill Study", artist: "Lofi Girl", duration: "2:48", src: assets.song1, cover: assets.img7 },
      { id: 4, title: "Late Night Coffee", artist: "Lofi Girl", duration: "3:33", src: assets.song3, cover: assets.img7 },
    ],
  },
  {
    id: 3,
    name: "Top 50 - Global",
    cover: assets.img8,
    songs: [
      { id: 5, title: "Track One", artist: "Various Artists", duration: "3:01", src: assets.song2, cover: assets.img8 },
      { id: 6, title: "Track Two", artist: "Various Artists", duration: "2:55", src: assets.song3, cover: assets.img8 },
    ],
  },
  {
    id: 4,
    name: "Top 50 - India",
    cover: assets.img9,
    songs: [
      { id: 7, title: "Track One", artist: "Various Artists", duration: "3:20", src: assets.song1, cover: assets.img9 },
    ],
  },
  {
    id: 5,
    name: "PHONK",
    cover: assets.img14,
    songs: [
      { id: 8, title: "Drift", artist: "Phonk Kingdom", duration: "2:40", src: assets.song2, cover: assets.img14 },
    ],
  },
];

export default playlists;
