import React from "react";
import { UserTask } from "../Types/Types";
import { useNavigate } from "react-router-dom";

interface TaskListProps {
  fetchedTasks: UserTask[]; // Use the UserTask type for fetchedTask
}

const TaskList: React.FC<TaskListProps> = ({ fetchedTasks }) => {
  const navigate = useNavigate()
  if (!fetchedTasks || fetchedTasks.length === 0) {
    return (
      <div className="flex flex-col space-y-2 p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white/75">
        <h1 className="font-semibold py-2 text-gray-500">Today Task</h1>
        <p>No tasks available.</p>
      </div>
    );
  }

  // Slice the fetchedTasks array to display only the first 4 tasks
  const tasksToShow = fetchedTasks.slice(0, 4);

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tasksToShow.map((task, index) => (
        <div
          key={index}
          onClick={()=>navigate('/task')}
          className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-md space-y-2 text-[#32475C99] h-fit"
        >
          {/* Render task details */}
          <p
            style={{
              backgroundColor:
                task.status === "pending"
                  ? "#FFB6C1" // Red for pending
                  : task.status === "in progress"
                  ? "#FFFF00" // Yellow for in progress
                  : "#00FF00", // Green for completed
            }}
            className="w-fit p-2 rounded-full text-sm"
          >
            {task.category}
          </p>
          <p className="leading-6">{task.title}</p>
          <p>{task.description}</p>
          <p className="text-gray-500">Start Date: {task.startDate}</p>
        </div>
      ))}
    </article>
  );
};

export default TaskList;
