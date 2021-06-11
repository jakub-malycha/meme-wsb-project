import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Meme from "../Meme/Meme";
import classes from "./MemeGenerator.module.css";

const MemeGenerator = (props) => {
  //   const memes = useSelector((state) => state.memes);
  const [fetchedMemes, setFetchedMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);

  const updateCaption = (e, index) => {
    const text = e.target.value || "";
    setCaptions(
      captions.map((caption, i) => {
        if (index === i) {
          return text;
        } else {
          return caption;
        }
      })
    );
  };

  const generateMeme = () => {
    const currentMeme = fetchedMemes[memeIndex];
    const formData = new FormData();

    formData.append("username", "qba1234");
    formData.append("password", "PaSS1234");
    formData.append("template_id", currentMeme.id);
    captions.forEach((caption, index) =>
      formData.append(`boxes[${index}][text]`, caption)
    );

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    }).then((res) => {
      res.json().then((res) => {
        const memeUrl = res.data.url;
        //  history.push(`/generated?url=${res.data.url}`);
        console.log(memeUrl);
        return (currentMeme.img = memeUrl);
      });
    });
    // props.update(fetchedMemes[memeIndex]);
    props.update(currentMeme);
    setMemeIndex(memeIndex + 1);
  };

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

  useEffect(() => {
    if (fetchedMemes.length) {
      setCaptions(Array(fetchedMemes[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, fetchedMemes]);

  return fetchedMemes.length ? (
    <div className={classes.container}>
      <button onClick={generateMeme} className={classes.generate}>
        Generate
      </button>
      <button
        onClick={() => setMemeIndex(memeIndex + 1)}
        className={classes.skip}
      >
        Skip
      </button>
      {captions.map((c, index) => (
        <input onChange={(e) => updateCaption(e, index)} key={index} />
      ))}
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
