// combine
import combineReducer from "./combineReducer";

// reducer
import mainReducer from "../reducers/mainReducer";
import homeReducer from "../reducers/homeReducer";

// all in one
const reducers = combineReducer({
    main: mainReducer,
    home: homeReducer,
});

export default reducers;
