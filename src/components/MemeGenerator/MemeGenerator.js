import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./MemeGenerator.module.css";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MemeGenerator = (props) => {
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
    if (captions.includes("")) return alert("Please fill all inputs");
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
        console.log(memeUrl);
        return (currentMeme.img = memeUrl);
      });
    });
    props.update(currentMeme);
    setMemeIndex(memeIndex + 1);
    alert("Meme generated succesfully!!");
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
          meme.upvotes = 0;
          meme.downvotes = 0;
          return meme;
        });
        shuffleMemes(memesWithVotes);
        setFetchedMemes(memesWithVotes);
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
      <Container style={{ width: "30%" }}>
        <Button
          variant="success"
          onClick={generateMeme}
          className={classes.generate}
          block
        >
          Generate
        </Button>
        <Button
          variant="warning"
          onClick={() => setMemeIndex(memeIndex + 1)}
          className={classes.skip}
          block
        >
          Skip
        </Button>
      </Container>
      {captions.map((c, index) => (
        <input onChange={(e) => updateCaption(e, index)} key={index} />
      ))}
      <img src={fetchedMemes[memeIndex].img} />
    </div>
  ) : (
    <></>
  );
};

export default MemeGenerator;
