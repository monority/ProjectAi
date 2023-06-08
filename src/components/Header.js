import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowLeft);
const Header = ({ showIcon , action}) => {
  const navigate = useNavigate();

  return (
    <div className="App-header">
      <div className="container">
        <nav>
          <div className="wrapper">
            

            <img src={`${process.env.PUBLIC_URL}/ai.png`}  alt="" />
            <h1>Ai-Hub</h1>
            {showIcon && (
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-left"
                size="2x"
                onClick={() => navigate("/")}
                onMouseEnter={action}
              />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
