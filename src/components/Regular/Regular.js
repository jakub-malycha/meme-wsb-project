import classes from "./Regular.module.css";
import Meme from "../Meme/Meme";

const Regular = (props) => {
  // const memes = useSelector((state) => state.memes);
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
              // update={props.update}
            />
          );
        })}
    </div>
  );
};

export default Regular;

// function Regular(props) {
//   return (
//     <div className="Regular d-flex flex-column align-items-center">
//       {props.memes
//         .filter((meme) => !(meme.upvotes - meme.downvotes > 5))
//         .map((meme) => {
//           return (
//             <Meme
//               key={meme.id}
//               downvotes={meme.downvotes}
//               upvotes={meme.upvotes}
//               upvote={props.upvote}
//               downvote={props.downvote}
//               img={meme.url}
//               title={meme.name}
//               id={meme.id}
//             />
//           );
//         })}
//     </div>
//   );
// }
