import React from "react";

const Emoji = (props) => {
  return (
    <div>
      <button className={props.class}>{props.value}</button>
    </div>
  );
};

export default Emoji;
