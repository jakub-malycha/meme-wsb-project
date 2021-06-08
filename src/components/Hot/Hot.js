import Meme from "../Meme/Meme";

const Hot = (props) => {
  // const memes = useSelector((state) => state.memes);
  const filteredMemes = props.memes.filter((meme) => {
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
