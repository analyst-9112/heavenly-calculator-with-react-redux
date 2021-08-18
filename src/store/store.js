import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import devToolsEnhancer from 'remote-redux-devtools';

export default createStore(
  rootReducer,
  devToolsEnhancer()
);