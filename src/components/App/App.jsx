import React from "react";
import "./App.css";
import Emoji from "../Emoji";
import Button from "../Button";
import Image from "../Image";

class App extends React.Component {
  state = {
    disabled: "false",
    likes: 0,
    unlikes: 0,
  };

  add = () => {
    let newLikes = this.state.likes;

    newLikes = newLikes + 1;

    this.setState({ likes: newLikes });
  };

  sub = () => {
    let newUnlikes = this.state.unlikes;

    newUnlikes = newUnlikes + 1;

    this.setState({ unlikes: newUnlikes });
  };

  changeImage = () => {};

  render() {
    return (
      <div className="main">
        <div className="likes">
          <Emoji class="green" value={this.state.likes} />
          <Emoji class="red" value={this.state.unlikes} />
        </div>
        <Image className="image" />
        <div className="btns">
          <Button func={this.add} value="LIKE" />
          <Button func={this.sub} value="UNLIKE" />
        </div>
      </div>
    );
  }
}

export default App;
