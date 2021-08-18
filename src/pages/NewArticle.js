import React from "react";

const NewArticle = () => {
  return (
    <div>
      <div>
        <h1 className={"text-3xl ml-4 mt-4"}>New Article</h1>
      </div>
      <div className={"grid grid-cols-12 m-4"}>
        <div className={"col-span-9"}>
          <form>
            <div className={"flex flex-col"}>
              <label className={"text-xs text-charcoal-gray font-medium"}>
                Tilte
              </label>
              <input
                className={" border border-light-gray mt-1 mb-3 rounded-sm"}
              />
            </div>
            <div className={"flex flex-col"}>
              <label className={"text-xs text-charcoal-gray font-medium"}>
                Description
              </label>
              <input
                className={"border border-light-gray mt-1 mb-3 rounded-sm"}
              />
            </div>
            <div className={"flex flex-col"}>
              <label className={"text-xs text-charcoal-gray font-medium"}>
                Body
              </label>
              <textarea
                className={"border border-light-gray mt-1 mb-3 rounded-sm"}
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
