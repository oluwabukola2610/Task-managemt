import { createContext, useState } from "react"; // Import statements adjusted
import { AppContextProviderComponent, UserTask } from "../Types/Types";
import { toast } from "react-toastify";
import axios from "axios";

interface TaskContextValues {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tasks: UserTask;
  HandleAddTask: (e: React.FormEvent) => void;
  getAllTask: () => void;
  AllTask: UserTask[];
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

  const [AllTask, setAllTask] = useState<UserTask[]>([]);
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
    const token = JSON.parse(localStorage.getItem("token") || "null");
    axios
      .post("https://task-manager-4qtw.onrender.com/api/tasks", myTask, {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
        }
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
  const getAllTask = () => {
    const token = JSON.parse(localStorage.getItem("token") || "null");
    axios
      .get("https://task-manager-4qtw.onrender.com/api/tasks", {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setAllTask(response.data.results);
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
      console.log(AllTask)
  };

  const contextValue: TaskContextValues = {
    handleInputChange,
    tasks,
    HandleAddTask,
    getAllTask,
    AllTask,
  };

  return (
    <TaskProvider.Provider value={contextValue}>
      {children}
    </TaskProvider.Provider>
  );
};

export default TaskContext; // You can export the TaskContext
