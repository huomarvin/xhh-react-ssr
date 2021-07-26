import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPostsData, loadData } from "@store/actions";
import { useSelector, useDispatch } from "react-redux";
import withStyles from "isomorphic-style-loader/withStyles";
import { useDataFill } from "@hooks";
import s from "./index.css";

function Posts() {
  const posts = useSelector((state) => state.posts.list);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // 在路由跳转的情况下不会走node端，此时会出现没有数据的情况，需要单独去发起请求
  //   if (posts.length === 0) {
  //     // 直接去后端发起请求
  //     dispatch(getPostsData);
  //   }
  // }, []);
  useDataFill(getPostsData, posts.length === 0);
  return (
    <ul className={s.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title} <Link to={`/detail/${post.id}`}>查看详细信息</Link>
        </li>
      ))}
    </ul>
  );
}

Posts.loadData = (store) => {
  return store.dispatch(getPostsData);
};

// export default Posts;
export default withStyles(s)(Posts);
