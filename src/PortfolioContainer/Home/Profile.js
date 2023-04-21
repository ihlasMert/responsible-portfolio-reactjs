/** @format */

import React from "react";
import Typical from "react-typical";
import "./Profile.css"

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.linkedin.com'>
                <i class='fa fa-linkedin'></i>
              </a>
              <a href='https://www.instagram.com'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://twitter.com/IhlasMert'>
                <i className='fa fa-twitter'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              Hello <span className='highlighted-text'>İhlas</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "My name is",
                    1000,
                    "My name Full Stack",
                    1000,
                    "My name React web",
                    1000,
                    "My name React Native",
                    1000,
                    "My Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Knack of building applcaitions with front and back end
                operations
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>Hire me </button>
            <a href='app-job.pdf' download='app-job.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
