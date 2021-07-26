import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDescriptionData } from "@store/actions";

const useComment = (postId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDescriptionData(postId));
  }, [postId]);
  return [];
};

export default useComment;
