import React from "react";
import { Link, useParams } from "react-router-dom";
import { getPostData } from "@store/actions";
import useComment from "./useComment";
import { useSelector } from "react-redux";
import { useDataFill } from "@hooks";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./index.css";

function Detail() {
  const params = useParams();
  const { detail, description } = useSelector((state) => state.posts);
  useComment(params.postid);
  useDataFill(getPostData(params), description.length === 0);
  return (
    <div className={styles.detail}>
      <div className={styles.container}>
        <div className={styles["post-content"]}>
          <Link to="/">返回列表</Link>
          <h2>{detail.title}</h2>
          <h3>{detail.author}</h3>
          <p>{detail.content}</p>
        </div>
        <section className={styles.comments}>
          <header>评论列表：</header>
          {description.map((item) => (
            <p key={item.id}>{item.body}</p>
          ))}
        </section>
      </div>
    </div>
  );
}

Detail.loadData = (store, match) => {
  return store.dispatch(getPostData(match.params));
};

export default withStyles(styles)(Detail);
