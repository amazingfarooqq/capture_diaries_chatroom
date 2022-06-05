import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../useAuth";
import "./login.css";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const Forms = () => {
  const { name, userInfo } = useAuth();
  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <>
      <h2
        className="fw-bold text-light p-3"
        style={{
          fontFamily: "Sedgwick Ave",
          paddingTop: "5px",
          position: "absolute",
        }}
      >
        Website
      </h2>
      <div className="container-fluid loginpage text-center">
        <div
          className="first flex-colomn d-flex"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <div>
              <button
                className={`btn  ${
                  !isRegistered ? "btn-secondary" : "btn-dark"
                } btn-secondary `}
                onClick={() => setIsRegistered(false)}
                style={{ fontSize: "12px", margin: "1px" }}
              >
                {" "}
                Register{" "}
              </button>

              <button
                className={`btn  ${
                  isRegistered ? "btn-secondary" : "btn-dark"
                } `}
                onClick={() => setIsRegistered(true)}
                style={{ fontSize: "12px", margin: "1px" }}
              >
                {" "}
                Login{" "}
              </button>
            </div>

            <div className="p-5 rounded">
              {isRegistered ? <LoginForm /> : <RegisterForm />}
            </div>
          </div>
        </div>
        <div className="second">
          <img
            className="w-100 h-100"
            src="https://cdn.dribbble.com/users/1894420/screenshots/11700268/online-video-chat.gif"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
