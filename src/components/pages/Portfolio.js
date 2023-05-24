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
      <a href="https://github.com/tgold1/text-editor-pwa-app" target="_blank">Github Repo</a>
      </div>

      <div class="row col-sm-6  "style={{display: 'inline-block'}}>
     
      <a href="https://stormy-hollows-61177.herokuapp.com/" target="_blank">
      <img src= {picture2}alt="picture of tech Blog" width={100} />The Tech Blog</a>
      <a href="https://github.com/tgold1/Tech-blog-app" target="_blank">Github Repo</a> 
      </div>

      
      <div class="row col-sm-6"style={{display: 'inline-block'}}> 
      <a href="https://quiet-wave-19391.herokuapp.com/" target="_blank">
      <img src= {picture3} alt="picture of Ghost Tracker" width={100} />The Ghost Tracker</a>
      <a href="https://github.com/tgold1/ghost-tracker-blog" target="_blank">Github Repo</a>
      </div>

      <div class="row col-sm-6 "style={{display: 'inline-block'}}>
      <a href="https://protected-dusk-26151.herokuapp.com/" target="_blank">
      <img src= {picture4} alt="picture of Note Taker" width={100} />The Note Taker</a>
      <a href="https://github.com/tgold1/Note-taker-app" target="_blank">Github Repo</a>
      </div>

      <div class="row col-sm-6 "style={{display: 'inline-block'}}> 
      <a href=" https://tgold1.github.io/weather-dashboard-api/" target="_blank">
      <img src= {picture5} alt="picture of Weather Dashboard" width={100} />Weather Dashboard</a>
      <a href="https://github.com/tgold1/weather-dashboard-api" target="_blank">Github Repo</a>
      </div>

      <div class="row col-sm-6 "style={{display: 'inline-block'}}>
      <a href="  https://tgold1.github.io/work-day-scheduler/" target="_blank">
      <img src= {picture6} alt="picture of Work Day Scheduler" width={100} />Workday Scheduler</a>
      <a href="https://github.com/tgold1/work-day-scheduler" target="_blank">Github Repo</a>
      </div>

    </div>
  );
}
