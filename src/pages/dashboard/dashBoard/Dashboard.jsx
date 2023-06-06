import './Dashboard.css';
import { NavLink, Outlet } from 'react-router-dom';
import homeImage from '../../../assets/images/home.png';
import postJob from '../../../assets/images/postJob.png';
import viewAllJobs from '../../../assets/images/allJobs.png';
import allStudents from '../../../assets/images/students.png';
import findStudents from '../../../assets/images/findStudents.png';
import studentQueries from '../../../assets/images/studentQueries.png';
import searchByCollege from '../../../assets/images/searchByCollege.png';
import viewAllColleges from '../../../assets/images/viewAllColleges.png';
import findByColleges from '../../../assets/images/findColleges.png';
import collegeQueries from '../../../assets/images/collegeQueries.png';
import logout from '../../../assets/images/logout.png';

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">

            {/* Dashboard Sidebar */}
            <div className='sidebar-wrapper'>
                <h2>Percentage.com</h2>

                {/* Nav Link */}
                <NavLink to='' className={({ isActive }) =>
                    isActive ? "active" : "pending"
                }>
                    <img src={homeImage} alt="dashboardHome" />
                    Dashboard
                </NavLink>
                <p>Jobs</p>
                <NavLink to='/postJob' className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                }>
                    <img src={postJob} alt="postJobImage" />
                    Post a Job
                </NavLink>
                <NavLink to='/viewAllJobs' className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                }>
                    <img src={viewAllJobs} alt="postJobImage" />
                    View All Jobs
                </NavLink>
                <p>Students</p>
                <NavLink to='/allStudents' className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                }>
                    <img src={allStudents} alt="allStudent" />
                    View All Students
                </NavLink>
                <NavLink to='/findStudents' className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                }>
                    <img src={findStudents} alt="findStudents" />
                    Find Students
                </NavLink>
                <NavLink to='/studentQueries' className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                }>
                    <img src={studentQueries} alt="studentQueries" />
                    Student Queries
                </NavLink>
                <NavLink to='/searchCollege' className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                }>
                    <img src={searchByCollege} alt="searchCollege" />
                    Search by College
                </NavLink>
                <p>College</p>
                <NavLink to='/allColleges' className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                }>
                    <img src={viewAllColleges} alt="allColleges" />
                    View All Colleges
                </NavLink>
                <NavLink to='/findColleges' className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                }>
                    <img src={findByColleges} alt="findColleges" />
                    Find Colleges
                </NavLink>
                <NavLink to='/collegeQueries' className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                }>
                    <img src={collegeQueries} alt="collegeQueries" />
                    College Queries
                </NavLink>

                <div className='logout'>
                    <NavLink to='/logout' className={({ isActive }) =>
                        isActive ? 'active' : 'inactive'
                    }>
                        <img src={logout} alt="logout" />
                        Logout
                    </NavLink>
                </div>
            </div>

            {/* Dashboard Layout */}
            <div className='dashboard-layout'>
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;