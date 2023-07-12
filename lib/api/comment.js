import { customAxios } from "./axios";

const fetchComments = async (req) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get(`/comments?type=${req.type}&postId=${req.postId}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const fetchReplies = async (req) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .get(`/comments/replies?type=${req.type}&postId=${req.postId}&commentId=${req.commentId}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export { fetchReplies ,fetchComments};
