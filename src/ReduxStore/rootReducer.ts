import { combineReducers } from "redux";
import { catReducer } from "./cats/Reducer";
 const RootReducer = combineReducers({
    cats:catReducer
});

export default RootReducer;


