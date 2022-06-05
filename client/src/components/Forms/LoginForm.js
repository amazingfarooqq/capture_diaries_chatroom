import axios from "axios";
import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useAuth } from "../../useAuth";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { baseURL , userInfo ,  setUserInfo} = useAuth();

  const navigate = useNavigate();


  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  console.log(disabled);
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const HandleOnSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    axios({
      method: "post",
      url: `${baseURL}/authlogin`,
      data: {
        username: inputValues.username,
        password: inputValues.password,
      },
    })
      .then((res) => {
        setDisabled(false);

        if (res.data.status === 200) {
          sessionStorage.setItem("userinfo", JSON.stringify(res.data.getUser));
          setUserInfo(JSON.parse(sessionStorage.getItem("userinfo")));
          // console.log(JSON.parse(sessionStorage.getItem('userinfo')));
          setDisabled(true);
          navigate("/");

          // res.data.role ? navigate('/admin') : navigate('/')
        }
        setError(res.data.message);
      })
      .catch((err) => {
        setDisabled(true);
        setError("Error at login");
        console.log("error at login");
      });
  };

  return (
    <>
      <form action="" onSubmit={HandleOnSubmit}>
        <div>
          {error && (
            <Alert className="py-2" variant="danger">
              {error}
            </Alert>
          )}
        </div>
        <input
          value={inputValues.username}
          onChange={handleOnChange}
          name="username"
          type="text"
          className="p-2 mt-1 rounded border btn text-light"
          style={{ width: "250px" }}
          placeholder="username"
        />{" "}
        <br />
        <input
          value={inputValues.password}
          onChange={handleOnChange}
          name="password"
          type="password"
          className="p-2 mt-1 rounded border btn text-light"
          style={{ width: "250px" }}
          placeholder="password"
        />{" "}
        <br />
        <button type="submit" className="btn btn-secondary" disabled={disabled}>
          {disabled ? <Spinner animation="border" /> : "Login"}
        </button>{" "}
      </form>
    </>
  );
};
