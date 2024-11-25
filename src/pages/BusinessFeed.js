import React from 'react';
import NavbarBusiness from '../components/DashboardEmpresa/NavbarBusiness';
import BusinessWelcomeUser from '../components/BusinessFeed/BusinessWelcomeMessage';
import BusinessSearchAndFilter from '../components/BusinessFeed/BusinessSearchAndFilter';
import BusinessFreelaCategories from '../components/BusinessFeed/BusinessFreelaCategories';
import BusinessFreelasList from '../components/BusinessFeed/BusinessFreelasList';
import BusinessTopRatedFreelas from '../components/BusinessFeed/BusinessTopRatedFreelas';
import '../styles/BusinessFeed/BusinessFeed.css';
import FooterFeedBusiness from '../components/BusinessFeed/FooterFeedBusiness';

const BusinessFeed = () => {
  return (
    <div className="business-feed-page-container">
      <NavbarBusiness />
      <div className="business-feed-top">
        <BusinessWelcomeUser />
        <BusinessSearchAndFilter />
      </div>

      <div className="business-feed-mid">
        <div style={{ display: 'flex', gap: '2rem' }}>
          <BusinessFreelaCategories />
          <BusinessFreelasList />
        </div>
      </div>
      <div className="business-feed-bottom">
        <BusinessTopRatedFreelas />
      </div>
      <div>
        <FooterFeedBusiness />
      </div>
    </div>
  );
};

export default BusinessFeed;