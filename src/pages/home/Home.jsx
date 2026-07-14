import { getNowPlaying } from "../../api/movieApi";

export default function Home() {
  getNowPlaying();
  return <div className="">Home</div>;
}
