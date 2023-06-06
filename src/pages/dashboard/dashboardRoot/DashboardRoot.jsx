import './DashboardRoot.css';
import { Link } from 'react-router-dom';
import avatarImage from '../../../assets/images/avatarImage.png';
import hatImage from '../../../assets/images/hats.png';
import colleges from '../../../assets/images/collegeHouse.png';
import companies from '../../../assets/images/companiesImage.png';
import Chart from '../../../component/barChart/Chart';

const DashboardRoot = () => {
    return (
        <div className="dashboard-root-wrapper">

            {/* Header Part */}
            <div className="dashboard-root-header display-2nd">
                <img src={avatarImage} alt="profileImage" />
            </div>

            {/* Number Detail Part */}
            <div className='number-wrapper'>

                {/* First */}
                <div className='first common-style'>

                    {/* Top */}
                    <div className='top display-3rd'>
                        <div>
                            <h3>133,456</h3>
                            <p>Students</p>
                        </div>
                        <div>
                            <img src={hatImage} alt="hatImage" />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className='bottom display-3rd'>
                        <p>+ 13.08%</p>
                        <Link to=''>View All</Link>
                    </div>
                </div>

                {/* Second */}
                <div className='second common-style'>

                    {/* Top */}
                    <div className='top display-3rd'>
                        <div>
                            <h3>32,600</h3>
                            <p>Colleges</p>
                        </div>
                        <div>
                            <img src={colleges} alt="colleges" />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className='bottom display-3rd'>
                        <p>+ 13.08%</p>
                        <Link to=''>View All</Link>
                    </div>
                </div>

                {/* Third */}
                <div className='third common-style'>

                    {/* Top */}
                    <div className='top display-3rd'>
                        <div>
                            <h3>152,030</h3>
                            <p>Companies</p>
                        </div>
                        <div>
                            <img src={companies} alt="companies" />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className='bottom display-3rd'>
                        <p>-1.08%</p>
                        <Link to=''>View All</Link>
                    </div>
                </div>
            </div>

            {/* Course and Queries */}
            <div className='course-queries-wrapper'>
                {/* Course Part */}
                <div className='course common-style'>
                    <div className='display-3rd'>
                        <h4>Course Sales</h4>
                        <Link to=''>View All</Link>
                    </div>
                    <div className='chart'>
                        <Chart />
                    </div>
                </div>

                {/* Queries Part */}
                <div className='queries common-style-2'>
                    <div className='display-3rd query-header'>
                        <h4>Recent Queries</h4>
                        <p><Link to=''>View All</Link></p>
                    </div>

                    <div className='refund'>
                        <div className='display-3rd common-style-2'>
                            <p>Need to refund of ....</p>
                            <p>4:32 PM</p>
                        </div>
                        <div className='display-3rd common-style-2'>
                            <p>Need to refund of ....</p>
                            <p>4:32 PM</p>
                        </div>
                        <div className='display-3rd common-style-2'>
                            <p>Need to refund of ....</p>
                            <p>4:32 PM</p>
                        </div>
                        <div className='display-3rd common-style-2'>
                            <p>Need to refund of ....</p>
                            <p>4:32 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardRoot;