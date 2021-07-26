import Posts from "./pages/Posts";
import Detail from "./pages/Detail";

const Routes = [
  {
    path: "/",
    component: Posts,
    loadData: Posts.loadData,
    exact: true,
  },
  {
    path: "/detail/:postid/",
    component: Detail,
    loadData: Detail.loadData,
  },
];

export default Routes;
