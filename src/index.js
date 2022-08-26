import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DisplayPersonalInfo from './Components/DisplayPersonalInfo';
import DisplayEducationInfo from './Components/DisplayEducationInfo';
import DisplayPracticalInfo from './Components/DisplayPracticalInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="main-container">
    <DisplayPersonalInfo />
    <DisplayEducationInfo />
    <DisplayPracticalInfo />
  </div>
);
