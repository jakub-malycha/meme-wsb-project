import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Hot from "./components/Hot";
import Navigation from "./components/Navigation";
import Regular from "./components/Regular";

function App() {
  const dispatch = useDispatch();

  const memes = useSelector((state) => state.memes);

  const findClickedMeme = (clickedMemeId) => {
    const clickedMeme = memes.filter((meme) => {
      return meme.id === clickedMemeId;
    });
    const index = memes.findIndex((meme) => meme.id === clickedMeme[0].id);
    return index;
  };
  const upvote = (clickedMemeId) => {
    const index = findClickedMeme(clickedMemeId);
    const upvoteAction = {
      type: "UPVOTE",
      payload: index,
    };
    dispatch(upvoteAction);
  };
  const downvote = (clickedMemeId) => {
    const index = findClickedMeme(clickedMemeId);
    const downvoteAction = {
      type: "DOWNVOTE",
      payload: index,
    };
    dispatch(downvoteAction);
  };

  const update = (memes) => {
    const updateAction = {
      type: "UPDATE",
      payload: memes,
    };
    dispatch(updateAction);
  };

  return (
    <div className="App">
      <h1>projekt</h1>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/regular" />
          </Route>
          <Route exact path="/regular">
            <Regular upvote={upvote} downvote={downvote} update={update} />
          </Route>
          <Route exact path="/hot">
            <Hot upvote={upvote} downvote={downvote} update={update} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
