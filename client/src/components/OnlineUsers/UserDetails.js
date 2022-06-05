import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAuth } from "../../useAuth";
import './userdetails.css'
export function UserDetails({ user }) {
  const [show, setShow] = useState(false);

  const {userInfo} = useAuth()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div key={user._id}
        title={`${user.username} status: ${user.userstatus}`}
        className={`btn text-center onlinesingleuser  ${user.userstatus}-bg`}
        onClick={handleShow}
      >
        <img
          width={50}
          height={50}
          className="rounded-circle"
          src="https://pbs.twimg.com/profile_images/1498065659158306818/CfTNE2Xd_400x400.jpg"
          alt=""
        />
        <div>
          <div style={{ wordBreak: "break-all", textOverflow: "ellipsis" }}>
            {user.username.length > 6
              ? `${user.username.substring(0, 6)}...`
              : user.username}
          </div>
        </div>
      </div>

      <Modal size="sm" show={show} onHide={handleClose}>               
        <div className="container d-flex justify-content-center">
          <div className="card">
            <div className="top-container"> <img src="https://pbs.twimg.com/profile_images/1498065659158306818/CfTNE2Xd_400x400.jpg" className="img-fluid profile-image" width={70} />
              <div className="ml-3 mx-2">
                <h5 className="name">{user.fullname}</h5>
                <p className="mail">@{user.username}</p>
              </div>
            </div>
            <div className=" pt-2"> Active Status :
                <span className={`${user.userstatus}-text`}> {user.userstatus} </span> 
              
        {/* <i class="fa-solid fa-pen-to-square" style={{cursor: 'pointer'}}></i> */}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
} 
