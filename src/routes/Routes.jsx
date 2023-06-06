import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import LoginPage from "../pages/loginPage/LoginPage";
import Dashboard from "../pages/dashboard/dashBoard/dashboard";
import DashboardRoot from "../pages/dashboard/dashboardRoot/DashboardRoot";

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
                    }
                ]
            }
        ]
    },
]);

export default router;