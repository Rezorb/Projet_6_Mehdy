import React from "react";
import "./Host.css";


function Host(props) {
    const [firstName, lastName] = props.name.split(" ");
  return (
    <>
      <div className="housing_host">
        <div className="host_info">
          <div className="host_fullname">
            <p>
              {firstName}
              <br />
              {lastName}
            </p>
          </div>
          <img className="host_img" src={props.picture} alt={`${props.name}`} />
        </div>
      </div>
    </>
  );
}

export default Host;
