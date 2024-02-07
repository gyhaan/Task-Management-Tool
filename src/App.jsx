import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskContextProvider } from "./contexts/TaskContext";
import Home from "./pages/Home";
import EditTask from "./pages/AddTask";
import ViewTask from "./pages/ViewTask";
import ChangeTask from "./pages/ChangeTask";

function App() {
  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="edit" element={<EditTask />} />
          <Route path="view/:ids" element={<ViewTask />} />
          <Route path="change/:ids" element={<ChangeTask />} />
        </Routes>
      </BrowserRouter>
    </TaskContextProvider>
  );
}

export default App;
