import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import showNotification from "../services/showNotif";

const NewArticle = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let NewArticleData = {
      title: data.title,
      description: data.description,
      body: data.body,
      tagList: data.tagList,
    };
    axios
      .post(
        "https://conduit-api-realworld.herokuapp.com/api/articles",
        NewArticleData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error) {
          return showNotification("Failed").error();
        }
        showNotification("ERROR").error();
      });
  };
  return (
    <div>
      <div>
        <h1 className={"text-3xl ml-4 mt-4"}>New Article</h1>
      </div>
      <div className={"grid grid-cols-12 m-4"}>
        <div className={"col-span-9"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"flex flex-col"}>
              <label className={"text-xs text-charcoal-gray font-medium"}>
                Tilte
              </label>
              <input
                className={" border border-light-gray mt-1 mb-3 rounded-sm"}
                name="title"
                {...register("title", { required: true })}
              />
            </div>
            <div className={"flex flex-col"}>
              <label className={"text-xs text-charcoal-gray font-medium"}>
                Description
              </label>
              <input
                className={"border border-light-gray mt-1 mb-3 rounded-sm"}
                name="description"
                {...register("description", { required: true })}
              />
            </div>
            <div className={"flex flex-col"}>
              <label className={"text-xs text-charcoal-gray font-medium"}>
                Body
              </label>
              <textarea
                className={"border border-light-gray mt-1 mb-3 rounded-sm"}
                name="body"
                {...register("body", { required: true })}
              />
            </div>
            <button
              type="submit"
              className={
                "bg-water-blue text-white text-xs px-4 py-1.5 rounded-sm tracking-wide"
              }
            >
              Submit
            </button>
          </form>
        </div>
        <div className={"col-span-3"}></div>
      </div>
    </div>
  );
};

export default NewArticle;
