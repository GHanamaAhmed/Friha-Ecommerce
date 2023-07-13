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
      .get(
        `/comments/replies?type=${req.type}&postId=${req.postId}&commentId=${req.commentId}`
      )
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const sendComment = async (req) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .post(`/comments`, req)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const removeComment = async (req) => {
  return await new Promise(async (resolve, reject) => {
    await customAxios
      .delete(`/comments`, { data: req })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

// toUserCommentId: objectId,
// type: joi.string().valid("product", "reel").required(),
// postId: objectId.required(),
// text:joi.string().max(200).required()
export { fetchReplies, fetchComments, sendComment, removeComment };
