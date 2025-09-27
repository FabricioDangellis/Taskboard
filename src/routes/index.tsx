import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NewTask from "../pages/NewTesk/NewTask";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/task/new" element={<NewTask/>}/>
            </Routes>
        </BrowserRouter>
    );
}