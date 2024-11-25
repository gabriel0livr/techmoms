import React from 'react';
import NavbarDashboard from '../components/DashboardUsuario/NavbarUsuario';
import WelcomeMessage from '../components/UserFeed/WelcomeMessage';
import SearchAndFilterBar from '../components/UserFeed/SearchAndFilterBar';
import JobCategories from '../components/UserFeed/JobCategories';
import JobList from '../components/UserFeed/JobList';
import TopRatedCompanies from '../components/UserFeed/TopRatedCompanies';
import '../styles/UserFeed/UserFeed.css';
import FooterFeedUser from '../components/UserFeed/FooterFeedUser';

const UserFeed = () => {
  return (
    <div className="user-feed-page-container">
      <NavbarDashboard />
      <div className="user-feed-top">
        <WelcomeMessage />
        <SearchAndFilterBar />
      </div>

      <div className="user-feed-mid">
        <div style={{ display: 'flex', gap: '2rem' }}>
          <JobCategories />
          <JobList />
        </div>
      </div>
      <div className="user-feed-bottom">
        <TopRatedCompanies />
      </div>
      <div>
        <FooterFeedUser />
      </div>
    </div>
  );
};

export default UserFeed;
