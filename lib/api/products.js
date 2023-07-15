const { customAxios } = require("./axios");

const fetchProduct = async (productsId) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get(`/products/product/${productsId}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export { fetchProduct };
