import { useContext } from "react";
import { TaskProvider } from "../Context/TaskContext";

// interface TaskListProps {
//   fetchedTasks: UserTask[]; // Use the UserTask type for fetchedTask
// }
const Notification = () => {
  const contextValues = useContext(TaskProvider);

  if (!contextValues) {
    return null;
  }
  const { generateNotifications } = contextValues;
  const storedUserData = JSON.parse(localStorage.getItem("Userinfo") || "null");
  const firstName = storedUserData && storedUserData.firstName;
 

  const notifications = generateNotifications();

  return (
    <div className="flex flex-col p-3 bg-white/75 shadow-[0_3px_10px_rgb(0,0,0,0.2)] m-[3rem] ">
      <span className="flex justify-between border-b border-b-gray-400 p-2">
        <p className="font-semibold">Notification</p>
        <p className="p-1 bg-pink-200 text-pink-300 font-semibold rounded-md">
          {notifications.length} New{" "}
        </p>
      </span>
      <div className="border-b p-1">
        <p className="text-gray-600 font-medium">
          Congratulation {firstName} 🎉
        </p>
        <div className="flex justify-between py-1">
          <p className="text-gray-400">Welcome to TaskTracker </p>
        </div>{" "}
      </div>
      {notifications.map((notification, index) => (
        <div key={index} className="border-b p-1">
          <p className="text-gray-600 font-medium">{notification.text}</p>
          <div className="flex justify-between py-1">
            <p className="text-gray-400">{notification.date}</p>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default Notification;
