import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Hello there 🔥');
  const handleOnChange = event => {
    setText(event.target.value);
  };
  const handleOnClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const lowerOnClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}></textarea>
          <button
            className="btn btn-primary"
            onClick={handleOnClick}>
            Conver to UpperCase
          </button>
          <button
            className="btn btn-primary mx-3"
            onClick={lowerOnClick}>
            Conver to UpperCase
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your text summery</h2>
        <p>
          your paragraph have {text.length} letters and {text.split(' ').length-1} words
        </p>
        <p>
          This paragraph takes {text.length*0.008} minutes to read
        </p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
