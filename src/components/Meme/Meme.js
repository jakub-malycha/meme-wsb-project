import classes from "./Meme.module.css";
import Card from "../Card/Card";

const Meme = (props) => {
  return props.memes.map((meme, id) => (
    <Card>
      <div key={id} className={classes.container}>
        <div className={classes.title}>
          <h2>{meme.title}</h2>
        </div>
        <div className={classes.image}>
          <img src={meme.img} alt="Meme" />
        </div>
        <h3>
          {meme.upvotes}/{meme.downvotes}
        </h3>
        <button
          onClick={() => {
            props.upvote(meme.id);
          }}
        >
          UP+
        </button>
        <button
          onClick={() => {
            props.downvote(meme.id);
            props.update(props.memes);
          }}
        >
          DOWN-
        </button>
      </div>
    </Card>
  ));
};

// {
//   return (
//     <ul>
//       {props.memes.map((meme, id) => (
//         <li key={id}>
//           <h1>{meme.title}</h1>
//           <img src={meme.img} />
//           <h3>
//             {meme.upvotes}/{meme.downvotes}
//           </h3>
//           <button
//             onClick={() => {
//               props.upvote(meme.id);
//             }}
//           >
//             UP+
//           </button>
//           <button
//             onClick={() => {
//               props.downvote(meme.id);
//               props.update(props.memes);
//             }}
//           >
//             DOWN-
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default Meme;
