import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/AboutPage'} element={<AboutPage />} />
        </Routes>
    )
}

export default AppRoutes

