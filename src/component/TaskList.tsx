import Avatar from "../assets/Avatar.svg";

const TaskList = () => {
  return (
    <div className="flex flex-col space-y-2 p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white/75">
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
  );
};

export default TaskList;
