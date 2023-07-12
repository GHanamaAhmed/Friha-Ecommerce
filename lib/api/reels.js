const { customAxios } = require("./axios");

const fetchReels = async () => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get("/reels")
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export {
    fetchReels
}