import React from 'react';
import picture from '../images/Jatescreenshot.png';
import picture2 from '../images/Techscreenshot.png'; 
import picture3 from '../images/Ghosttrackerscreenshot.png';
import picture4 from '../images/Notetakerscreenshot.png';
import picture5 from '../images/weatherdashscreenshot.png';
import picture6 from '../images/Workdayscreenshot.png';
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <a href="https://lit-cliffs-63394.herokuapp.com/" target="_blank">
      <img src= {picture} alt="picture of text editor" width={200} />JATE Text Editor</a>

      <a href="https://stormy-hollows-61177.herokuapp.com/" target="_blank">
      <img src= {picture2} alt="picture of tech Blog" width={200} />The Tech Blog</a>

      <a href="https://quiet-wave-19391.herokuapp.com/" target="_blank">
      <img src= {picture3} alt="picture of Ghost Tracker" width={200} />The Ghost Tracker</a>

      <a href="https://protected-dusk-26151.herokuapp.com/" target="_blank">
      <img src= {picture4} alt="picture of Note Taker" width={200} />The Note Taker</a>

      <a href=" https://tgold1.github.io/weather-dashboard-api/" target="_blank">
      <img src= {picture5} alt="picture of Weather Dashboard" width={200} />Weather Dashboard</a>

      <a href="  https://tgold1.github.io/work-day-scheduler/" target="_blank">
      <img src= {picture6} alt="picture of Work Day Scheduler" width={200} />Workday Scheduler</a>
    </div>
  );
}
