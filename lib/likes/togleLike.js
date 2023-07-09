const { customAxios } = require("../api/axios");

const unLikePost = async (req) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .delete("/likes", {
        data: req,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const likePost = async (req) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .post("/likes", req, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export { likePost, unLikePost };
