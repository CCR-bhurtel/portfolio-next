import React, { useState } from 'react';
import Card from './Card';

function Projects() {
  const [projects, setProjects] = useState([
    {
      projectName: 'Fanorona Game',
      description:
        'Fanorona is the  multiplayer strategy game originated from Madagascar. The online version of the game is built in React.js, Redux.js, node.js and socket.io.',
      image: 'fanorona.png',
      link: 'https://fanorona-game.netlify.app',
    },
    {
      projectName: 'Travelix',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid! Assumenda quia cumque amet voluptates!',
      image: 'travelix.png',
    },
    {
      projectName: 'Natours',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid! Assumenda quia cumque amet voluptates!',
      image: 'natours.png',
    },
    {
      projectName: '3D Shoe',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid! Assumenda quia cumque amet voluptates!',
      image: '3d_shoe.png',
    },
    {
      projectName: 'DailyReceipe',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid! Assumenda quia cumque amet voluptates!',
      image: 'dailyReceipe.png',
    },
  ]);
  const [minLength, setMinLength] = useState(4);

  const [projectLength, setProjectLength] = useState(minLength);
  const newProjects = projects.slice(0, projectLength);

  const showMore = () => setProjectLength(8);
  const showLess = () => setProjectLength(minLength);
  return (
    <div className="projects" id="projects">
      <div className="project-title">
        <h3 className="project-head">Projects</h3>
        <div className="project-bar"></div>
      </div>

      <div className="pcontainer">
        {newProjects.map((project, index) => {
          return <Card key={index} projectDetails={project} />;
        })}
      </div>
      {projectLength === minLength && (
        <button className="projectToggle" onClick={showMore}>
          {' '}
          Show More
        </button>
      )}
      {projectLength > minLength && (
        <button className="projectToggle" onClick={showLess}>
          Show Less
        </button>
      )}
    </div>
  );
}

export default Projects;
