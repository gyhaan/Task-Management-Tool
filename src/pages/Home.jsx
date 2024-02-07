import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Rendered from "../components/Rendered";
import SortingComp from "../components/SortingComp";

function Home() {
  return (
    <div className="main">
      <SearchBar />
      <div className="top-main">
        <SortingComp />
        <Link to="/edit" className="new-task">
          Add New Task
        </Link>
      </div>
      <Rendered />
    </div>
  );
}

export default Home;
