import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import HomePage from "../Pages/HomePage/HomePage";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import MyReviews from "../Pages/DashboardPage/MyReviews/MyReviews";
import Dorms from "../Pages/DashboardPage/Dorms/Dorms";
import DormDetailViewWrapper from "../Components/DormList/DormItem/DormDetails/DormDetailViewWrapper/DormDetailViewWrapper";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "*", element: <ErrorPage/>},
            {path: "", element: <HomePage/>},
            {path: "about", element: <AboutPage/>},
            {path: "dashboard", element: <DashboardPage/>, children: [
                {path: "dorms", element: <Dorms/>},
                {path: "my-reviews", element: <MyReviews/>},
                {path: "/dashboard/dorms/:dormName", element: <DormDetailViewWrapper/>}
            ]}
        ]
    }
])