import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={() => props.func()}>{props.value}</button>
    </div>
  );
};

export default Button;
