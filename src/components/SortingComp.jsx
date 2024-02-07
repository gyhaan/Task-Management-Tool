import { useTasks } from "../contexts/TaskContext";

function SortingComp() {
  const { sorting, setSorting } = useTasks();

  return (
    <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
      <option value="default">Default</option>
      <option value="Ascending Date">Ascending Date</option>
      <option value="Descending Date">Descending Date</option>
      <option value="Ascending Complexity">Ascending Complexity</option>
      <option value="Descending Complexity">Descending Complexity</option>
      <option value="Ascending Priority">Ascending Priority</option>
      <option value="Descending Priority">Descending Priority</option>
    </select>
  );
}

export default SortingComp;
