const { customAxios } = require("../api/axios");

const unSavePost = async (req) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .delete("/basket", {
        data: req,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const SavePost = async (req) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .post("/basket", req, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export { SavePost, unSavePost };
