import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Users from "../pages/users";
import Navbar from "../components/Navbar";
import Activities from "../pages/activities";

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/activities" element={<Activities />} />
            </Routes> 
        </BrowserRouter>
    )
}

export default Router;