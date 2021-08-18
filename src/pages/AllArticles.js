import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
const AllArticles = () => {
  const [showModal, setShowModal] = useState(false);
  const [allarticles, setallarticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://conduit-api-realworld.herokuapp.com/api/articles")
      .then((res) => {
        console.log(res.data);
        setallarticles(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={"border-red-800"}>
      {/* {showModal ? <Modal /> : null} */}
      <div>
        <h1 className={"text-3xl ml-4 mt-4 mb-4"}>All Posts</h1>
      </div>
      <div className="grid grid-cols-12 m-2 mb-2 bg-silver p-1 text-gray-700 font-bold text-sm">
        <div className={"col-span-1"}>#</div>
        <div className={"col-span-2"}>Title</div>
        <div className={"col-span-2"}>Auther</div>
        <div className={"col-span-2"}>Tags</div>
        <div className={"col-span-2"}>Excerpt</div>
        <div className={"col-span-3"}>created</div>
      </div>
      {allarticles.map((item, id) => {
        return (
          <div className={"grid grid-cols-12  m-4 mt-0"}>
            <div
              className={"col-span-1 text-sm font-medium text-charcoal-gray"}
            >
              {id}
            </div>
            <div
              className={"col-span-2 text-sm font-medium text-charcoal-gray"}
            >
              {item.title}
            </div>
            <div
              className={"col-span-2 text-sm font-medium text-charcoal-gray"}
            >
              {item.author.username}
            </div>
            <div
              className={"col-span-2 text-sm font-medium text-charcoal-gray"}
            >
              {item.tagList.map((i) => (
                <span className={"mr-1"}>{i}</span>
              ))}
            </div>
            <div
              className={"col-span-2 text-sm font-medium text-charcoal-gray"}
            >
              {item.body}
            </div>
            <div
              className={"col-span-3 text-sm font-medium text-charcoal-gray"}
            >
              {item.createdAt}
              <button
                className={"bg-water-blue"}
                onClick={() => setShowModal(true)}
              ></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllArticles;
