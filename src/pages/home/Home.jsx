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

  console.log("현재:", nowData);
  console.log("인기:", popData);

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
  return <>home</>;
}
