import React, { useState } from 'react';

// import fanaroma from '../images/projects/travelix.png';

function Card({ projectDetails }) {
  const [image, setImage] = useState();
  import(`../images/projects/${projectDetails.image}`).then((image) => {
    setImage(image);
  });
  if (image) {
    return (
      <div className="card">
        <div className="imgBx">
          <img src={image.default} alt="Image" />
        </div>
        <div className="content">
          <h2 className="ptitle">{projectDetails.projectName}</h2>
          <p className="pdescription">{projectDetails.description}</p>
          <a className="plink" href={projectDetails.link} target="blank">
            <button> Check it out</button>
          </a>
        </div>
      </div>
    );
  } else {
    return <p></p>;
  }
}

export default Card;
