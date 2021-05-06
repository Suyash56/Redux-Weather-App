import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useSelector, useDispatch } from "react-redux";
import {
  changeUsername,
  changePassword,
  login,
  loginReset,
} from "../redux/actions/LoginActions";
import "../css/signuplogin.css";

export default function Login() {
  const { addToast } = useToasts();

  const history = useHistory();

  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.loginInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginInfo;
    if (username === "" || password === "") {
      addToast("Please Enter All Fields", {
        appearance: "warning",
        autoDismiss: true,
      });
    } else {
      const user = JSON.parse(localStorage.getItem(username));
      if (user == null) {
        addToast("Please Enter Valid Username", {
          appearance: "warning",
          autoDismiss: true,
        });
      } else if (password !== user.password) {
        addToast("Please Enter The Valid Password", {
          appearance: "warning",
          autoDismiss: true,
        });
      } else {
        addToast("Login Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        console.log();
        dispatch(loginReset());
        dispatch(login(true));
        history.push("/app");
      }
    }
  };

  return (
    <div className="app_login">
      <div className="container-shadow"></div>
      <div className="container">
        <div className="wrap">
          <div className="headings">
            <Link to="/" className="active">
              <span>Log In</span>
            </Link>
            <Link to="/signup">
              <span>Sign Up</span>
            </Link>
          </div>
          <div id="sign-in-form">
            <form>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                value={loginInfo.username}
                onChange={(e) => {
                  dispatch(changeUsername(e.target.value));
                }}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={loginInfo.password}
                onChange={(e) => {
                  dispatch(changePassword(e.target.value));
                }}
              />
              <input
                type="submit"
                className="button"
                name="submit"
                value="Sign in"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
