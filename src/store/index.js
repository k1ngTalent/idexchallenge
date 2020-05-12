import { createStore,} from "redux";
import reducer from "./../reducers/index";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(reducer);

export default store;
