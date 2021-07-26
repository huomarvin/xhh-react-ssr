import { createAction } from "redux-actions";

export const loadData = createAction("loadData");

export const getPost = createAction("getPost");

export const getDescriptionAction = createAction("getDescription");

export function getPostsData(dispatch, _state, axios) {
  return axios.get("/posts").then((res) => {
    const { data } = res;
    dispatch(loadData(data));
  });
}

export const getPostData = (params) => (dispatch, _state, axios) => {
  return axios.get(`/posts/${params.postid}`).then((res) => {
    const { data } = res;
    dispatch(getPost(data));
  });
};

export const getDescriptionData = (postId) => (dispatch, _state, axios) => {
  return axios.get(`/comments?postId=${postId}`).then((res) => {
    const { data } = res;
    dispatch(getDescriptionAction(data));
  });
};
