import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import showNotification from "../services/showNotif";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("submit");
    let RegisterData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    console.log(RegisterData);
    try {
      const { data } = await axios.post(
        "https://conduit-api-realworld.herokuapp.com/api/users",
        RegisterData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      if (data.status == 200) {
        showNotification("Register Sucsess").success();
        // history.push("/all-articles");
      }
    } catch (error) {
      if (error) {
        return showNotification("Register Failed").error();
      }
      showNotification("ERROR").error();
    }
  };
  return (
    <div className={"grid grid-cols-12  "}>
      <div className={"col-span-3 bg-silver px-5 py-9 rounded-md "}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={"flex flex-col align-center justify-center "}>
            <h2
              className={"mt-9.5  mb-10 text-warm-gray text-4xl text-center "}
            >
              {" "}
              Register
            </h2>
            <label className={"text-left text-base mb-1 text-warm-gray"}>
              User
            </label>
            <input
              className={
                " border border-solid border-light-gray py-1.5  rounded-md outline-none mb-2"
              }
              {...register("username", {
                required: true,
              })}
              name="username"
              type="text"
            />
            {errors.email && (
              <p className="text-red-600 text-sm text-left pt-1 pb-2 "></p>
            )}
            <label className={"text-left text-base mb-1 text-warm-gray"}>
              Email
            </label>
            <input
              className={
                " border border-solid border-light-gray py-1.5  rounded-md outline-none mb-2"
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
              <p className="text-red-600 text-sm text-left pt-1 pb-2 "></p>
            )}
            <label className={"text-left text-base mb-1 text-warm-gray"}>
              Password
            </label>

            <input
              className={
                "border border-solid border-light-gray py-1.5 rounded-md outline-none  mb-2"
              }
              {...register("password", { required: true })}
              name="password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-600 text-sm text-left pt-1 pb-2 ">
                Required Faild
              </p>
            )}
            <button
              className={`bg-water-blue text-white py-2 mt-5 rounded-md focus:outline-none`}
              type="submit"
            >
              Login
            </button>
            <div className={"text-sm text-warm-gray mt-3 font-medium"}>
              Already Registered?{" "}
              <a
                href={"/login"}
                className={"ml-1 font-bold cursor-pointer text-warm-gray"}
              >
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
