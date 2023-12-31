import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import TaskRender from "./layout/TaskRender";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Notification from "./pages/Notification";
import User from "./pages/User";

const App = () => {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>

        {/* Use TaskRender layout for all routes */}
        <Route element={<TaskRender />}>
          {/* Define your routes and their corresponding components */}
          <Route path="/dashbord" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/user" element={<User />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
