import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  changeEmail,
  changeUsername,
  changePassword,
  reset,
} from "../redux/actions/SignupActions";
import "../css/signup.css";

export default function Signup() {
  const history = useHistory();

  const { addToast } = useToasts();

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password } = userInfo;
    if (email === "" || username === "" || password === "") {
      addToast("Please Enter All Fields", {
        appearance: "warning",
        autoDismiss: true,
      });
    } else if (username === password) {
      addToast("Password and Username should not be same", {
        appearance: "warning",
        autoDismiss: true,
      });
    } else {
      addToast("Successfully Created Account", {
        appearance: "success",
        autoDismiss: true,
      });
      localStorage.setItem(username, JSON.stringify(userInfo));
      dispatch(reset());
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  };

  return (
    <div className="app__signup">
      <div className="Container-shadow"></div>
      <div className="Container">
        <div className="wrap">
          <div className="Headings">
            <Link to="/">
              <span>Log In</span>
            </Link>
            <Link to="/signup" className="active">
              <span>Sign Up</span>
            </Link>
          </div>
          <div id="sign-up-form">
            <form>
              <label htmlFor="email">Email</label>
              <input
                id="password0"
                type="email"
                name="email"
                value={userInfo.email}
                onChange={(e) => dispatch(changeEmail(e.target.value))}
              />
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={(e) => dispatch(changeUsername(e.target.value))}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={userInfo.password}
                onChange={(e) => dispatch(changePassword(e.target.value))}
              />
              <input
                type="submit"
                className="button"
                name="submit"
                value="Create Account"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
