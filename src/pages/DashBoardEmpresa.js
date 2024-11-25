import React from 'react';
import SidebarBusiness from '../components/DashboardEmpresa/SidebarBusiness';
import BusinessData from '../components/DashboardEmpresa/BusinessData';
import Projects from '../components/DashboardEmpresa/Projects';
import FooterDashboardEmpresa from '../components/DashboardEmpresa/FooterDashboardEmpresa';
import '../styles/DashboardBusiness/DashboardBusiness.css';

function DashboardEmpresa() {
    return (
        <div className="dashboard-empresa">
            <SidebarBusiness /> 
            <BusinessData />
            <Projects />
            <FooterDashboardEmpresa />
        </div>
    );
}

export default DashboardEmpresa;