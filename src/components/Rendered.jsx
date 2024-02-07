import { Link } from "react-router-dom";
import { useTasks } from "../contexts/TaskContext";

function Rendered() {
  const { tasks, sorting } = useTasks();
  let sorted;

  if (sorting === "default") {
    sorted = tasks;
  } else if (sorting === "Ascending Date") {
    sorted = tasks.slice().sort((a, b) => a.date - b.date);
  } else if (sorting === "Descending Date") {
    sorted = tasks.slice().sort((a, b) => b.date - a.date);
  } else if (sorting === "Ascending Complexity") {
    sorted = tasks.slice().sort((a, b) => a.complexity - b.complexity);
  } else if (sorting === "Descending Complexity") {
    sorted = tasks.slice().sort((a, b) => b.complexity - a.complexity);
  } else if (sorting === "Ascending Priority") {
    sorted = tasks.slice().sort((a, b) => a.priority - b.priority);
  } else {
    sorted = tasks.slice().sort((a, b) => b.priority - a.priority);
  }

  function getLevel(num) {
    if (num < 5) return "Low";
    if (num >= 5 && num < 8) return "Medium";
    if (num > 8) return "High";
  }

  return sorted.map((task) => (
    <div className="container" key={task.id}>
      <div className="top">
        <div className="to-do">
          <p className="title">
            <span className="dot">&#11044;</span> {task.name}
          </p>
          <div className="buttons">
            <Link to={`view/${task.id}`}>
              <button className="edit">
                <svg
                  fill="none"
                  height="28"
                  viewBox="0 0 35 24"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M17.7469 15.4149C17.9855 14.8742 18.1188 14.2724 18.1188 14.0016C18.1188 11.6544 16.2952 9.7513 14.046 9.7513C11.7969 9.7513 9.97332 11.6544 9.97332 14.0016C9.97332 16.3487 12.0097 17.8886 14.046 17.8886C15.3486 17.8886 16.508 17.2515 17.2517 16.2595C17.4466 16.0001 17.6137 15.7168 17.7469 15.4149ZM14.046 15.7635C14.5551 15.7635 15.0205 15.5684 15.3784 15.2457C15.81 14.8566 16 14.2807 16 14.0016C16 12.828 15.1716 11.8764 14.046 11.8764C12.9205 11.8764 12 12.8264 12 14C12 14.8104 12.9205 15.7635 14.046 15.7635Z"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d="M1.09212 14.2724C1.07621 14.2527 1.10803 14.2931 1.09212 14.2724C0.96764 14.1021 0.970773 13.8996 1.09268 13.7273C1.10161 13.7147 1.11071 13.7016 1.11993 13.6882C4.781 8.34319 9.32105 5.5 14.0142 5.5C18.7025 5.5 23.2385 8.33554 26.8956 13.6698C26.965 13.771 27 13.875 27 13.9995C27 14.1301 26.9593 14.2399 26.8863 14.3461C23.2302 19.6702 18.6982 22.5 14.0142 22.5C9.30912 22.5 4.75717 19.6433 1.09212 14.2724ZM3.93909 13.3525C3.6381 13.7267 3.6381 14.2722 3.93908 14.6465C7.07417 18.5443 10.6042 20.3749 14.0142 20.3749C17.4243 20.3749 20.9543 18.5443 24.0894 14.6465C24.3904 14.2722 24.3904 13.7267 24.0894 13.3525C20.9543 9.45475 17.4243 7.62513 14.0142 7.62513C10.6042 7.62513 7.07417 9.45475 3.93909 13.3525Z"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
            <Link to={`change/${task.id}`}>
              <button className="edit">
                <svg
                  height="18px"
                  viewBox="-1 -2 20 18"
                  width="18px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    fill="#fff"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <g
                      fill="#fff"
                      id="Core"
                      transform="translate(-213.000000, -129.000000)"
                    >
                      <g
                        id="create"
                        transform="translate(213.000000, 129.000000)"
                      >
                        <path
                          d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z"
                          id="Shape"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </Link>
            <button className="edit">
              <svg
                className="feather feather-check"
                fill="none"
                height="18"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                viewBox="0 -1 24 20"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="date">
          <span>
            <svg
              className="feather feather-calendar"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
          </span>
          <span>Due Date: {new Date(task.date).toLocaleString()}</span>
        </div>
        <div className="date">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
            </svg>
          </span>
          <span>
            Priority: {getLevel(task.priority)} ({task.priority}/10)
          </span>
        </div>
        <div className="date">
          <span>
            <svg
              height="24"
              viewBox="0 0 1792 1792"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-384v384h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-384h-384v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h384v-384h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45t-19 45-45 19h-128v384h384v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z" />
            </svg>
          </span>
          <span>
            Complexity: {getLevel(task.complexity)} ({task.complexity}/10)
          </span>
        </div>
        <div className="date down">
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${task.progress}%` }}
            ></div>
          </div>
          <span>{task.progress}%</span>
        </div>
      </div>
    </div>
  ));
}

export default Rendered;
