/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [sorting, setSorting] = useState("default");

  return (
    // eslint-disable-next-line no-undef
    <TaskContext.Provider value={{ tasks, setTasks, sorting, setSorting }}>
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TaskContext);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { TaskContextProvider, useTasks };
