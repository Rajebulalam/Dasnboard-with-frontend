import AllJobsTable from '../../../component/allJobsTable/AllJobsTable';
import DashboardHeader from '../../../component/dashboardHeader/DashboardHeader';
import './ViewAllJobs.css'

const ViewAllJobs = () => {
    return (
        <div className='view-all-jobs-wrapper'>

            {/* Header */}
            <div>
                <DashboardHeader />
            </div>

            {/* Table paRT */}
            <div className='all-jobs-part'>
                <h2>All Posted Jobs</h2>
                <div className='all-jobs-table common-style-3'>
                    <AllJobsTable />
                </div>
            </div>
        </div>
    );
};

export default ViewAllJobs;