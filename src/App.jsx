import React from 'react';
import './App.css';
import share from './image/_Avatar share button.png'
import profile_img from './image/profile__img.png';
import slack from './image/slack.png'
import github from './image/Social icon.png'
import campLogo from './image/kodecamp-logo-white-3.png'
import mainLogo from './image/KodeHauz Logo 1.png'

function App() {
  return (
    <div className="link-tree-container">
      <div className="share">
        <img src={share} alt="" />
      </div>
      <div className="profile-section">
        <div className="profile-img">
          <img src={profile_img} alt="" />
        </div>
        <h1 className="title">John Doe</h1>
      </div>
      <div className="link-container">
        <a href="#" className="link">Twitter Link</a>
        <a href="#" className="link">Kodecamp team</a>
        <a href="#" className="link">Kodecamp Books</a>
        <a href="#" className="link">Python Books</a>
        <a href="#" className="link">Background check for coders</a>
        <a href="#" className="link">Design Books</a>
      </div>

      <div className='Social-icon'>
        <img src={slack} alt="slack" id='slack'/>
        <img src={github} alt=""  id='git'/>
      </div>

      <hr />

      <div className="Footer">
        <div className="footer-img">
          <img src={campLogo} alt="" />
          <p>Kodecamp Internship Task</p>
          <img src={mainLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;