import './Dashboard.css';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">

            {/* Dashboard Sidebar */}
            <div className='sidebar-wrapper'>
                <h2>Percentage.com</h2>

                {/* Nav Link */}
                <NavLink className={({ isActive }) => {
                    isActive ? 'active' : 'inactive'
                }}>
                    Dashboard
                </NavLink>
            </div>

            {/* Dashboard Layout */}
            <div className='dashboard-layout'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;