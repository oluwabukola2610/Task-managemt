import { useContext } from "react";
import Avatar from "../assets/Avatar.svg";
import FemaleAvatar from "../assets/female-avatar.png";
import { TaskProvider } from "../Context/TaskContext";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
const HandleEdit = () => {
  const contextValues = useContext(TaskProvider);

  if (!contextValues) {
    return null;
  }
  const { deleteTask} = contextValues;
const handelete =()=>{
  deleteTask()
}
  return (
    <>
      <h2 className="text-md text-gray-500 font-semibold p-4 border-b border-b-slate-300 shadow-sm">
        Edit Task
      </h2>
      <div className="flex space-x-4 px-4 py-3">
        <button className="btn h-5  hover:bg-black/60 bg-black/80 font-thin  text-sm text-gray-300">
          <BiSolidEditAlt />
          <span className="">Edit</span>
        </button>
        <button
          onClick={handelete}
          className="btn h-5  font-thin  text-sm text-gray-500"
        >
          <MdOutlineDeleteForever  />
          <span className="">Delete</span>
        </button>
      </div>
      <div className="flex flex-col space-y-3 p-4">
        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor="Tittle"
              className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-400"
            >
              Title
            </label>
            <input
              type="text"
              id="Tittle"
              className="border border-gray-200 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 focus:outline-none p-2 placeholder-gray-700 text-sm w-full"
              placeholder="Completed Charts & Maps"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="date"
              className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-400"
            >
              Due Date
            </label>
            <input
              type="text"
              id="date"
              className="border border-gray-200 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 focus:outline-none p-2 placeholder-gray-700 text-sm w-full"
              placeholder="7 April, 2023"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="label"
              className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-400"
            >
              Label
            </label>
            <select
              id="label"
              className="border border-gray-200 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 focus:outline-none p-2 pr-8 placeholder-gray-700 text-sm w-full"
            >
              <option value="" className=" ">
                Charts & Map
              </option>
              <option
                value="option1"
                className="bg-blue-100 rounded-full py-1 px-2"
              >
                Option 1
              </option>
            </select>
          </div>
        </form>
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-10">
              <img src={FemaleAvatar} alt="" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-8">
              <img src={Avatar} className="" alt="" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src={Avatar} className="" alt="" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-8 text-gray-600 text-center text-xl bg-gray-300">
              +{" "}
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="file" className="block text-sm text-gray-400 ">
            Attachment
          </label>

          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-gray-500 dark:text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm text-gray-400 ">
            Comment
          </label>
          <div
            id="comment"
            className="border border-gray-300 p-6 text-gray-700 "
          >
            <p className="text-center mb-4 text-gray-400">Write Comment</p>
            <div className="text-gray-400 flex float-right space-x-2 items-center">
              <span className="font-bold">B</span>
              <span className=" italic font-bold">I</span>
              <span className="font-bold underline">U</span>
              <span className="font-bold">A</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M7.05392 9.41475C7.99809 8.47058 9.64475 8.47058 10.5889 9.41475L11.1781 10.0039L12.3564 8.82558L11.7673 8.23641C10.9814 7.44975 9.93476 7.01558 8.82142 7.01558C7.70809 7.01558 6.66142 7.44975 5.87559 8.23641L4.10725 10.0039C3.3275 10.7862 2.88965 11.8456 2.88965 12.9502C2.88965 14.0547 3.3275 15.1141 4.10725 15.8964C4.49382 16.2835 4.95306 16.5904 5.4586 16.7995C5.96414 17.0086 6.50602 17.1157 7.05309 17.1147C7.60031 17.1159 8.14235 17.0088 8.64805 16.7997C9.15375 16.5907 9.61312 16.2837 9.99975 15.8964L10.5889 15.3072L9.41059 14.1289L8.82142 14.7181C8.35181 15.1856 7.71615 15.4481 7.0535 15.4481C6.39086 15.4481 5.7552 15.1856 5.28559 14.7181C4.81767 14.2487 4.55493 13.6129 4.55493 12.9502C4.55493 12.2874 4.81767 11.6516 5.28559 11.1822L7.05392 9.41475Z"
                  fill="#32475C"
                  fillOpacity="0.54"
                />
                <path
                  d="M10.0002 4.11141L9.41105 4.70057L10.5894 5.87891L11.1786 5.28974C11.6482 4.82223 12.2838 4.55976 12.9465 4.55976C13.6091 4.55976 14.2448 4.82223 14.7144 5.28974C15.1823 5.75913 15.445 6.39488 15.445 7.05766C15.445 7.72043 15.1823 8.35618 14.7144 8.82557L12.9461 10.5931C12.0019 11.5372 10.3552 11.5372 9.41105 10.5931L8.82189 10.0039L7.64355 11.1822L8.23272 11.7714C9.01855 12.5581 10.0652 12.9922 11.1786 12.9922C12.2919 12.9922 13.3386 12.5581 14.1244 11.7714L15.8927 10.0039C16.6725 9.22164 17.1103 8.16217 17.1103 7.05766C17.1103 5.95314 16.6725 4.89367 15.8927 4.11141C15.1107 3.33124 14.0511 2.89311 12.9465 2.89311C11.8418 2.89311 10.7823 3.33124 10.0002 4.11141Z"
                  fill="#32475C"
                  fillOpacity="0.54"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M6.24902 9.17058C6.93938 9.17058 7.49902 8.61093 7.49902 7.92058C7.49902 7.23022 6.93938 6.67058 6.24902 6.67058C5.55867 6.67058 4.99902 7.23022 4.99902 7.92058C4.99902 8.61093 5.55867 9.17058 6.24902 9.17058Z"
                  fill="#32475C"
                  fillOpacity="0.54"
                />
                <path
                  d="M8.74902 11.6706L7.49902 10.0039L4.99902 13.3372H14.999L11.249 8.33723L8.74902 11.6706Z"
                  fill="#32475C"
                  fillOpacity="0.54"
                />
                <path
                  d="M16.666 3.33723H3.33268C2.41352 3.33723 1.66602 4.08473 1.66602 5.0039V15.0039C1.66602 15.9231 2.41352 16.6706 3.33268 16.6706H16.666C17.5852 16.6706 18.3327 15.9231 18.3327 15.0039V5.0039C18.3327 4.08473 17.5852 3.33723 16.666 3.33723ZM3.33268 15.0039V5.0039H16.666L16.6677 15.0039H3.33268Z"
                  fill="#32475C"
                  fillOpacity="0.54"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandleEdit;
