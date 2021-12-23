import React from "react";
import faker from "faker";

const Image = (props) => {
  return (
    <div>
      <img
        style={{ width: "300px" }}
        src={faker.image.image()}
        alt="something"
      />
    </div>
  );
};
export default Image;
