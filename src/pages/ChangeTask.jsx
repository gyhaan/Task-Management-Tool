import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../contexts/TaskContext";
import Button from "../components/Button";
import DateTimePicker from "../components/DateTimePicker";
import RenderSubTasks from "../components/RenderSubTasks";
import InputSubTask from "../components/InputSubTask";

function ChangeTask() {
  const { ids } = useParams();
  const navigate = useNavigate();
  const { tasks, setTasks } = useTasks();
  const [task, setTask] = useState(function () {
    const filteredTask = tasks.filter((one) => one.id === +ids);
    return filteredTask || null;
  });

  console.log(task, tasks);

  const [subtask, setSubTask] = useState(task[0].subtask);
  const [taskName, setTaskName] = useState(task[0].name);
  const [priority, setPriority] = useState(task[0].priority);
  const [complexity, setComplexity] = useState(task[0].complexity);
  const [deadline, setDeadline] = useState(task[0].date);

  function handleSaveTask() {
    const updatedTask = {
      subtask: subtask,
      name: taskName,
      priority: priority,
      complexity: complexity,
      date: deadline,
    };

    setTask([updatedTask]); // Update local task state

    setTasks((tasks) =>
      tasks.map((task1) =>
        task1.id === +ids ? { ...task1, ...updatedTask } : task1
      )
    );

    navigate("/");
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
        <DateTimePicker setDeadline={setDeadline} deadline={deadline} />
        <label className="label-task">Subtasks</label>
        <InputSubTask setSubTask={setSubTask} />
        <RenderSubTasks subTask={subtask} setSubTask={setSubTask} />
        <button className="new-task" onClick={() => handleSaveTask()}>
          Save Task
        </button>
      </div>
    </div>
  );
}

export default ChangeTask;
