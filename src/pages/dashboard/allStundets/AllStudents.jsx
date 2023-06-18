import './AllStudents.css';
import DashboardHeader from "../../../component/dashboardHeader/DashboardHeader";
import AllStudentsTable from '../../../component/allStudentsTable/AllStudentsTable';

const AllStudents = () => {
    return (
        <div className="all-students-wrapper">

            {/* Header */}
            <div>
                <DashboardHeader />
            </div>

            {/* All Students Layout */}
            <div className='inner-all-students'>
                <h2 className='title'>All Students List</h2>

                {/* All Students Table */}
                <div>
                    <AllStudentsTable />
                </div>
            </div>
        </div>
    );
};

export default AllStudents;