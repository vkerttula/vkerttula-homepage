import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Information = () => {
  return (
    <div className='my-info'>
        <h1 id="my-name" className="drop-in">Valtt<span>e</span>ri Kerttula</h1>
        <p id="about-text" className="overflow-hidden drop-in-2">
            Freelance Web Developer,
            Full Stack Software Developer &amp;
            B.Sc. Student in Information Technology 
            at Vaasa University of Applied Sciences
        </p>
        <div className="social-links drop-in-2">
            <a href="https://github.com/vkerttula" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/valtterikerttula/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    </div>
  )
};

export default Information;
