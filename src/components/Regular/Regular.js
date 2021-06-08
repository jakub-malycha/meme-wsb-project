import classes from "./Regular.module.css";
import Meme from "../Meme/Meme";

const Regular = (props) => {
  // const memes = useSelector((state) => state.memes);
  return (
    <Meme
      className={classes.container}
      memes={props.memes}
      upvote={props.upvote}
      downvote={props.downvote}
      update={props.update}
    />
  );
};

export default Regular;
