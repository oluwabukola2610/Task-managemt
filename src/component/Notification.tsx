import { UserTask } from "../Types/Types";

interface TaskListProps {
  fetchedTasks: UserTask[]; // Use the UserTask type for fetchedTask
}
const Notification: React.FC<TaskListProps> = ({ fetchedTasks }) => {
  const storedUserData = JSON.parse(localStorage.getItem("Userinfo") || "null");
  const firstName = storedUserData && storedUserData.firstName;
  // Function to generate notifications based on fetched tasks
  const generateNotifications = () => {
    const notifications = [];

    // Format today's date to match the date format in fetchedTasks
    const today = new Date().toISOString().slice(0, 10);

    // Check for pending tasks
    const pendingTasks = fetchedTasks.filter(
      (task) => task.status === "pending"
    );
    if (pendingTasks.length > 0) {
      notifications.push({
        text: `You have ${pendingTasks.length} pending task(s).`,
        date: "Today",
      });
    }

    // Check for tasks starting today
    const tasksStartingToday = fetchedTasks.filter(
      (task) => task.startDate === today
    );
    if (tasksStartingToday.length > 0) {
      notifications.push({
        text: `You have ${tasksStartingToday.length} task(s) starting today.`,
        date: "Today",
      });
    }

    // You can add more conditions and generate notifications as needed

    return notifications;
  };
  const notifications = generateNotifications();

  return (
    <div className="flex flex-col p-3 bg-white/75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <span className="flex justify-between border-b border-b-gray-400 p-2">
        <p>Notification</p>
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
