import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NewTask from "../pages/NewTesk/NewTask";
import TaskDetail from "../pages/TaskDetail/TaskDetail";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/task/new" element={<NewTask/>}/>
                <Route path="/task/:id" element={<TaskDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
}