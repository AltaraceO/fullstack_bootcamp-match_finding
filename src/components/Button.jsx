import React from "react";

const Button = (props) => {
  return (
    <div>
      <button disabled="true" onClick={() => props.func()}>
        {props.value}
      </button>
    </div>
  );
};

export default Button;
