import React from "react";
import faker from "faker";

class Image extends React.Component {
  state = { image: null };

  componentDidMount() {
    this.setState({ image: faker.image.image() });
  }

  render() {
    return (
      <div>
        {this.state.image && (
          <img
            style={{ width: "300px" }}
            src={faker.image.image()}
            alt="something"
          />
        )}
      </div>
    );
  }
}
export default Image;
