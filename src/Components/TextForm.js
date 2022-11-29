import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  return (
    <div className="container">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Conver to UpperCase
        </button>
      </div>
    </div>
  );
}
