/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useTasks } from "../contexts/taskContext";
import { useEffect, useState } from "react";

function ViewTask() {
  const { ids } = useParams();
  const { tasks, setTasks } = useTasks();

  const [task, setTask] = useState(function () {
    const filteredTask = tasks.filter((one) => one.id === +ids);
    return filteredTask || null;
  });

  console.log(task, tasks);
  const checked = task[0].subtask.filter((task) => task.checked);
  let percent = parseInt((checked.length / task[0].subtask.length) * 100);
  console.log(percent);

  useEffect(
    function () {
      setTask((task) => task.map((el) => ({ ...el, progress: percent })));
    },
    [percent]
  );

  useEffect(() => {
    setTasks((tasks) =>
      tasks.map((old) => (old.id === +ids ? { ...task[0] } : old))
    );
  }, [task, ids, setTasks]);

  return (
    <div className="main">
      <div className="view-wrapper">
        <p>
          <span className="detail-name">Task Name: </span>
          <span>{task[0].name}</span>
        </p>
        <p>
          <span className="detail-name">Due Date: </span>
          <span>{new Date(task[0].date).toLocaleString()}</span>
        </p>
        <p>
          <span className="detail-name">Priority: </span>
          <span>{task[0].priority}</span>
        </p>
        <p>
          <span className="detail-name">Complexity: </span>
          <span>{task[0].complexity}</span>
        </p>
        <RenderViewSubTasks subTask={task[0].subtask} setTask={setTask} />
      </div>
    </div>
  );
}

function RenderViewSubTasks({ subTask, setTask }) {
  function handleChecked(id) {
    const newSubTask = subTask.map((sub) =>
      sub.id === id ? { ...sub, checked: !sub.checked } : sub
    );
    setTask((task) => task.map((el) => ({ ...el, subtask: newSubTask })));
  }

  if (!subTask.length) return;
  return (
    <ul>
      {subTask.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            onChange={() => handleChecked(task.id)}
            checked={task.checked}
          />
          <span>{task.description}</span>
        </li>
      ))}
    </ul>
  );
}

export default ViewTask;
