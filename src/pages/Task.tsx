import { useContext, useState } from "react";
import { AiOutlineClose, AiFillEdit } from "react-icons/ai";
import HandleEdit from "../component/HandleEdit";
import { TaskProvider } from "../Context/TaskContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Task = () => {
  const [toggleEdit, setToggleEdit] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Tasks");

  const contextValues = useContext(TaskProvider);

  if (!contextValues) {
    return null;
  }
  const { fetchedTasks } = contextValues;

  const statusValues = ["All Tasks", "in progress", "pending", "completed"];
  // Calculate task counts using reduce
  const taskCounts = statusValues.reduce((counts, status) => {
    counts[status] =
      status === "All Tasks"
        ? fetchedTasks.length
        : fetchedTasks.filter((task) => task.status === status).length;
    return counts;
  }, {} as Record<string, number>);

  return (
    <main className="flex flex-col p-3 h-screen bg-[#F5F5F9] overflow-y-scroll">
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
      <article className="flex flex-col space-y-4">
        <header className="flex justify-between bg-white p-3 rounded-md ">
          {statusValues.map((status, index) => (
            <button
              key={index}
              onClick={() => setSelectedStatus(status)}
              className={`leading-6 font-semibold hover:underline ${
                selectedStatus === status ? "text-green-600" : "text-gray-600"
              }`}
            >
              {status} ({taskCounts[status]})
            </button>
          ))}
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fetchedTasks
            .filter((task) =>
              selectedStatus === "All Tasks"
                ? true
                : task.status === selectedStatus
            )
            .map((task, taskIndex) => (
              <div
                key={taskIndex}
                className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-md space-y-4 text-[#32475C99] "
              >
                <div className="flex justify-between items-center">
                  <p
                    style={{
                      backgroundColor:
                        task.status === "pending"
                          ? "#FFB6C1" // Red for pending
                          : task.status === "in progress"
                          ? "#FFFF00" // Yellow for in progress
                          : "#00FF00", // Green for completed
                    }}
                    className=" w-fit p-2 rounded-full text-sm text-gray-600 lowercase"
                  >
                    {task.category}
                  </p>
                  <div
                    onClick={() => {
                      setSelectedTaskId(task._id); // Set the selected task ID
                      setToggleEdit(true);
                    }}
                  >
                    <AiFillEdit />
                  </div>
                </div>

                <p className="leading-6 font-semibold text-gray-800 capitalize ">
                  {task.title}
                </p>
                <p className="text-sm ">{task.description}</p>
                <p className="text-gray-500">Start Date: {task.startDate}</p>
              </div>
            ))}
        </div>
      </article>

      {/* ADD EDIT overlay */}
      {toggleEdit && (
        <div
          className="bg-black/60 w-full fixed top-0 left-0 z-10 h-screen"
          onClick={() => setToggleEdit(false)}
        ></div>
      )}

      {/* Side menu */}
      <div
        className={
          toggleEdit
            ? "fixed h-screen w-full md:w-[300px]  top-0 right-0 bg-white z-10 duration-300"
            : "hidden"
        }
      >
        <AiOutlineClose
          onClick={() => setToggleEdit(false)}
          size={20}
          className="absolute right-2 top-4"
        />
        <HandleEdit selectedTaskId={selectedTaskId} />
      </div>
    </main>
  );
};

export default Task;
