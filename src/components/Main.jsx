import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const Main = () => {
  const [input, setInput] = useState("");
  const [copy, setCopy] = useState(false);

  const btnuppercase = () => {
    let upper = input.toUpperCase();
    setInput(upper);
  };
  const btnlowercase = () => {
    let lower = input.toLowerCase();
    setInput(lower);
  };
  const clearbtn = () => {
    setInput("");
  };

  const removeSpace = () => {
    let remove = input.split(/[ ]+/);
    setInput(remove.join(" "));
  };

  return (
    <>
      <div className="main">
        <div>
          <h1>Enter the text to analyze below</h1>
        </div>
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="input"
            id="input"
            cols="150"
            rows="12"
          ></textarea>
        </div>
        <div className="btns">
          <button onClick={btnuppercase}>Convert to Uppercase</button>
          <button onClick={btnlowercase}>Convert to Lowercase</button>
          <button onClick={clearbtn}>Clear Text</button>
          <CopyToClipboard text={input}>
            <button onCopy={() => setCopy(true)}>Copy Text</button>
          </CopyToClipboard>

          <button onClick={removeSpace}>Remove Extra Space</button>
        </div>
        <div>
          <h1>Your text summery</h1>
          <p>
            {input ? input.split(" ").length : input.split("").length} Word and{" "}
            {input.length} characters
          </p>
          <p>{input ? 0.008 * input.split(" ").length : "0"} minutes read </p>
        </div>
        <div>
          <h1>Preview</h1>
          <p>
            {input
              ? input
              : "Enter something in the textbox above to preview here"}{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default Main;
