import Users from "../pages/users";
import Navbar from "../components/Navbar";
import Activities from "../pages/activities";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/users" element={<Users />} />0'
                <Route path="/activities" element={<Activities />} />
            </Routes> 
        </BrowserRouter>
    )
}

export default Router;