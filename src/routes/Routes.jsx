import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import LoginPage from "../pages/loginPage/LoginPage";
import Dashboard from "../pages/dashboard/dashBoard/Dashboard";
import DashboardRoot from "../pages/dashboard/dashboardRoot/DashboardRoot";
import PostAJob from "../pages/dashboard/postAJob/PostAJob";
import ViewAllJobs from "../pages/dashboard/viewAllJobs/ViewAllJobs";
import AllStudents from "../pages/dashboard/allStundets/AllStudents";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <LoginPage />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
                children: [
                    {
                        path: '',
                        element: <DashboardRoot />
                    },
                    {
                        path: 'dashboard/postJob',
                        element: <PostAJob />
                    },
                    {
                        path: 'dashboard/viewAllJobs',
                        element: <ViewAllJobs />
                    },
                    {
                        path: 'dashboard/allStudents',
                        element: <AllStudents />
                    }
                ]
            }
        ]
    },
]);

export default router;