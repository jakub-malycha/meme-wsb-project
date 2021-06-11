import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Meme from "../Meme/Meme";
import classes from "./MemeGenerator.module.css";

const MemeGenerator = (props) => {
  //   const memes = useSelector((state) => state.memes);
  const [fetchedMemes, setFetchedMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then(
      ({
        data: {
          data: { memes },
        },
      }) => {
        const memesWithVotes = memes.map((meme) => {
          meme.title = meme.name;
          meme.img = meme.url;
          meme.upvotes = Math.floor(Math.random() * 20 + 1);
          meme.downvotes = Math.floor(Math.random() * 20 + 1);
          return meme;
        });
        shuffleMemes(memesWithVotes);
        setFetchedMemes(memesWithVotes);
        // props.update(memesWithVotes);
      }
    );
  }, []);

  const shuffleMemes = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const updateMemesAndSkip = () => {
    props.update(fetchedMemes[memeIndex]);
    setMemeIndex(memeIndex + 1);
  };

  return fetchedMemes.length ? (
    <div className={classes.container}>
      <button onClick={updateMemesAndSkip} className={classes.generate}>
        Generate
      </button>
      <button
        onClick={() => setMemeIndex(memeIndex + 1)}
        className={classes.skip}
      >
        Skip
      </button>
      <img src={fetchedMemes[memeIndex].img} />
    </div>
  ) : (
    <></>
  );

  // <div>
  //   {memes
  //     .filter((meme) => !(meme.upvotes - meme.downvotes > 5))
  //     .map((meme) => {
  //       return (
  //         <Meme
  //           key={meme.id}
  //           title={meme.title}
  //           img={meme.img}
  //           upvotes={meme.upvotes}
  //           downvotes={meme.downvotes}
  //           upvote={props.upvote}
  //           downvote={props.downvote}
  //           id={meme.id}
  //         />
  //       );
  //     })}
  // </div>
};

export default MemeGenerator;
