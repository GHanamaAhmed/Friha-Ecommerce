const { customAxios } = require("./axios");

const fetchProduct = async (productsId) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get(`/products/product/${productsId}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const fetchProductReel = async (reelId) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get(`/reels/reel/${reelId}`)
      .then(async (res) => {
        await customAxios
          .get(`/products/product/${res.data?.productId}`)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};
export { fetchProduct,fetchProductReel };
