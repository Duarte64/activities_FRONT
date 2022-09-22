import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activities from "../pages/activities";
import Home from "../pages/home";
import Users from "../pages/users";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/activities" element={<Activities />} />
            </Routes> 
        </BrowserRouter>
    )
}

export default Router;