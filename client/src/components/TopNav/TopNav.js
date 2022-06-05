import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { useAuth } from "../../useAuth";
import "./topnav.css";
export const TopNav = ({ openProfileInfo, setOpenProfileInfo }) => {
  const { baseURL, users, userInfo, setUserInfo } = useAuth();
  const [show, setShow] = useState(false);
  const [userdata, setUserdata] = useState({});
  const [userStatusValue, setUserStatusValue] = useState(userInfo.userstatus);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const u = users.find((user) => user.username === userInfo.username);
    setUserdata(u);
  }, [users]);

  const handleShow = () => {
    setShow(true);
    setOpenProfileInfo(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const logout = () => {
    setUserStatusValue("NODM");
    sessionStorage.removeItem("userinfo");
    setUserInfo("");
  };

  // ON SUBMITTONG FORM
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    axios({
      method: "post",
      url: `${baseURL}/updateuser`,
      data: {
        username: userInfo.username,
        userstatus: userStatusValue,
      },
    })
      .then((res) => {
        console.log(res.data.messege);
        setShow(false);
        setDisabled(false);
      })
      .catch((err) => {
        setDisabled(false);
        console.log("error at admin");
      });
  };

  return (
    <>
        <div className="row sticky-top topnav text-light pt-2">
          <div className="col">
            <h2
              className="fw-bold"
              style={{ fontFamily: "Sedgwick Ave", paddingTop: "5px" }}
            >
              Capture Diaries
            </h2>
          </div>
          <div className="col text-end">
            <div className="box-tools pull-right py-1">
              <span
                className="mx-2 text-secondary"
                style={{ fontSize: "14px" }}
              >
                @{userInfo.username}
              </span>
              <img
                width={40}
                height={40}
                style={{ cursor: "pointer" }}
                className="rounded-circle"
                onClick={() => setOpenProfileInfo(!openProfileInfo)}
                src="https://pbs.twimg.com/profile_images/1498065659158306818/CfTNE2Xd_400x400.jpg"
                alt=""
              />

              <div
                className={`profileinfo p-0 text-end bg-dark ${
                  openProfileInfo && "d-none"
                }`}
              >
                <img
                  className="w-100"
                  style={{ height: "70px" }}
                  src="https://pbs.twimg.com/profile_images/1498065659158306818/CfTNE2Xd_400x400.jpg"
                  alt=""
                />
                <button
                  className="text-center btn btn-dark py-0 w-100"
                  onClick={handleShow}
                >
                  Profile
                </button>
                <button
                  type="submit"
                  className="btn btn-dark py-0 pb-1 w-100"
                  style={{ borderRadius: "0px" }}
                  onClick={logout}
                >
                  Logout{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal size="sm" show={show} onHide={handleClose}>
          <div className="container d-flex justify-content-center">
            <div className="card">
              <div className="top-container">
                <img
                  src="https://pbs.twimg.com/profile_images/1498065659158306818/CfTNE2Xd_400x400.jpg"
                  className="img-fluid profile-image"
                  width={70}
                />
                <div className="ml-3 mx-2">
                  <h5 className="name">{userInfo.fullname}</h5>
                  <p className="mail">@{userInfo.username}</p>
                </div>
              </div>
              <div className=" pt-2">
                {" "}
                Active Status :
                <span>
                  {" "}
                  {disabled ? (
                    <Spinner size="sm" animation="border" />
                  ) : (
                    userdata && userdata.userstatus
                  )}{" "}
                </span>
                {userdata && userdata.username === userInfo.username && (
                  <>
                    <form action="" onSubmit={handleOnSubmit}>
                      <button
                        type="submit"
                        onClick={(e) => setUserStatusValue("Available")}
                        className={`btn btn-${
                          userdata && userdata.userstatus == "Available"
                            ? ""
                            : "outline-"
                        }success p-0 m-0 px-1`}
                        style={{ margin: "3px" }}
                      >
                        Available
                      </button>
                      <button
                        type="submit"
                        onClick={(e) => setUserStatusValue("NODM")}
                        className={`btn btn-${
                          userdata && userdata.userstatus == "NODM"
                            ? ""
                            : "outline-"
                        }danger p-0 px-1`}
                        style={{ margin: "3px" }}
                      >
                        No private
                      </button>
                      <button
                        type="submit"
                        onClick={(e) => setUserStatusValue("BRB")}
                        className={`btn btn-${
                          userdata && userdata.userstatus == "BRB"
                            ? ""
                            : "outline-"
                        }warning p-0 px-1`}
                        style={{ margin: "3px" }}
                      >
                        BRB
                      </button>
                      {/* <button type="submit">Submit</button> */}
                    </form>
                  </>
                )}
                {/* <i class="fa-solid fa-pen-to-square" style={{cursor: 'pointer'}}></i> */}
              </div>
            </div>
          </div>
        </Modal>
    </>
  );
};
