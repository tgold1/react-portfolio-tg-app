import React, {useState} from 'react';
// import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5'

// function MyApp() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({numPages}) {
//     setNumPages(numPages);
//   }
// }
export default function Home() {
  return (
    <div>
      <h1>Resume</h1>
      
      {/* <Document file="https://1drv.ms/w/s!AnzGKXC9XqbymAAb7d0O-BZmndDB?e=UWdEON" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber}/>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
<a href="https://1drv.ms/w/s!AnzGKXC9XqbymAAb7d0O-BZmndDB?e=UWdEON" target="_blank">Download my resume here</a>
      <h2>Front-End Proficiencies</h2>
      <p>
        . HTML<br/>
        . CSS<br/>
        . JavaScript<br/>
        . jquery<br/>
        . React<br/>
        . Bootstrap<br/>
      </p>

      <h2>Back-end Proficiencies</h2>
      <p>
        . APIs<br/>
        . Node<br/>
        . Express<br/>
        . MYSQL, Sequelize<br/>
        . MongoDB, Mongoose<br/>
        . GraphQL<br/>
      </p>
    </div>
  );
}
