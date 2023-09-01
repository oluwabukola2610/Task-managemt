import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserType } from "../Types/Types";
import axios from "axios";
import { toast } from "react-toastify";
const useAuth = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState("password");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };
  const [loading, setIsLoading] = useState<boolean>(false);
  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    // Validate form fields
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsLoading(true);

    axios
      .post("https://task-manager-4qtw.onrender.com/auth/signup", user)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Sign in successful");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
        // setuser to empty string
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.warning("Email is already being used");
        } else {
          toast.warning("An error occurred. Please try again later.");
        }
      })
      .finally(() => {
        setIsLoading(false); // Set isLoading back to false when the API request is complete
      });
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Validate form fields
    if (!user.email || !user.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    const loginData = { email: user.email, password: user.password };
    axios
      .post("https://task-manager-4qtw.onrender.com/auth/signin", loginData)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
          const userData = response.data.user;
          localStorage.setItem("Userinfo", JSON.stringify(userData));
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
        setUser({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
      .finally(() => {
        setIsLoading(false); // Set isLoading back to false when the API request is complete
      });
  };

  return {
    handleInput,
    handleLogin,
    handleRegister,
    passwordType,
    user,
    togglePassword,
    loading,
  };
};

export default useAuth;
