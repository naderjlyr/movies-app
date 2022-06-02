import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import {
  selectContent,
  fetchPopularMovies,
} from "../../features/slice/contentSlice";
type Props = {};

const Home = (props: Props) => {
  const contents = useAppSelector(selectContent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <>
      <div className="page-title">Home</div>
      <Slider />
    </>
  );
};

export default Home;
