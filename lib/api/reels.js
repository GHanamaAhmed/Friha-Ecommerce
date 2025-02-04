const { customAxios } = require("./axios");

const fetchReels = async (reelId) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get(`/reels/${reelId}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const fetchMore = async (min) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get(`/reels?min=${min}&max=${min + 3}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const fetchReel = async (reelId) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get(`/reels/reel/${reelId}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export { fetchReels, fetchReel, fetchMore };
