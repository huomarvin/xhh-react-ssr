import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "../shared/Routes";
import { Provider } from "react-redux";
import { createClientStore } from "../shared/store";
import StyleContext from "isomorphic-style-loader/StyleContext";

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

const App = () => {
  const store = createClientStore();
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <Router>{renderRoutes(Routes)}</Router>
      </Provider>
    </StyleContext.Provider>
  );
};

ReactDOM.hydrate(<App />, document.getElementById("root"));
