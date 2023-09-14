import { useContext } from "react";
import Avatar from "../assets/Avatar.svg";
import FemaleAvatar from "../assets/female-avatar.png";
import { TaskProvider } from "../Context/TaskContext";
import { BsCheckAll } from "react-icons/bs";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
interface HandleEditProps {
  selectedTaskId: string;
}
const HandleEdit: React.FC<HandleEditProps> = ({ selectedTaskId }) => {
  const contextValues = useContext(TaskProvider);

  if (!contextValues) {
    return null;
  }
  const {
    handleInputChange,
    tasks,
    deleteTask,
    markTaskAsCompleted,
    editTask,
    fetchedTasks,
    isloading,
  } = contextValues;

  const selectedTask = fetchedTasks.find((task) => task._id === selectedTaskId);
  const isTaskCompleted = selectedTask?.status === "completed" || false;

  const handleeditTask = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation checks for required fields (e.g., title, description)
    if (
      !tasks.title ||
      !tasks.description ||
      !tasks.startDate ||
      !tasks.category
    ) {
      toast.warn("Please fill in all required fields."); // Exit the function without submitting
    }
    if (!isTaskCompleted) {
      editTask(selectedTaskId, tasks);
      console.log(tasks);
    }
  };

  const handleDeleteTask = () => {
    deleteTask(selectedTaskId);
  };
  return (
    <>
      <h2 className="text-md text-gray-500 font-semibold p-4 border-b border-b-slate-300 shadow-sm">
        Edit Task
      </h2>
      {isTaskCompleted ? (
        <div className="text-red-700 font-semibold text-center mt-5">
          This task is marked as completed and cannot be edited.
        </div>
      ) : (
        <>
          <div className="flex space-x-4 px-4 py-3">
            <button
              onClick={() => markTaskAsCompleted(selectedTaskId)}
              className="btn h-5  hover:bg-green-800/60 bg-green-800/80 font-thin  text-sm text-gray-300"
            >
              <BsCheckAll />
              <span className="">Completed</span>
            </button>
            <button
              onClick={() => deleteTask(selectedTaskId)}
              className="btn h-5  font-thin  text-sm text-gray-500"
            >
              <MdOutlineDeleteForever />
              <span className="">Delete</span>
            </button>
          </div>
          <div className="flex flex-col  p-4">
            <form onSubmit={handleeditTask} className="space-y-3">
              <div className="relative">
                <label
                  htmlFor="title"
                  className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-400"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title" // Add name attribute to bind to the 'title' property
                  value={tasks.title} // Bind the value to tasks.title
                  onChange={handleInputChange} // Attach onChange event handler
                  className="border border-gray-200 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 focus:outline-none p-2 placeholder-gray-400 text-sm w-full"
                  placeholder="Add task here..."
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="des"
                  className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-400"
                >
                  Description
                </label>
                <input
                  id="des"
                  name="description"
                  value={tasks.description}
                  onChange={handleInputChange}
                  className="border border-gray-200 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 focus:outline-none p-2 placeholder-gray-400 text-sm w-full"
                  placeholder="Write your comment here..."
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="Startdate"
                  className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-400"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="Startdate"
                  name="startDate" // Add name attribute to bind to the 'title' property
                  value={tasks.startDate} // Bind the value to tasks.title
                  onChange={handleInputChange} // Attach onChange event handler
                  className="border border-gray-200 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 focus:outline-none p-2 placeholder-gray-500 text-sm w-full"
                  placeholder="7 April, 2023"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="category"
                  className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-400"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={tasks.category}
                  onChange={handleInputChange}
                  className="border border-gray-200 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 focus:outline-none p-2 placeholder-gray-400 text-sm w-full"
                  placeholder="Charts and Map"
                />
              </div>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-10">
                    <img src={FemaleAvatar} alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8">
                    <img src={Avatar} className="" alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10">
                    <img src={Avatar} className="" alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8 text-gray-600 text-center text-xl bg-gray-300">
                    +{" "}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="file" className="block text-sm text-gray-400 ">
                  Attachment
                </label>

                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-500 dark:text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              {!isloading ? (
                <button
                  type="submit"
                  className="btn btn-active bg-black text-white hover:bg-black/75 w-full"
                  aria-label="Edit Task"
                >
                  {" "}
                  <BiSolidEditAlt />
                  Edit Tasks
                </button>
              ) : (
                <button
                  className="w-full my-2 btn bg-gray-800/75"
                  disabled
                  aria-busy="true"
                  aria-label=" Editing... "
                >
                  <span className="loading loading-spinner"></span>
                  Editing...
                </button>
              )}
            </form>
          </div>
        </>
      )}
      {isTaskCompleted && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleDeleteTask}
            className="btn h-5  font-thin  text-sm text-gray-500 btn-active"
          >
            <MdOutlineDeleteForever />
            <span className="">Delete</span>
          </button>
        </div>
      )}
    </>
  );
};

export default HandleEdit;
