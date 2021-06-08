import Meme from "./Meme";
import { useSelector } from "react-redux";

const Hot = (props) => {
  const memes = useSelector((state) => state.memes);
  const filteredMemes = memes.filter((meme) => {
    return meme.upvotes - meme.downvotes > 5;
  });
  return (
    <Meme
      memes={filteredMemes}
      upvote={props.upvote}
      downvote={props.downvote}
      update={props.update}
    />
  );
};

export default Hot;
