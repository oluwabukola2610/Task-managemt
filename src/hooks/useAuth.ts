import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserType } from "../Types/Types";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/api";

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
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth/signup`, user)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success("Sign in successful");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
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
      .post(`${BASE_URL}/auth/signin`, loginData)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
          const userData = response.data.user;
          localStorage.setItem("Userinfo", JSON.stringify(userData));
          sessionStorage.setItem("token", response.data.token);
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
