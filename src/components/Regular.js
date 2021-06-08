import { useState } from "react";
import { useSelector } from "react-redux";
import Meme from "./Meme";

const Regular = (props) => {
  const memes = useSelector((state) => state.memes);
  return (
    <Meme
      memes={memes}
      upvote={props.upvote}
      downvote={props.downvote}
      update={props.update}
    />
  );
};

export default Regular;
