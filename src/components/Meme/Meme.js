import classes from "./Meme.module.css";

const Meme = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.image}>
        <img src={props.img} alt="Meme" />
      </div>
      <div className={classes.center}>
        <button
          className={classes.btnUp}
          onClick={() => {
            props.upvote(props.id);
          }}
        >
          UPVOTES <span className={classes.votesNumber}>{props.upvotes}</span>
        </button>
        <button
          className={classes.btnDown}
          onClick={() => {
            props.downvote(props.id);
          }}
        >
          DOWNVOTES
          <span className={classes.votesNumber}>{props.downvotes}</span>
        </button>
      </div>
    </div>
  );
};

export default Meme;
