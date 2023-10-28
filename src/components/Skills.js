import React from 'react';

function Skills() {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons">
              <li className="list-inline-item"><i className="fab fa-html5 fa-2xl"></i></li>
              <li className="list-inline-item"><i className="fab fa-css3-alt fa-2xl"></i></li>
              <li className="list-inline-item"><i className="fab fa-js-square fa-2xl"></i></li>
              <li className="list-inline-item"><i className="fab fa-git-alt fa-2xl"></i></li>
              <li className="list-inline-item"><i className="fab fa-react fa-2xl"></i></li>
              <li className="list-inline-item"><i className="fab fa-node fa-2xl"></i></li>
              <li className="list-inline-item"><i className="fab fa-python fa-2xl"></i></li>
              <li className="list-inline-item"><i className="fab fa-php fa-2xl"></i></li>
              <li className="list-inline-item"><i className="fab fa-npm fa-2xl"></i></li>
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
              <li>
                  <span className="fa-li"><i className="fas fa-check"></i></span>
                  Mobile-First, Responsive Design
              </li>
              <li>
                  <span className="fa-li"><i className="fas fa-check"></i></span>
                  Cross Browser Testing & Debugging
              </li>
              <li>
                  <span className="fa-li"><i className="fas fa-check"></i></span>
                  Cross Functional Teams
              </li>
              <li>
                  <span className="fa-li"><i className="fas fa-check"></i></span>
                  Agile Development & Scrum
              </li>
          </ul>
      </div>
    </section>
  );
}

export default Skills;
