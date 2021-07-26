import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useDataFill = (action, condition) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (condition) {
      dispatch(action);
    }
  }, [condition]);
  return [];
};

export default useDataFill;
