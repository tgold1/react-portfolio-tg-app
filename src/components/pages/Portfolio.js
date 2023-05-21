import React from 'react';
import picture from '../Jatescreenshot.png';
import picture2 from '../Techscreenshot.png'; 
import picture3 from '../Ghosttrackerscreenshot.png';
import picture4 from '../Notetakerscreenshot.png';
import picture5 from '../weatherdashscreenshot.png';
import picture6 from '../Workdayscreenshot.png';
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      
      <img src= {picture} alt="picture of text editor" width={300} />
      <img src= {picture2} alt="picture of tech Blog" width={300} />
      <img src= {picture3} alt="picture of Ghost Tracker" width={300} />
      <img src= {picture4} alt="picture of Note Taker" width={300} />
      <img src= {picture5} alt="picture of Weather Dashboard" width={300} />
      <img src= {picture6} alt="picture of Work Day Scheduler" width={300} />
    </div>
  );
}
