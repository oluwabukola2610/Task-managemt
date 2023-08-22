import workmode from "../assets/Working-pana-removebg.png";
import Avatar from "../assets/Avatar.svg";

interface TaskData {
  taskLeft: number;
  taskType: string;
}
const Taskdata: TaskData[] = [
  {
    taskLeft: 10,
    taskType: "Total Task",
  },
  {
    taskLeft: 8,
    taskType: "Pending",
  },
  {
    taskLeft: 6,
    taskType: "In Progress",
  },
  {
    taskLeft: 5,
    taskType: " Completed",
  },
];
const Dashboard = () => {
  return (
    <main className="mx-auto max-w-[1640px] flex flex-col gap-8 p-3 h-screen bg-[#F5F5F9] overflow-y-scroll">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,370px] gap-4 ">
        <article className="flex flex-col space-y-4  ">
          <div className="flex flex-col md:flex-row items-center text-center md:text-start space-x-12 p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
            <span className="space-y-6">
              <h1 className="font-bold text-2xl">Hello Temi 🎉</h1>
              <p className="max-w-xs text-gray-500">
                Get things done and start your day more productive
              </p>
            </span>
            <img src={workmode} alt="" className="flex w-[200px] h-[200px]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {Taskdata.map((task, i) => (
              <span
                key={i}
                className="p-4 rounded-sm flex flex-col items-center space-y-3 bg-white/75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                <h2 className="font-semibold">{task.taskLeft}</h2>
                <p className="text-gray-400">{task.taskType}</p>
              </span>
            ))}
          </div>
        </article>
        {/* Notification   */}
        <div className="flex flex-col p-3 bg-white/75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <span className="flex justify-between border-b border-b-gray-400 p-2">
            <p>Notification</p>
            <p className="p-1 bg-pink-200 text-pink-300 font-semibold rounded-md">
              8 New
            </p>
          </span>
          <div className="border-b p-1">
            <p className="text-gray-600 font-medium">Congratulation Flora 🎉</p>
            <div className="flex justify-between py-2">
              <p className="text-gray-400">
                You have completed your task for the week
              </p>
              <p className="text-gray-400">Tuedays</p>
            </div>{" "}
          </div>
          <div className="border-b p-1">
            <p className="text-gray-600 font-medium">You have a pending Task</p>
            <div className="flex justify-between py-2">
              <p className="text-gray-400">5 hours ago</p>
              <p className="text-gray-400">Today</p>
            </div>{" "}
          </div>
          <div className="border-b p-1">
            <p className="text-gray-600 font-medium">
              You just added new tasks 👋
            </p>
            <div className="flex justify-between py-2">
              <p className="text-gray-400">You have 10 tasks</p>
              <p className="text-gray-400">11 Aug</p>
            </div>{" "}
          </div>
          {/* ... more spans */}
        </div>
      </div>
      {/* task part */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,370px] gap-4 ">
        <div className="flex flex-col space-y-4 p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white/75">
          <h1 className="font-semibold py-2 text-gray-500">Today Task</h1>
          <div className="flex items-center justify-between">
            <span className="flex space-x-2 items-center">
              <div className="h-2 w-2 bg-red-500 rounded-full"></div>
              <p>Learn React</p>
            </span>
            <p className="text-gray-400">12 min</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border-r border-gray-300 h-full"></div>
            <p className="text-gray-400">Create a simple website with reacts</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex space-x-2 items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <p>Do a responsive landing page</p>
            </span>
            <p className="text-gray-400">45 min</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border-r border-gray-300 h-full"></div>
            <p className="text-gray-400">Project meting with John</p>
            <div className="flex  items-center justify-center space-x-3">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" />
                </div>
              </div>
              <p className="">John Doe (client)</p>{" "}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex space-x-2 items-center">
              <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
              <h1 className="font-seimbold">
                Create a new React project for client
              </h1>
            </span>
            <p className="text-gray-400">1 hr ago</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border-r border-gray-300 h-full"></div>
            <h1 className="text-gray-500">5 team member </h1>
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                <img src={Avatar} alt="" />{" "}
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" />
                </div>
              </div>
            </div>
          </div>

          {/* ... more divs */}
        </div>
        {/* calender */}
        <div className="flex flex-col  p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white/75 font-semibold text-center max-h-[400px] overflow-y-auto">
          <div className="flex items-center justify-around px-4 py-6">
            <button className="p-4 rounded-md bg-pink-200 text-pink-600">
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <div className="text-lg">May, 2020</div>
            <button className="p-4 rounded-md bg-pink-200 text-pink-600">
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-6 gap-1">
            <div className="text-pink-600">Mon</div>
            <div className="text-pink-600">Tue</div>
            <div className="text-pink-600">Wed</div>
            <div className="text-pink-600">Thu</div>
            <div className="text-pink-600">Fri</div>
            <div className="text-pink-600">Sat</div>
            <div className="text-pink-600">Sun</div>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              27
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              28
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              29
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              30
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              1
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              2
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              3
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              4
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              5
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              6
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              7
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              8
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              9
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              10
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              11
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              12
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              13
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              14
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              15
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              16
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              17
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              18
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              19
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              20
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              21
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              22
            </a>
            <a
              href="#"
              className="hover:bg-pink-600 rounded-md p-2 bg-pink-500 text-white"
            >
              23
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              24
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              25
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              26
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              27
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              28
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              29
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              30
            </a>
            <a href="#" className="hover:bg-pink-100 rounded-md p-2">
              31
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              1
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              2
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              3
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              4
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              5
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              6
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 rounded-md p-2 text-gray-500"
            >
              7
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
