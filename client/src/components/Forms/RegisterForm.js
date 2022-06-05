import axios from "axios";
import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useAuth } from "../../useAuth";

export const RegisterForm = () => {
  const { baseURL } = useAuth();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('')

  console.log(disabled);
  const [inputValues, setInputValues] = useState({
    username: "",
    fullname: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };


  // handle on submitting form
  const HandleOnSubmit = async (e) => {
    e.preventDefault();

    setDisabled(true);

    let formData = new FormData();
    formData.append("fullname", inputValues.fullname);
    formData.append("username", inputValues.username);
    formData.append("password", inputValues.password);

    if (
      !inputValues.fullname ||
      !inputValues.username ||
      !inputValues.password
    ) {
      setError("Please Fill Complete Form")
      setDisabled(false);
    } else {

      axios({
        method: "post",
        url: `${baseURL}/authregister`,
        data: {
          fullname: inputValues.fullname,
          username: inputValues.username,
          password: inputValues.password,
        }
      })
        .then((response) => {
          setDisabled(false);
          if(response.data.status == 200) {
            console.log(response.data.message);
          }
          setError(response.data.message)
          // return
        })
        .catch((err) => {
          setDisabled(false);
          console.log(err);
          setError('error')
        });
    }
  };

  return (
    <>
      <form action="" onSubmit={HandleOnSubmit}>
        
        <div>
        {error && <Alert className="py-2" variant='danger'>{error}</Alert>}
          
        </div>
        <input
          name="username"
          type="text"
          className="p-2 mt-1 rounded border btn text-light"
          style={{ width: "250px" }}
          placeholder="username"
          value={inputValues.username}
          onChange={handleOnChange}
        />{" "}
        <br />
        <input
          name="fullname"
          type="text"
          className="p-2 mt-1 rounded border btn text-light"
          style={{ width: "250px" }}
          placeholder="fullname"
          value={inputValues.fullname}
          onChange={handleOnChange}
        />{" "}
        <br />
        <input
          name="password"
          type="password"
          className="p-2 mt-1 rounded border btn text-light"
          style={{ width: "250px" }}
          placeholder="password"
          value={inputValues.password}
          onChange={handleOnChange}
        />{" "}
        <br />
        <button
          type="submit"
          className="btn btn-secondary"
          disabled={disabled}
        >
          {disabled ? <Spinner animation="border" /> : "Register"}
        </button>{" "}
      </form>
    </>
  );
};
