import { AiOutlinePlus } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

interface TaskAsideProps {
  AddTask: () => void; // Define the prop type for AddTask
}

const TaskAside: React.FC<TaskAsideProps> = ({ AddTask }) => {
  const location = useLocation();
  // Retrieve user data from local storage
  const storedUserData = JSON.parse(localStorage.getItem("Userinfo") || "null");

  // Check if storedUserData is not null before accessing properties
 const { email, firstName, lastName } = storedUserData || {};
  const handleLogout = () => {
    localStorage.removeItem("Userinfo");
  };
  return (
    <div className="drawer-side bg-transparent">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col w-[14rem] h-screen p-4 overflow-hidden bg-white border-r-2 border-r-gray-300  shadow-xl">
        <div className="flex flex-col justify-between flex-1 mt-2">
          <nav className="flex-1  space-y-4 ">
            <div className=" justify-between items-center px-3 py-2 hidden lg:flex">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <p>Arrange</p>
              <div className="border-[1.5px] border-gray-300 p-2 rounded-md">
                <div className="w-2 h-1 border-b-2 border-gray-400"></div>
              </div>
            </div>
            <Link
              to="/dashboard"
              className={`flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg   ${
                location.pathname === "/dashboard"
                  ? "bg-gray-100 text-gray-800"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span className="flex mx-4 font-medium">Dashboards</span>
            </Link>

            <Link
              to="/task"
              className={`flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg   ${
                location.pathname === "/task" ? "bg-gray-100 text-gray-800" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                />
              </svg>

              <span className="flex mx-4 font-medium">Tasks</span>
            </Link>

            <a
              className="flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                />
              </svg>

              <span className="flex mx-4 font-medium">Projects</span>
            </a>

            <a
              className="flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>

              <span className="flex mx-4 font-medium">Upcoming</span>
            </a>

            <a
              className="flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>

              <span className="flex mx-4 font-medium">Users</span>
            </a>

            <Link to='/'
              onClick={handleLogout}
              className="flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>

              <span className="flex mx-4 font-medium">Log Out</span>
            </Link>
          </nav>

          <div className="space-y-4">
            <button
              onClick={AddTask}
              className="btn h-5  hover:bg-black/60 w-full bg-black/80 font-thin  text-sm text-gray-300"
            >
              <AiOutlinePlus />
              <span className=""> Add New Task</span>
            </button>
            <div className="flex items-center justify-center space-x-3">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                  />
                </div>
              </div>
              <span className="flex text-sm font-medium text-gray-700  flex-col items-start">
                <p className="font-medium capitalize">
                  {firstName} {lastName}{" "}
                </p>
                <p>{email}</p>
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default TaskAside;
