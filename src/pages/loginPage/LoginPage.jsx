import '../../component/commonStyle/CommonStyle.css';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import loginPageBackgroundImage from '../../assets/images/loginBackground.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { VisibilityOff } from '@mui/icons-material';

const LoginPage = () => {

    const navigate = useNavigate();

    // Password Functionality
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (e) => {
        setShowPassword(!showPassword);
        e.preventDefault();
    }

    /* Login Functionality */
    const loginHandle = (e) => {
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setPassword(password);

        if (email === 'khokan@gmail.com' && password === '123456') {
            document.getElementById('error-message').innerText = '';
            toast.success('Loin Successfully!');
            return navigate('dashboard');
        } else {
            document.getElementById('error-message').innerText = 'Please give the correct credential?';
        }

        e.preventDefault();
    }

    return (
        <div className='login-page-wrapper'>
            <img src={loginPageBackgroundImage} alt="backgroundImage" />
            <div className='inner-login-page'>
                <div className='login'>
                    <h2>Percentage.com</h2>
                    <form onSubmit={loginHandle} className='login-form'>
                        <div>
                            <label htmlFor="email">Username or Email</label>
                            <input type="email" required name="email" id="email" />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password">Password</label>
                            <div className='password'>
                                <input required type={showPassword ? password : 'password'} name="password" id="password" />
                                <button type="submit" onClick={togglePasswordVisibility} > {showPassword ? <VisibilityIcon /> : <VisibilityOff />} </button>
                            </div>
                        </div>
                        <span>
                            <Link to='/'>Forget password?</Link>
                        </span>

                        {/* Error Message */}
                        <p id='error-message'></p>

                        <div className='checkbox display-2nd'>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor='checkbox'>Remember me</label>
                        </div>

                        {/* Button Part */}
                        <div>
                            <button type="submit" id='lgn-btn'>Login</button>
                            <button type='submit' id='rgs-btn'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;