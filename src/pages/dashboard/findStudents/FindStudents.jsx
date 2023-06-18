import DashboardHeader from '../../../component/dashboardHeader/DashboardHeader';
import FindStudentsTable from '../../../component/findStudentsTable/FindStudentsTable';
import './FindStudents.css';

const FindStudents = () => {
    return (
        <div className="find-students-wrapper">

            {/* Header */}
            <div>
                <DashboardHeader />
            </div>
            <div className='dashboard-table'>
                <h2>Find Students</h2>

                {/* Table */}
                <FindStudentsTable />
            </div>
        </div>
    );
};

export default FindStudents;