/* eslint-disable react/prop-types */
function RenderSubTasks({ subTask, setSubTask }) {
  function handleSubDelete(id) {
    setSubTask((subTask) => subTask.filter((task) => task.id !== id));
  }

  if (!subTask.length) return;
  return (
    <ul>
      {subTask.map((task) => (
        <li key={task.id}>
          <span>{task.description}</span>
          <button className="close" onClick={() => handleSubDelete(task.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default RenderSubTasks;
