import classes from "./Regular.module.css";
import Meme from "../Meme/Meme";

const Regular = (props) => {
  return (
    <div className={classes.container}>
      {props.memes
        .filter((meme) => !(meme.upvotes - meme.downvotes > 5))
        .map((meme) => {
          return (
            <Meme
              key={meme.id}
              className={classes.container}
              title={meme.title}
              img={meme.img}
              upvotes={meme.upvotes}
              downvotes={meme.downvotes}
              upvote={props.upvote}
              downvote={props.downvote}
              id={meme.id}
            />
          );
        })}
    </div>
  );
};

export default Regular;
