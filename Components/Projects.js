import React, { useState } from 'react';
import Card from './Card';
import GlassCard from './GlassCard';

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
      projectName: 'ROLACON',
      description:
        'Rolacon, is an audit firm in nepal, delivering accounting and finance needs for your business including bookkeeping, business and financial planning, auditing and tax consulting, company registration. ',
      link: 'http://www.rolacon.com',
    },
    {
      projectName: 'Travelix',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid!',
      image: 'travelix.png',
      link: 'https://technext.github.io/travelix/index.html',
    },
    {
      projectName: 'Natours',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid!',
      image: 'natours.png',
      link: 'https://natours.netlify.app/',
    },
    {
      projectName: 'Receipe Blog',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid!',
      image: 'dailyReceipe.png',
      link: 'https://dailyrecipesblog.com/',
    },
    {
      projectName: 'Tour Nepal',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid!',
      image: 'tourNepal.png',
      link: 'https://www.toursnepal.com/',
    },
    {
      projectName: 'Animated Landing',
      description: 'Simple landing page with some amazing animatons',
      image: 'miro.png',
      link: 'https://nifty-borg-8bef88.netlify.app/',
    },
    {
      projectName: 'Landing Page',
      description: 'Landing Page for a hiking site, ',
      image: 'landing_page.png',
      link: 'https://quirky-neumann-4fd4ce.netlify.app/',
    },
    {
      projectName: '3D Shoe',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid!',
      image: '3d_shoe.png',
      link: 'https://reverent-northcutt-850f52.netlify.app/',
    },
  ]);
  const [minLength, setMinLength] = useState(4);

  const [projectLength, setProjectLength] = useState(minLength);
  const newProjects = projects.slice(0, projectLength);

  const showMore = () => setProjectLength(projects.length);
  const showLess = () => setProjectLength(minLength);
  return (
    <div className="projects" id="projects">
      <div className="project-title">
        <h3 className="project-head">Projects</h3>
        <div className="project-bar"></div>
      </div>

      <div className="pcontainer">
        {newProjects.map((project, index) => {
          return (
            <GlassCard key={index} projectDetails={{ ...project, index }} />
          );
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

export default React.memo(Projects);
