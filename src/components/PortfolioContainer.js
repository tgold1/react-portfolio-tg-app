import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './footer';
import Header from './header';
import Resume from './pages/Resume';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import styles from './styles/styles.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Aboutme');
  
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  
  };
  const renderFooter = () => {
    return Footer
  }

  const renderHeader = () => {
    return Header
  }
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}{renderHeader()}
      {renderFooter()}
    </div>
  );
 
}
