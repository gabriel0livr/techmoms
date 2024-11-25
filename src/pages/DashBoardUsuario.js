import React from 'react';
import FreelaData from '../components/DashboardUsuario/FreelaData';
import ProjectTable from '../components/DashboardUsuario/ProjectTable';
import Transactions from '../components/DashboardUsuario/Transactions';
import FooterDashboardusuario from '../components/DashboardUsuario/FooterDashboardUsuario';
import CoursesFreela from '../components/DashboardUsuario/coursesFreela';
import '../styles/DashboardUsuario/DashBoardUsuario.css';


function DashboardUsuario() {
    return (
        <div className="dashboard-usuario">
            <FreelaData />
            <CoursesFreela />
            <ProjectTable />
            <Transactions />
            <FooterDashboardusuario />
        </div>
    );
}

export default DashboardUsuario;