// import React from 'react';
import './PostAJob.css';
import DashboardHeader from '../../../component/dashboardHeader/DashboardHeader';
import savedImage from '../../../assets/images/saved.png';
import TextEditor from '../../../component/textEditor/TextEditor';

const PostAJob = () => {
    return (
        <div className='post-job-wrapper '>

            {/* Header Component */}
            <DashboardHeader />

            {/* Button Part */}
            <div className='btn-part'>
                <button id='cancel' type="submit">Cancel</button>
                <button id='submit' type="submit">Submit</button>
            </div>

            {/* Title Part */}
            <div className='job-title-part'>
                <h5>Job Title:</h5>
                <h2>Junior Backend Developer</h2>
            </div>

            {/* Job Details Part */}
            <div className='job-details-part'>
                {/* Job Description */}
                <div className='job-description'>
                    <div className='display-3rd'>
                        <p>Job Description</p>
                        <span>
                            <img src={savedImage} alt="saveImage" />
                            Saved
                        </span>
                    </div>
                    <div className='editor common-style-2'>
                        <TextEditor />
                    </div>
                </div>

                {/* Post Details */}
                <div>
                    <h2>Details</h2>
                </div>
            </div>
        </div>
    );
};

export default PostAJob;