import Meme from "../Meme/Meme";
import classes from "./Hot.module.css";

const Hot = (props) => {
  return (
    <div className={classes.container}>
      {props.memes
        .filter((meme) => meme.upvotes - meme.downvotes > 5)
        .map((meme) => {
          return (
            <Meme
              key={meme.id}
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

export default Hot;
