import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Hot from "./components/Hot/Hot";
import Navigation from "./components/Navigation/Navigation";
import Regular from "./components/Regular/Regular";

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
      <Header />
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/regular" />
          </Route>
          <Route exact path="/regular">
            <Regular
              memes={memes}
              upvote={upvote}
              downvote={downvote}
              update={update}
            />
          </Route>
          <Route exact path="/hot">
            <Hot
              memes={memes}
              upvote={upvote}
              downvote={downvote}
              update={update}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
