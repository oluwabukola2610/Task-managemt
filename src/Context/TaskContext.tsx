import { createContext, useState } from "react"; // Import statements adjusted
import { AppContextProviderComponent, UserTask } from "../Types/Types";
import axios from "axios";

interface TaskContextValues {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tasks: UserTask;
  HandleAddTask: (e: React.FormEvent) => void;
}
export const TaskProvider = createContext<TaskContextValues | null>(null);

const TaskContext: AppContextProviderComponent = ({ children }) => {
  const [tasks, setTasks] = useState<UserTask>({
    title: "",
    startDate: "",
    label: "", // Default label value
    attachment: null, // You can use FormData for file uploads
    comment: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTasks({
      ...tasks,
      [name]: value,
    });
  };
  const HandleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    const myTask = tasks;
    axios
      .post("https://task-manager-4qtw.onrender.com/api/tasks", myTask, {
        withCredentials: true,
      })
      .then((response) => {
        //  Access cookies from the response headers
        const cookies = response.headers;
        console.log("Cookies received:", cookies);
        console.log(response);
        // Handle success
        setTasks({
          title: "",
          startDate: "",
          label: "",
          attachment: null,
          comment: "",
        });
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding task:", error);
      });
  };

  const contextValue: TaskContextValues = {
    handleInputChange,
    tasks,
    HandleAddTask,
  };

  return (
    <TaskProvider.Provider value={contextValue}>
      {children}
    </TaskProvider.Provider>
  );
};

export default TaskContext; // You can export the TaskContext
