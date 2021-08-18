import React, { useEffect, useState } from "react";
import axios from "axios";
const Header = () => {
  const [currentuser, setCurrentuser] = useState();
  // useEffect(() => {
  //   axios
  //     .get("https://conduit-api-realworld.herokuapp.com/api/user")
  //     .then((res) => {
  //       console.log(res);
  //       setCurrentuser(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <div
      className={
        "flex flex-row-reverse justify-between bg-charcoal-gray text-white h-12"
      }
    >
      <div className={"text-center justify-center mt-2 mr-4"}>
        <button
          className={
            "border border-solid border-dark-sky-blue text-dark-sky-blue text-xs px-4 py-2    rounded-sm tracking-wider hover:bg-water-blue hover:text-white "
          }
        >
          Logout
        </button>
      </div>
      <div className={"mt-2 ml-4 text-white"}>
        <div>
          Arvan Challenge{" "}
          <span className={"text-xs ml-2"}>{`wellcome ${"username"}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
