import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Routes from "../shared/Routes";
import { createServerStore } from "../shared/store";
import StyleContext from "isomorphic-style-loader/StyleContext";

const render = (req, res) => {
  const css = new Set();
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));
  const store = createServerStore();
  const matchedRoutes = matchRoutes(Routes, req.path);
  const promises = matchedRoutes.reduce((promises, route) => {
    route.route.loadData &&
      promises.push(route.route.loadData(store, route.match));
    return promises;
  }, []);
  Promise.all(promises).then(() => {
    const html = renderToString(
      <StyleContext.Provider value={{ insertCss }}>
        <Provider store={store}>
          <Router location={req.path}>{renderRoutes(Routes)}</Router>
        </Provider>
      </StyleContext.Provider>
    );
    res.send(combileHtml({ html, store, css }));
  });
};

function combileHtml({ html, store, css }) {
  return `
    <html>
    <head>
        <title>SSR</title>
        <style>${[...css].join("")}</style>
    </head>
    <body>
        <div id="root">${html}</div>
        <script>
            window.state = ${JSON.stringify(store.getState())};
        </script>
        <script defer src="/bundle.js"></script>
    </body>
    </html>
  `;
}

export default render;
