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
  deleteTask: (tasksId: string) => void;
  editTask: (taskId: string, updatedTask: UserTask) => void;
  markTaskAsCompleted: (taskId: string) => void;
  isloading: boolean;
  generateNotifications: () => Notification[];
  // EditProfile: () => void;
}
interface Notification {
  text: string;
  date: string;
}

export const TaskProvider = createContext<TaskContextValues | null>(null);

const TaskContext: AppContextProviderComponent = ({ children }) => {
  const [tasks, setTasks] = useState<UserTask>({
    title: "",
    startDate: "",
    category: "",
    attachment: null,
    description: "",
    _id: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTasks({
      ...tasks,
      [name]: value,
    });
  };
  const [isloading, setIsloading] = useState(false);
  const HandleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);
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
          window.location.reload();
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding task:", error);
      })
      .finally(() => {
        setIsloading(false); // Set isLoading back to false when the API request is complete
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

  const deleteTask = (tasksId: string) => {
    console.log("Deleting task with ID:", tasksId);
    setIsloading(true);
    axios
      .delete(`${BASE_URL}/api/tasks/${tasksId}`, {
        // Use the tasks.id as the task ID
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Task deleted successfully");
          // Remove the deleted task from the fetchedTasks state
          setFetchedTasks((prevTasks) =>
            prevTasks.filter((task) => task._id !== tasksId)
          );
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting task:", error);
      })
      .finally(() => {
        setIsloading(false); // Set isLoading back to false when the API request is complete
      });
  };
  const editTask = (taskId: string, updatedTask: UserTask) => {
    const obj = {
      title: updatedTask.title,
      startDate: updatedTask.startDate,
      category: updatedTask.category,
      description: updatedTask.description,
    };
    setIsloading(true);
    console.log("editTask", taskId, obj);
    axios
      .patch(`${BASE_URL}/api/tasks/${taskId}`, obj, {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Task updated successfully");
          // Update the task in the fetchedTasks state
          setFetchedTasks((prevTasks) =>
            prevTasks.map((task) =>
              task._id === taskId ? { ...task, ...updatedTask } : task
            )
          );
        }
      })
      .catch((error) => {
        console.error( error);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const markTaskAsCompleted = (taskId: string) => {
    const updatedStatus = "completed";
    axios
      .patch(
        `${BASE_URL}/api/tasks/${taskId}`,
        { status: updatedStatus },
        {
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          // Update the status in the fetchedTasks state
          setFetchedTasks((prevTasks) =>
            prevTasks.map((task) =>
              task._id === taskId ? { ...task, status: updatedStatus } : task
            )
          );
        }
        console.log(updatedStatus);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error("Error marking task as completed:", error);
      });
  };

  // Function to generate notifications based on fetched tasks

  const generateNotifications = (): Notification[] => {
    const notifications = [];

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
    return notifications;
  };

  generateNotifications();
  // edit ptofile
  // const EditProfile = () => {
  //   axios
  //     .patch(`${BASE_URL}/api/profile`, {
  //       headers: {
  //         "Content-type": "application/json",
  //         authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);

  //       if (response.status === 200) {
  //         console.log(response);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error( error);
  //     })
  //     .finally(() => {
  //       setIsloading(false);
  //     });
  // };

  const contextValue: TaskContextValues = {
    handleInputChange,
    tasks,
    HandleAddTask,
    fetchedTasks,
    deleteTask,
    markTaskAsCompleted,
    editTask,
    isloading,
    generateNotifications,
    // EditProfile,
  };

  return (
    <TaskProvider.Provider value={contextValue}>
      {children}
    </TaskProvider.Provider>
  );
};

export default TaskContext; // You can export the TaskContext
