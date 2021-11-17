import { React } from "react";
import "../components/Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Button(props) {
  return (
    <div>
      <div className="btn-pelota">
        <FontAwesomeIcon icon={faChevronDown} />

        {/* <i className='size fas fa-chevron-circle-down"'></i> */}

        {/* <i className={icon ? "size fas fa-chevron-down" : "none-icon"}></i> */}
      </div>
    </div>
  );
}

export default Button;
