import React from "react";
import "./Host.scss";

function Host(props) {
  const [firstName, lastName] = props.name.split(" ");
  return (
    <>
      <div className="host_info">
        <div className="host_info_fullname">
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
        </div>
        <img
          className="host_info_img"
          src={props.picture}
          alt={`${props.name}`}
        />
      </div>
    </>
  );
}

export default Host;
