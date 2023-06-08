// import React from 'react';
import './PostAJob.css';
import DashboardHeader from '../../../component/dashboardHeader/DashboardHeader';
import savedImage from '../../../assets/images/saved.png';
import TextEditor from '../../../component/textEditor/TextEditor';
import cancel from '../../../assets/images/x.png';
import { useState } from 'react';

const PostAJob = () => {

    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : '');
    };


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
                <div className='post-details-wrapper'>
                    <div className="post-details">
                        <div className='first'>
                            <p>No of Post</p>
                            <div className='post display-3rd common-style-3'>
                                <button id='minus' type='submit'>-</button>
                                <span id='post-number'>40</span>
                                <button id='plus' type='submit'>+</button>
                            </div>
                            <p>Experience:</p>
                            <div className='experience display-3rd common-style-3'>
                                <span contentEditable >0 - 5</span>
                                <h6>Yrs</h6>
                            </div>
                        </div>

                        {/* Cities */}
                        <div className='second'>
                            <p>Cities</p>
                            <div className='cities'>
                                <span className='common-style-3'>Bengluru</span>
                                <span className='common-style-3'>Delhi</span>
                                <button className='common-style-3' id='add' type="submit">+</button>
                            </div>
                            <p>CTG Range:</p>
                            <div className='ctg common-style-3'>
                                <div className='display-3rd'>
                                    <span>From</span>
                                    <span>To</span>
                                </div>
                                <p contentEditable>5.0 - 25.0</p>
                            </div>
                        </div>
                    </div>

                    {/* Skill Needed */}
                    <div className='skill-wrapper'>
                        <p>Skill Needed:</p>
                        <div className='skill common-style-3'>
                            <div>
                                <p className='display'>
                                    <span>Java</span>
                                    <button > <img src={cancel} alt="cancel" /> </button>
                                </p>
                                <p className='display'>
                                    <span>Python</span>
                                    <button > <img src={cancel} alt="cancel" /> </button>
                                </p>
                                <p className='display'>
                                    <span>HTML</span>
                                    <button > <img src={cancel} alt="cancel" /> </button>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Languages Needed */}
                    <div className='languages-wrapper'>
                        <p>Languages Needed:</p>
                        <div className='language common-style-3'>
                            <div>
                                <p className='display'>
                                    <span>English</span>
                                    <button > <img src={cancel} alt="cancel" /> </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Test Structure Part */}
            <div className='test-structure'>
                <h2>Test Structure:</h2>

                {/* Round 1st */}
                <div className='round'>
                    <div className='first'>
                        <span className='title'>Round #1</span>
                        <p className='common-style-3'>Aptitude Round</p>
                    </div>
                    <div className='second'>
                        <span className='title'>Details</span>
                        <p className='common-style-3'>It contains 60 ques ...</p>
                    </div>
                    <div className='mark-time'>
                        <div>
                            <p className='title'>Marks</p>
                            <span className='common-style-3'>90</span>
                        </div>
                        <div>
                            <p className='title'>Time (min)</p>
                            <span className='common-style-3'>180</span>
                        </div>
                        <button type="submit">+</button>
                    </div>
                    <div className='fourth'>
                        <p className='title'>Upload Documents</p>
                        {/* <input className='common-style-3' type="file" name="document" id="document" accept=".pdf" /> */}
                        <label htmlFor="file-input" className="custom-file-input common-style-3">
                            <span className='upload'>{fileName || 'Upload'}</span>
                            <span className="file-info">Only PDF supported</span>
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            accept=".pdf"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>

                {/* Round 2 */}
                <div className='round'>
                    <div className='first'>
                        <span className='title'>Round #1</span>
                        <p className='common-style-3'>Aptitude Round</p>
                    </div>
                    <div className='second'>
                        <span className='title'>Details</span>
                        <p className='common-style-3'>It contains 60 ques ...</p>
                    </div>
                    <div className='mark-time'>
                        <div>
                            <p className='title'>Marks</p>
                            <span className='common-style-3'>90</span>
                        </div>
                        <div>
                            <p className='title'>Time (min)</p>
                            <span className='common-style-3'>180</span>
                        </div>
                        <button type="submit">+</button>
                    </div>
                    <div className='fourth'>
                        <p className='title'>Upload Documents</p>
                        {/* <input className='common-style-3' type="file" name="document" id="document" accept=".pdf" /> */}
                        <label htmlFor="file-input" className="custom-file-input common-style-3">
                            <span className='upload'>{fileName || 'Upload'}</span>
                            <span className="file-info">Only PDF supported</span>
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            accept=".pdf"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostAJob;