import  { createContext } from "react"; // Import statements adjusted
import { AppContextProviderComponent } from "../Types/Types";



interface TaskContextValues {

}

export const TaskProvider = createContext<TaskContextValues | undefined>(
  undefined
);

const TaskContext: AppContextProviderComponent = ({ children }) => {
  

  const contextValue: TaskContextValues = {

  };

  return (
    <TaskProvider.Provider value={contextValue}>
      {children}
    </TaskProvider.Provider>
  );
};

export default TaskContext; // You can export the TaskContext
