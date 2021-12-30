import React, { useState } from "react";
// import Tilt from 'react-parallax-tilt';

function GlassCard(props) {
  const { index, projectName, description, link } = props.projectDetails;
  return (
    <div className="cardContainer">
      <div className="card">
        <h2 className="nameFront">{projectName}</h2>

        <div className="cardContent">
          <h2>{index < 10 ? `0${index + 1}` : index + 1}</h2>
          <h3>{projectName}</h3>
          <p>{description}</p>
          <a rel="noreferrer" target="_blank" href={link}>
            Check It Out
          </a>
        </div>
      </div>
    </div>
  );
}

export default GlassCard;
