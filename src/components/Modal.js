import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-3 mx-auto max-w-2xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl  font-semibold"> Delete Article</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={props.closeModal}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  close
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              Are you sure to delete Article?
            </div>
            {/*footer */}
            <div
              className={
                "h-auto p-3 mt-0 text-right border-t border-solid  rounded-b"
              }
            >
              <button
                className={` border border-silver rounded-md  focus:outline-none px-5 py-1 hover:bg-brik hover:text-white`}
                onClick={props.closeModal}
              >
                No
              </button>
              <button
                className={`border border-silver rounded-md px-5 py-1 ml-1 focus:outline-none  hover:bg-brik hover:text-white`}
                type="submit"
                onClick={props.closeModal}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
