import React from 'react';
import picture from '../images/Jatescreenshot.png';
import picture2 from '../images/Techscreenshot.png'; 
import picture3 from '../images/Ghosttrackerscreenshot.png';
import picture4 from '../images/Notetakerscreenshot.png';
import picture5 from '../images/weatherdashscreenshot.png';
import picture6 from '../images/Workdayscreenshot.png';
import styles from '../styles/styles.css';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div class="row col-sm-6" style={{display: 'inline-block'}}>
        
      <a href="https://lit-cliffs-63394.herokuapp.com/" target="_blank">
      <img src= {picture} alt="picture of text editor"width={100} />JATE Text Editor</a>
          
      </div>

      <div class="row col-sm-6  "style={{display: 'inline-block'}}>
     
      <a href="https://stormy-hollows-61177.herokuapp.com/" target="_blank">
      <img src= {picture2}alt="picture of tech Blog" width={100} />The Tech Blog</a>
        
      </div>

      
      <div class="row col-sm-6"style={{display: 'inline-block'}}> 
      <a href="https://quiet-wave-19391.herokuapp.com/" target="_blank">
      <img src= {picture3} alt="picture of Ghost Tracker" width={100} />The Ghost Tracker</a> 
      </div>

      <div class="row col-sm-6 "style={{display: 'inline-block'}}>
      <a href="https://protected-dusk-26151.herokuapp.com/" target="_blank">
      <img src= {picture4} alt="picture of Note Taker" width={100} />The Note Taker</a>
      </div>

      <div class="row col-sm-6 "style={{display: 'inline-block'}}> 
      <a href=" https://tgold1.github.io/weather-dashboard-api/" target="_blank">
      <img src= {picture5} alt="picture of Weather Dashboard" width={100} />Weather Dashboard</a>
      </div>

      <div class="row col-sm-6 "style={{display: 'inline-block'}}>
      <a href="  https://tgold1.github.io/work-day-scheduler/" target="_blank">
      <img src= {picture6} alt="picture of Work Day Scheduler" width={100} />Workday Scheduler</a>
      </div>

    </div>
  );
}
