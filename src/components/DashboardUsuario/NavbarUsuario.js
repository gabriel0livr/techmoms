import React, { useState } from 'react';
import { FiMenu, FiSearch, FiBell, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../../styles/DashboardUsuario/NavbarUsuario.css';
import Sidebar from './SidebarUsuario';

function NavbarDashboard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="navbar-dash-container">
      <Sidebar isExpanded={isExpanded} />
      <div className="navbar-dash">
        <div className="navbar-left-dash">
          <FiMenu className="menu-icon-nav" onClick={toggleSidebar} />
          <div className="navbar-logo"><a href="/">TechMom</a></div>
        </div>
        
        <div className="navbar-center-dash">
          <div className="search-bar-dash">
            <FiSearch className="search-icon-dash" />
            <input type="text" placeholder="Buscar" />
          </div>
        </div>
        
        <div className="navbar-right-dash">
          <FiBell className="icon-dash" />
          <FiMail className="icon-dash" />
          <div className="user-info-dash">
            <span className="user-role">Maria Eduarda</span>
            <Link to="/userProfile">
              <div className="user-avatar-dash"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarDashboard;