import React from 'react';
import picture from '../IMG_0269.jpg';

export default function About() {
  return (
    <div>
      <h1>About Me </h1>
      <img src= {picture} alt="picture of Tim Gold" width={150} />
      <p>
        For the past eleven years I have been working in the non-profit sector. The highlight for me has been the
        ability to meet people from all across the globe. The decision was made to shift my career to a passion
        of mine coding. Specifically to learn web development and receive training in HTML, CSS, and JavaScript.
        This is why I chose to enroll in the full-stack bootcamp to gain valuable training and experience in the
        deployment of webpages.<br/>
        <br/>
        The experience I have gained over the years is demonstrated in my leadership
        ability, teaching others, being able to collaborate well wtih a team, a passion to fulfill the mission, and the trust to complete the
        task. I am a family man with a wife, and two sons living in the Philadelphia area. I have the drive to succeed
        and I look forward to being a part of the world of web development.
      </p>
    </div>
  );
}
