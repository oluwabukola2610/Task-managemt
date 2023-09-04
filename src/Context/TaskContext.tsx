import { createContext, useEffect, useState } from "react"; // Import statements adjusted
import { AppContextProviderComponent, UserTask } from "../Types/Types";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL, token } from "../utils/api";

interface TaskContextValues {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tasks: UserTask;
  HandleAddTask: (e: React.FormEvent) => void;
  fetchedTasks: UserTask[];
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

  // const [AllTask, setAllTask] = useState<UserTask[]>([]);
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
      .post(`${BASE_URL}/api/tasks`, myTask, {
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
  const [fetchedTasks, setFetchedTasks] = useState<UserTask[]>([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/tasks`, {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setFetchedTasks(response.data.result);
          console.log(response.data.result);
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);
  const contextValue: TaskContextValues = {
    handleInputChange,
    tasks,
    HandleAddTask,
    fetchedTasks,
  };

  return (
    <TaskProvider.Provider value={contextValue}>
      {children}
    </TaskProvider.Provider>
  );
};

export default TaskContext; // You can export the TaskContext
