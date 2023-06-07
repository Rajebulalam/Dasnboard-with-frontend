import './DashboardHeader.css';
import profileImage from '../../assets/images/avatarImage.png';

const DashboardHeader = () => {
    return (
        <div className="dashboard-header-wrapper display-3rd common-style-2">
            <div>
                <p>Back</p>
            </div>
            <div>
                <img src={profileImage} alt="profileImage" />
            </div>
        </div>
    );
};

export default DashboardHeader;