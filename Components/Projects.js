import React, { useEffect, useState } from "react";
import Card from "./Card";
import GlassCard from "./GlassCard";

function Projects(props) {
  const [projects, setProjects] = useState([
    {
      projectName: "Fanorona Game",
      description:
        "Fanorona is the  multiplayer strategy game originated from Madagascar. The online version of the game is built in React.js, Redux.js, node.js and socket.io.",
      image: "fanorona.png",
      link: "https://fanorona-game.netlify.app",
    },
    {
      projectName: "Electrostatics",
      description:
        "A simple elctrostatics model with various modules such as induction and conduction, circular motion of charge, dipole moment etc. It is built in p5.js, vanilla javascript, html and css.",
      image: "fanorona.png",
      link: "https://electrostatics.netlify.app/",
    },
    {
      projectName: "Notion Template Store",
      description:
        "Get different ready made notion templates for different tasks in economic price. ",
      link: "https://unlockplaybook.com/",
    },
    {
      projectName: "Dividend Tracker",
      description:
        "Add, buy and watch stocks. Claim free stocks available in the market. Manage your stocks more efficiently. ",
      link: "https://mdt-app.vercel.app/",
    },
    {
      projectName: "Tic Tac Toe Game",
      description:
        "Currently offline (multiplayer on development) tic tac toe game build on next.js.",
      link: "https://tictactoe-ebon-ten.vercel.app/",
    },
    {
      projectName: "ROLACON",
      description:
        "Rolacon, is an audit firm in nepal, delivering accounting and finance needs for your business including bookkeeping, business and financial planning, auditing and tax consulting, company registration. ",
      link: "http://www.rolacon.com",
    },
    {
      projectName: "Ecstatic Paradox",
      description:
        "An organization management system made with combo of  Django wagtail, Django rest framework and Reactjs.",
      link: "https://ecstaticparadox.com",
    },
    {
      projectName: "Paaila Nepal Surgical",
      description: "Landing page of surgical equipments dealer.",
      link: "https://paaila-nepal.vercel.app/",
    },
    {
      projectName: "Goaly",
      description:
        "A hungarian site for procastinators. Add your goal, Add your paying amount, complete your goal.",
      image: "ntg.png",
      link: "https://www.goaly.hu/",
    },
    {
      projectName: "Find Presentation",
      description:
        "Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid!",
      image: "tourNepal.png",
      link: "https://poetic-mermaid-76ff0a.netlify.app/",
    },

    {
      projectName: "Travelix",
      description:
        "Lorem ipsum dolor sit amet, consecteturadipisicing elit. Ducimus facere dolorum, quo perspiciatis delectus aliquid!",
      image: "travelix.png",
      link: "https://technext.github.io/travelix/index.html",
    },

    {
      projectName: "Animated Landing",
      description: "Simple landing page with some amazing animatons",
      image: "miro.png",
      link: "https://nifty-borg-8bef88.netlify.app/",
    },
  ]);
  const [minLength, setMinLength] = useState(4);

  const [projectLength, setProjectLength] = useState(minLength);
  const newProjects = projects.slice(0, projectLength);

  const showMore = () => setProjectLength(projects.length);
  const showLess = () => setProjectLength(minLength);

  return (
    <div className="projects toggleOption projectwala" id="projects">
      <div className="project-title">
        <h3 className="project-head">Projects</h3>
        <div className="project-bar"></div>
      </div>

      <div className="pcontainer reveal">
        {newProjects.map((project, index) => {
          return (
            <GlassCard key={index} projectDetails={{ ...project, index }} />
          );
        })}
      </div>
      {projectLength === minLength && (
        <button className="projectToggle" onClick={showMore}>
          {" "}
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
