import Users from "../pages/users";
import Navbar from "../components/Navbar";
import Activities from "../pages/activities";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        //  @ts-ignore
        <BrowserRouter>
            <Navbar />
            {/* 
  // @ts-ignore */}
            <Routes>
                {/* 
  // @ts-ignore */}
                <Route path="/" element={<Users />} />
                {/* 
  // @ts-ignore */}
                <Route path="/users" element={<Users />} />
                {/* 
  // @ts-ignore */}
                <Route path="/activities" element={<Activities />} />
            </Routes> 
        </BrowserRouter>
    )
}

export default Router;