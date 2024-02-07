/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

function InputSubTask({ setSubTask }) {
  const [description, setDescription] = useState("");
  const inputEl = useRef(null);

  function handleSubTasks() {
    if (!description) return;
    setSubTask((subTask) => [
      ...subTask,
      { description, checked: false, id: Date.now() },
    ]);
    setDescription("");
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement === inputEl.current && e.code === "Enter") {
        handleSubTasks();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubTasks]);

  return (
    <div className="sub-tasks">
      <input
        type="text"
        className="input-subtask"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ref={inputEl}
      />
      <button className="add-subtask" onClick={handleSubTasks}>
        +
      </button>
    </div>
  );
}

export default InputSubTask;
