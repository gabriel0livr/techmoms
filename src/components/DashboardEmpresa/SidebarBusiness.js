import React from 'react';
import { MdSettings, MdLogout, MdShoppingCart, MdEmail, MdDashboard, MdHome } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/DashboardBusiness/SidebarBusiness.css';

function SidebarBusiness({ isExpanded }) {
  const location = useLocation();

  return (
    <nav className={`sidebar-business ${isExpanded ? 'expanded' : ''}`}>
      <ul>
        <li className={location.pathname === '/DashBoardEmpresa' ? 'active' : ''}>
          <Link to="/DashBoardEmpresa">
            <MdDashboard className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Dashboard</span>
          </Link>
        </li>
        <li className={location.pathname === '/businessFeed' ? 'active' : ''}>
          <Link to="/businessFeed">
            <MdHome className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Feed</span>
          </Link>
        </li>
        <li className={location.pathname === '/chatBusiness' ? 'active' : ''}>
          <Link to="/chatBusiness">
            <MdEmail className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Chats</span>
          </Link>
        </li>
        <li className={location.pathname === '/postedProjects' ? 'active' : ''}>
          <Link to="/postedProjects">
            <MdShoppingCart className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Projetos</span>
          </Link>
        </li>
      </ul>
      <div className="bottom-links-business">
        <li className={location.pathname === '.' ? 'active' : ''}>
          <Link to=".">
            <MdSettings className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Configurações</span>
          </Link>
        </li>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <MdLogout className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Logout</span>
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default SidebarBusiness;