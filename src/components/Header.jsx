import { useState } from "react";
import { MdToggleOn, MdToggleOff } from "react-icons/md";

const Header = (props) => {
  const [toggle, setToggle] = useState(false);

  const togglechange = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <div
        style={{ backgroundColor: toggle ? "#212429" : "grey" }}
        className="header"
      >
        <div className="left-heading">
          <span>TextUtils</span>
          <span>Home</span>
        </div>
        <div className="right-heading">
          {toggle ? (
            <MdToggleOn
              onClick={() => {
                props.changecolor();
                togglechange();
              }}
              className="toggleon"
            />
          ) : (
            <MdToggleOff
              onClick={() => {
                props.changecolor();
                togglechange();
              }}
              className="toggleoff"
            />
          )}

          <span>Enable DarkMode</span>
        </div>
      </div>
    </>
  );
};
export default Header;
