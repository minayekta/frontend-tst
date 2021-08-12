import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // let loginData = qs.stringify({
    //   username: data.email,
    //   password: data.password,
    // });
    // axios
    //   .post("https://conduit.productionready.io/api/users/login", loginData, {
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     const Authtoken = response.data.access_token;
    //     localStorage.setItem("token", Authtoken);
    //     if (response.status === 200) {
    //       showNotification("ورود با موفقیت انجام شد.").success();
    //       history.push("/dashboard");
    //     }
    //   })
    //   .catch((error) => {
    //     if (error) {
    //       return showNotification(error).error();
    //     }
    //     showNotification("خطای سیستمی رخ داده است.").error();
    //   });
  };
  return (
    <div className={"grid grid-cols-12  "}>
      <div className={"col-span-6  bg-silver px-5 py-9 rounded-md "}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={
              "flex flex-col align-center justify-center justify-items-center "
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
                " border border-solid border-light-gray py-1.5  rounded-md outline-none mb-5"
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
                "border border-solid border-light-gray py-1.5 rounded-md outline-none  mb-5"
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
