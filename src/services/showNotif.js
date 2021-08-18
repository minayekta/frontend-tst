const showNotification = (response) => {
  let messages = "";
  let data = [];

  if (!Array.isArray(response)) {
    data.push(response);
  } else {
    data = response;
  }

  data.forEach((element) => {
    messages += `<li>${element}</li>`;
  });

  const Error = () => {
    import("./izitoast").then((x) => {
      x.default.then((y) => {
        y.error({
          message: messages,
          backgroundColor: "#efdfdf",
          messageColor: "#9f4f48",
          rtl: true,
          position: "topRight",
          close: true,
          overlay: true,
          timeout: 3000,
        });
      });
    });
  };
  const Success = (pos = "topRight") => {
    import("./izitoast").then((x) => {
      x.default.then((y) => {
        y.success({
          message: messages,
          backgroundColor: "#d5e6c7",
          messageColor: "#4b713d",
          rtl: true,
          position: pos,
          close: true,
          overlay: false,
          timeout: 2000,
        });
      });
    });
  };
  return {
    error: Error,
    success: Success,
  };
};

export default showNotification;
