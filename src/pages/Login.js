import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import showNotification from "../services/showNotif";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../Helper/utility";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history = useHistory();

  const onSubmit = async (data) => {
    let loginData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post(
        "https://conduit-api-realworld.herokuapp.com/api/users/login",
        loginData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.config.xsrfCookieName);
        console.log(loginData);
        const Authtoken = response.config.xsrfCookieName;
        localStorage.setItem("token", Authtoken);
        let isAuth = checkAuth();
        if (response.status === 200 && isAuth) {
          showNotification("Login Sucsses").success();
          history.push("/all-articles");
        }
      })
      .catch((error) => {
        if (error) {
          return showNotification(
            "Login Failed/ username Or password is invalid"
          ).error();
        }
        showNotification("ERROR").error();
      });
  };
  return (
    <div className={"grid grid-cols-12  "}>
      <div className={"col-span-3 bg-silver px-5 py-9 rounded-md mx-auto"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={
              "flex flex-col align-center justify-center justify-items-center"
            }
          >
            <h2
              className={"mt-9.5  mb-10 text-warm-gray text-4xl text-center "}
            >
              {" "}
              Login
            </h2>
            <label className={"text-left text-base mb-1 text-warm-gray"}>
              Email
            </label>
            <input
              className={
                " border border-solid pl-2 border-light-gray py-1.5  rounded-md outline-none mb-2 placeholder-charcoal-gray "
              }
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: " required Faild",
                },
              })}
              name="email"
              type="email"
            />
            {errors.email && (
              <p className="text-brik text-sm text-left pt-1 pb-2 ">
                required Faild
              </p>
            )}
            <label className={"text-left text-base mb-1 text-warm-gray"}>
              Password
            </label>

            <input
              className={
                "border border-solid pl-2 border-light-gray py-1.5 rounded-md outline-none  mb-2"
              }
              {...register("password", { required: true })}
              name="password"
              type="password"
              min="8"
            />
            {errors.password && (
              <p className="text-brik text-sm text-left pt-1  ">
                Required Faild
              </p>
            )}
            <button
              className={`bg-water-blue text-white py-2 mt-5 rounded-md focus:outline-none hover:shadow-md`}
              type="submit"
            >
              Login
            </button>
            <div className={"text-sm text-warm-gray mt-3 font-medium"}>
              Don't have account?{" "}
              <a
                href={"/register"}
                className={"ml-1 font-bold cursor-pointer text-warm-gray"}
              >
                Register Now
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
