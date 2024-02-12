/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState(function () {
    const value = JSON.parse(localStorage.getItem("tasks"));
    return value || [];
  });
  const [sorting, setSorting] = useState("default");
  const [query, setQuery] = useState("");

  useEffect(
    function () {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    [tasks]
  );

  return (
    // eslint-disable-next-line no-undef
    <TaskContext.Provider
      value={{ tasks, setTasks, sorting, setSorting, query, setQuery }}
    >
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
