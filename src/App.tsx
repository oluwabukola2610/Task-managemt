import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import TaskRender from "./layout/TaskRender";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use TaskRender layout for all routes */}
        <Route element={<TaskRender />}>
          {/* Define your routes and their corresponding components */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
