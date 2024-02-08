import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Rendered from "../components/Rendered";
import SortingComp from "../components/SortingComp";
import { useTasks } from "../contexts/TaskContext";

function Home() {
  const { setSorting } = useTasks();
  return (
    <div className="main">
      <SearchBar />
      <div className="top-main">
        <SortingComp />
        <Link to="/edit" className="new-task">
          + Add New Task
        </Link>
        <button className="new-task" onClick={() => setSorting("power")}>
          <span>
            <svg
              viewBox="0 -1 32 25"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon
                fill="none"
                points="23,1 11,1 9,19 13,19 11,31 23,11 19,11"
                stroke="#fff"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </span>
          Power Mode
        </button>
      </div>
      <Rendered />
    </div>
  );
}

export default Home;
