import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";

const Signup: React.FC = () => {
  const {
    togglePassword,
    passwordType,
    user,
    handleInput,
    handleRegister,
    loading,
  } = useAuth();

  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row">
        <section className="relative flex h-[200px] lg:h-screen items-end bg-gray-900 lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            className="absolute inset-0 h-full lg:h-screen w-full object-cover opacity-60"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-purple-50 font-serif sm:text-3xl md:text-4xl">
              Welcome to TaskTracker
            </h2>

            <p className="mt-4 leading-relaxed text-white/90 font-sans">
              All-in-one solution for managing tasks effectively. With
              TaskTracker, you can easily stay organized, prioritize your tasks,
              and achieve your goals. Whether you're working on a project,
              studying for exams, or simply managing your daily to-do list,
              TaskTracker has got you covered. Sign up now and experience the
              power of seamless task management. Take control of your time and
              productivity today!
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 lg:w-1/2">
          <div className="max-w-xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <div className="flex flex-col items-center">
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to TaskTracker
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500 text-center">
                  Manage your Task. consectetur adipisicing elit. Eligendi nam
                  dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
            </div>
            <form
              onSubmit={handleRegister}
              className="mt-4 w-full md:w-[550px] lg:w-[400px] md:p-4 bg-slate-50 shadow-md "
            >
              <div className="mb-4 ">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3  bg-gray-100 text-gray-600 leading-tight focus:outline-none placeholder:text-sm"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={user.firstName}
                  placeholder="Enter your first name"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4 ">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3  bg-gray-100 text-gray-600 leading-tight focus:outline-none placeholder:text-sm"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={user.lastName}
                  placeholder="Enter your last name"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3  bg-gray-100 text-gray-600 leading-tight focus:outline-none placeholder:text-sm"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={user.email}
                  name="email"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-600 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="flex items-center justify-between bg-gray-100 ">
                  <input
                    type={passwordType}
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="••••••••"
                    className="appearance-none border rounded w-full py-2 px-3  bg-gray-100 text-gray-600 leading-tight focus:outline-none "
                  />
                  <div onClick={togglePassword} className="px-4 text-black">
                    {passwordType === "password" ? (
                      <AiFillEyeInvisible size={20} />
                    ) : (
                      <AiFillEye size={20} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4  bg-gray-100 "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-600">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/forgetpass"
                  className="text-sm font-bold text-gray-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              {!loading ? (
                <button
                  type="submit"
                  className="w-full my-4 text-white focus:outline-none font-bold rounded-xl text-md px-5 py-2.5 text-center hover:bg-fuchsia-400/80 bg-fuchsia-400 hover:duration-300 focus:shadow-outline"
                  aria-label="Create an account"
                >
                  Create an account
                </button>
              ) : (
                <button
                  className="w-full my-4 btn"
                  disabled
                  aria-busy="true"
                  aria-label="Creating account..."
                >
                  <span className="loading loading-spinner"></span>
                  Creating account...
                </button>
              )}

              <p className="text-sm font-medium text-gray-500 inline-block align-baseline">
                Already have an account ?{" "}
                <Link
                  to="/login"
                  className="font-bold text-md hover:underline  hover:text-purple-500/80 text-purple-500 hover:duration-300"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
          <ToastContainer
            position="top-center"
            hideProgressBar={true}
            newestOnTop={false}
            autoClose={1000}
            rtl={false}
            draggable
            style={{
              top: "10%",
              transform: "translateY(-50%)",
              width: "fit-content",
            }}
          />
        </main>
      </div>
    </section>
  );
};

export default Signup;
