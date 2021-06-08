import { useSelector } from "react-redux";

const Meme = (props) => {
  return (
    <ul>
      {props.memes.map((meme, id) => (
        <li key={id}>
          <h1>{meme.title}</h1>
          <img src={meme.img} />
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
        </li>
      ))}
    </ul>
  );
};

export default Meme;
