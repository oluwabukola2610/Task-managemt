import { UserTask } from "../Types/Types";
import Avatar from "../assets/Avatar.svg";
interface TaskListProps {
  fetchedTasks: UserTask[]; // Use the UserTask type for fetchedTask
}

const TaskList: React.FC<TaskListProps> = ({ fetchedTasks }) => {
  
  if (!fetchedTasks) {
    return (
      <div className="flex flex-col space-y-2 p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white/75">
        <h1 className="font-semibold py-2 text-gray-500">Today Task</h1>
        {/* You can add a message or UI here to indicate that there are no tasks */}
        <p>No tasks available.</p>
      </div>
    );
  }


  return (
    <div className="flex flex-col space-y-2 p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white/75">
      <h1 className="font-semibold py-2 text-gray-500">Today Task</h1>
      {fetchedTasks.map((task, index) => (
        <div key={index}>
          <div className="flex items-center justify-between">
            <span className="flex space-x-2 items-center">
              <div className="h-2 w-2 bg-red-500 rounded-full"></div>
              <p>{task.title}</p>{" "}
            </span>
            <p className="text-gray-400">{task.startDate}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border-r border-gray-300 h-full"></div>
            <p className="text-gray-400">{task.comment}</p>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={Avatar} alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ... more divs */}
    </div>
  );
};

export default TaskList;
