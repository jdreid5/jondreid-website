import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cv from '../assets/JR_CV_08-23.pdf';

function Profile() {
  return (
    <section className="resume-section" id="about">
        <div className="resume-section-content">
            <h1 className="mb-0">
                Jon
                <span className="text-primary">Reid</span>
            </h1>
            <div className="subheading mb-5">
                Aspiring full-stack developer · <a href={cv} download>Download CV</a>
            </div>
            <p className="lead mb-5" style={{paddingRight: "15%"}}>Hard-working, confident individual currently completing a bootcamp focused on full-stack engineering, looking to take my next step in my career into the world of software development.</p>
            <div className="social-icons">
                <a className="social-icon" href="https://www.linkedin.com/in/jon-d-reid/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
            </div>
        </div>
    </section>
  );
}

export default Profile;
