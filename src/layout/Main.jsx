import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Main;