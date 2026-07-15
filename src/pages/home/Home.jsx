import { useEffect, useState } from "react";
import { getNowPlaying } from "../../api/movieApi";

export default function Home() {
  const [movie, setMovieData] = useState({});

  // const [nowData, setNowData] = useState();
  // const [popData, setPopData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const [nowPlaying, popular] = await Promise.all([
          getNowPlaying(),
          getpopular(),
        ]);

        // const nowPlaying = await getNowPlaying();
        // const popular = await getpopular();

        // setNowData(nowPlaying);
        // setPopData(popular);

        setMovieData({
          nowPlaying,
          popular,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log("현재:", movie);
  console.log("인기:", movie.popData);

  console.log(movie?.nowPlaying?.response?.results[0].title);

  // useEffect(() => {
  //   const movieDate = async () => {
  //     const nowPlayingData = await getNowPlaying();
  //     console.log(nowPlayingData.response.results[0].title);
  //   };
  //   movieDate();
  // }, []);
  // useEffect(() => {
  //   (async () => {
  //     const nowData = await getNowPlaying();
  //     console.log(nowData);
  //   })();
  // }, []);
  //getNowPlaying();

  // const [num, setNum] = useState(0);

  // useEffect(() => {
  //   console.log("랜더링 실행");
  // }, []);
  // useEffect(() => {
  //   console.log("처음 랜더링시 1회 실행");
  // }, []);
  // useEffect(() => {
  //   console.log("num값이 변경될때마다 실행");
  // }, [num]);
  return (
    <div className="min-h-screen">
      <section
        className="h-[80vh] px-[20px] lg:px-[80px] xl:px-[200px] relative"
        style={{
          background: `URL() no-repeat center / cover`,
        }}
      >
        <div className="absolute bottom-[100px] left-[20px] lg:left-[80px] xl:left-[200px]">
          <h3 className="text-[30px] lg:text-2xl xl:text-[70px] font-semibold">
            {movie?.nowPlaying?.response?.results[0].title}
          </h3>
          <p className="text-[14px] xl:text-[18px] opacity-55 ">
            {movie?.nowPlaying?.response?.results[0].overview.slice(0, 100) +
              "..."}
          </p>
          <Link to ={/movie} 
          className="block px-8 py-4 bg-red-500 hover:bg-red-800 transition">
            more &rarr;{" "}
          </Link>
        </div>
      </section>
      home
    </div>
  );
}
