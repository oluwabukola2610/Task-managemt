import Avatar from "react-avatar";
import { FaEdit } from "react-icons/fa"; // Import the edit icon

const User = () => {
  // Retrieve user data from local storage
  const storedUserData = JSON.parse(localStorage.getItem("Userinfo") || "null");

  const { email, firstName, lastName } = storedUserData || {};
  return (
    <div className="flex flex-col items-center mx-auto mt-5  p-5 w-full lg:max-w-xl space-y-4 shadow-md rounded-md border bg-white/80">
      <div className="text-center relative">
        <Avatar
          name={`${firstName} ${lastName}`}
          src=""
          size="100"
          round={true}
          className="mx-auto mb-2 "
        />
        <label
          htmlFor="avatar"
          className="absolute bottom-3 right-1 -mb-2 -mr-2 bg-inherit  text-gray-600 rounded-full py-1 px-2 text-sm cursor-pointer"
        >
          <input
            type="file"
            id="avatar"
            accept="image/*"
            className="hidden"
          />
          <FaEdit />
        </label>
      </div>

      <div className="flex justify-between mb-4 w-full">
        <div className="flex-1">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-grayText"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            disabled
            className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-grayText"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            disabled
            className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-4 w-full">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-grayText"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          disabled
          className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
        />
      </div>
    </div>
  );
};

export default User;
