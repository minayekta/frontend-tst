import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <div className={"grid grid-cols-12"}>
        <div className={"col-span-2 "}>
          <div className={"flex flex-col bg-water-blue h-full"}>
            <h1 className={"text-white p-2"}>Posts</h1>
            <div className={"text-white hover:bg-blue-400 p-2 text-sm"}>
              <NavLink onClick={""} to="/all-articles">
                All Articles
              </NavLink>
            </div>
            <div className={"text-white hover:bg-blue-400 p-2 text-sm"}>
              <NavLink onClick={""} to="/new-article">
                New Article
              </NavLink>
            </div>
          </div>
        </div>
        <div className={"col-span-10"}>{props.children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
