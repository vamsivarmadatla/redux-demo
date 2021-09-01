import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
// import logger from "redux-logger";

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
