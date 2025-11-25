import React from 'react';
import './CSS/Courses.css';
import p from './images/phishing.png';
import s from './images/passwordsec.png';
import n from './images/network.png';
import so from './images/social.png';
import { useNavigate } from 'react-router-dom';
function Courses() {
    const Navigate=useNavigate();
    const changepp=()=>{
       Navigate('/phishingattack');
    }
  return (
    <div className="courses-page">
      <h1 className="title">Welcome to the Courses</h1>

      <div className="courses-row">
        <div className="course-box">
          <h2>Phishing Attacks</h2>
          <p>Learn how hackers trick users using fake emails.</p>
          <img  onClick={changepp} src={p}/>

        </div>

        <div className="course-box">
          <h2>Password Security</h2>
          <p>Understand how to create and manage strong passwords.</p>
          <img src={s}/>
        </div>

        <div className="course-box">
          <h2>Network Safety</h2>
          <p>Basics of keeping your network safe from threats.</p>
          <img src={n}/>
        </div>

        <div className="course-box">
          <h2>Social Engineering</h2>
          <p>Recognize manipulation tactics used by attackers.</p>
          <img src={so}/>
        </div>
      </div>
    </div>
  );
}

export default Courses;
