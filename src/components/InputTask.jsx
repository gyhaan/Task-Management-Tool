import { useState } from "react";
import Button from "../components/Button";
import DateTimePicker from "./DateTimePicker";
import InputSubTask from "./InputSubTask";
import RenderSubTasks from "./RenderSubTasks";
import { useTasks } from "../contexts/taskContext";
import { useNavigate } from "react-router-dom";

function InputTask() {
  const [subtask, setSubTask] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState(1);
  const [complexity, setComplexity] = useState(1);
  const [deadline, setDeadline] = useState(undefined);

  const { setTasks } = useTasks();
  const navigate = useNavigate();

  function handleSaveTask() {
    if (taskName && deadline) {
      setTasks((tasks) => [
        ...tasks,
        {
          id: Date.now(),
          name: taskName,
          date: deadline,
          complexity: complexity,
          priority: priority,
          subtask: subtask,
          progress: 0,
        },
      ]);
      navigate("/");
    } else {
      alert("Please add both the Task Name and Due Date.");
    }
  }

  return (
    <div className="wrapper-2">
      <div className="add">
        <label className="label-task">Add a task</label>
        <input
          type="text"
          className="input-task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label className="label-task">Priority Level</label>
        <Button
          className="button"
          something={priority}
          setSomething={setPriority}
        />
        <label className="label-task">Complexity Level</label>
        <Button
          className="button"
          something={complexity}
          setSomething={setComplexity}
        />
        <label className="label-task">Due Date</label>
        <DateTimePicker setDeadline={setDeadline} />
        <label className="label-task">Subtasks</label>
        <InputSubTask setSubTask={setSubTask} />
        <RenderSubTasks subTask={subtask} setSubTask={setSubTask} />
        <button className="new-task" onClick={handleSaveTask}>
          Save Task
        </button>
      </div>
    </div>
  );
}

export default InputTask;
