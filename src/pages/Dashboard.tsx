import { useContext } from "react";
import workmode from "../assets/Working-pana-removebg.png";
import Calender from "../component/Calender";
import TaskList from "../component/TaskList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TaskProvider } from "../Context/TaskContext";
import Notification from "../component/Notification";

const Dashboard = () => {
  const contextValues = useContext(TaskProvider);

  if (!contextValues) {
    return null;
  }
  const { fetchedTasks } = contextValues;

  // Retrieve user data from local storage
  const storedUserData = JSON.parse(localStorage.getItem("Userinfo") || "null");
  const firstName = storedUserData && storedUserData.firstName;
  // Calculate total tasks and filter by status
  const totalTasks = fetchedTasks.length;
  const pendingTasks = fetchedTasks.filter(
    (task) => task.status === "pending"
  ).length;
  const inProgressTasks = fetchedTasks.filter(
    (task) => task.status === "in progress"
  ).length;
  const completedTasks = fetchedTasks.filter(
    (task) => task.status === "completed"
  ).length;

 


  return (
    <main className="mx-auto max-w-[1640px] flex flex-col gap-8 p-3 h-screen bg-[#F5F5F9] overflow-y-scroll">
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        newestOnTop={false}
        autoClose={1000}
        rtl={false}
        draggable
        style={{
          top: "10%",
          transform: "translateY(-50%)",
          width: "fit-content",
        }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,370px] gap-4 ">
        <article className="flex flex-col space-y-7  ">
          <div className="flex flex-col md:flex-row items-center text-center md:text-start justify-between px-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
            <span className="space-y-2 pt-4">
              <h1 className="font-bold text-2xl">Hello {firstName} 🎉</h1>
              <p className="max-w-xs text-gray-500">
                Get things done and start your day more productive
              </p>
            </span>
            <img src={workmode} alt="" className="flex w-[170px] h-[170px]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <span className="p-4 rounded-sm flex flex-col items-center space-y-3 bg-white/75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h2 className="font-semibold">{totalTasks}</h2>
              <p className="text-gray-400">Total Tasks</p>
            </span>
            <span className="p-4 rounded-sm flex flex-col items-center space-y-3 bg-white/75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h2 className="font-semibold">{pendingTasks}</h2>
              <p className="text-gray-400">Pending</p>
            </span>
            <span className="p-4 rounded-sm flex flex-col items-center space-y-3 bg-white/75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h2 className="font-semibold">{inProgressTasks}</h2>
              <p className="text-gray-400">In Progress</p>
            </span>
            <span className="p-4 rounded-sm flex flex-col items-center space-y-3 bg-white/75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h2 className="font-semibold">{completedTasks}</h2>
              <p className="text-gray-400">Completed</p>
            </span>
          </div>
        </article>
        {/* Notification   */}
        <Notification fetchedTasks={fetchedTasks} />
      </div>
      {/* task part */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,370px] gap-4 ">
        <TaskList fetchedTasks={fetchedTasks} />
        {/* calender */}
        <Calender />
      </div>
    </main>
  );
};

export default Dashboard;
