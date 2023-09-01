import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import TaskAside from "../component/SideBar";
import Footer from "../component/Footer";
import SideBar from "../component/AddTaskBar";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const TaskRender = () => {
  const [toggleAddTask, settoggleAddTask] = useState<boolean>(false);
  // const [toggleFunds, setToggleFunds] = useState(false);
  const AddTask = () => {
    settoggleAddTask(!toggleAddTask);
  }; 
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <Nav />
        <Outlet />
        <Footer />
      </div>
      {/* Sidebar content here */}
      <TaskAside AddTask={AddTask} />
      {/* ADD TASK overlay */}
      {toggleAddTask && (
        <div
          className="bg-black/60 w-full fixed top-0 left-0 z-10 h-screen"
          onClick={() => settoggleAddTask(false)}
        ></div>
      )}
      {/* sidemenu */}
      <div
        className={
          toggleAddTask
            ? "fixed h-screen w-full md:w-[300px]  top-0 right-0 bg-white z-10 duration-300"
            : "hidden"
        }
      >
        <AiOutlineClose
          onClick={() => settoggleAddTask(false)}
          size={20}
          className="absolute right-2 top-4"
        />
        <SideBar />
      </div>
    </div>
  );
};

export default TaskRender;
