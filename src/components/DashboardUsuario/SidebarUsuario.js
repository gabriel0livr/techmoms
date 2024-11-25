import React from 'react';
import { MdSettings, MdLogout, MdEmail, MdDashboard, MdSchool, MdHome } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/DashboardUsuario/SidebarUsuario.css';

function Sidebar({ isExpanded }) {
  const location = useLocation();

  return (
    <nav className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <ul>
        <li className={location.pathname === '/DashboardUsuario' ? 'active' : ''}>
          <Link to="/DashboardUsuario">
            <MdDashboard className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Dashboard</span>
          </Link>
        </li>
        <li className={location.pathname === '/UserFeed' ? 'active' : ''}>
          <Link to="/UserFeed">
            <MdHome className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Feed</span>
          </Link>
        </li>
        <li className={location.pathname === '/ChatUser' ? 'active' : ''}>
          <Link to="/ChatUser">
            <MdEmail className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Chats</span>
          </Link>
        </li>
        <li className={location.pathname === '/Courses' ? 'active' : ''}>
          <Link to="/Courses">
            <MdSchool className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Cursos</span>
          </Link>
        </li>
      </ul>
      <div className="bottom-links">
        <li className={location.pathname === '.' ? 'active' : ''}>
          <Link to=".">
            <MdSettings className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Configurações</span>
          </Link>
        </li>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <MdLogout className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Logout</span>
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default Sidebar;