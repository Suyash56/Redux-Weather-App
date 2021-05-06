import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import weatherReducer from "./weatherReducer";
import { combineReducers } from "redux";

export default combineReducers({
  userInfo: userReducer,
  loginInfo: loginReducer,
  weatherInfo: weatherReducer,
});
