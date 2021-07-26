import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducer";
import { clientAxios, serverAxios } from "@http";

export function createClientStore() {
  let initialState = {};
  if (window.state) {
    initialState = window.state;
  }
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
  console.log(store.getState());
  return store;
}

export function createServerStore() {
  const store = createStore(
    reducers,
    applyMiddleware(logger, thunk.withExtraArgument(serverAxios))
  );
  return store;
}

export default {};
