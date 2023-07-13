const { customAxios } = require("./axios");

const fetchReels = async (reelId) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get(`/reels/${reelId}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export { fetchReels };
