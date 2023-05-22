
import React from 'react';
import './styles/NavTabs.css';

const styles = {
  navTabsStyle: {
    backgroundColor: 'green',
    justifyContent: 'flex-left',
    color: 'green',
    textAlign: 'right',
  },
};
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={{textAlign:"right"}}>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('Aboutme')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
   
  );
  <footer class="footer">

  <nav>
      <ul>
          <li>
              <a href="https://stackoverflow.com/users/21932519/tgfullstack">Stackoverflow</a>
          </li>
          <li>
              <a href="https:github.com/tgold1">Github</a>
          </li>
          <li>
              <a href="https:linkedin.com/in/tim-gold-81a9164a">Linkedin</a>
          </li>
      </ul>
  </nav>
  
  </footer>
}

export default NavTabs;
