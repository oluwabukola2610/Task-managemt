import { useContext } from "react";
import { TaskProvider } from "../Context/TaskContext";
const AddTaskBar = () => {
  const contextValues = useContext(TaskProvider);

  if (!contextValues) {
    // Handle the case where the context is not yet available, if needed.
    return null;
  }

  const { handleInputChange, tasks, HandleAddTask, isloading } = contextValues;

  return (
    <>
      <h2 className="text-md text-gray-500 font-semibold p-4 border-b border-b-slate-300 shadow-sm">
        New Task
      </h2>
      <div className="flex flex-col  p-4">
        <form onSubmit={HandleAddTask} className="space-y-7">
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
              name="startDate"
              value={tasks.startDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]} // Set min to today's date
              className="border border-gray-200 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 focus:outline-none p-2 placeholder-gray-500 text-sm w-full"
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
          {!isloading ? (
            <button
              type="submit"
              className="btn btn-active bg-black text-white hover:bg-black/75 w-full"
              aria-label="Add Task"
            >
              Add Tasks
            </button>
          ) : (
            <button
              className="w-full my-2 btn bg-gray-800/75"
              disabled
              aria-busy="true"
              aria-label="Adding Task..."
            >
              <span className="loading loading-spinner"></span>
              Adding Task...
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddTaskBar;
