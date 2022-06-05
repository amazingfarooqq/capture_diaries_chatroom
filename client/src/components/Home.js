import { useEffect, useState } from "react";
import "./Home.css";
import { ChatBox } from "./ChatBox.js/ChatBox";
import { OnlineUsers } from "./OnlineUsers/OnlineUsers";
import { TopNav } from "./TopNav/TopNav";
import { useAuth } from "../useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LeftNav } from "./LeftNav/LeftNav";

function App() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [openProfileInfo, setOpenProfileInfo] = useState(true);
  const { users, setUsers, baseURL, userInfo } = useAuth();

  const navigate = useNavigate();

  const toggleMenuFunction = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <div className={`container-fluid`}>
        <div className="row " >
          {/* <div className="col-1 bg-dark" style={{width: '60px'}}>
            <LeftNav />
          </div> */}
          <div className="col m-0 p-0" style={{ height: "100vh" }}>
            <div className="box">
              <TopNav
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
                openProfileInfo={openProfileInfo}
                setOpenProfileInfo={setOpenProfileInfo}
                toggleMenuFunction={toggleMenuFunction}
              />
              <div className="row">
                <div className="col p-0 m-0 chatbox">
                  <ChatBox />
                </div>
                <div className="col-2 m-0 p-0 leftarea">
                  <OnlineUsers />
                </div>
                {/* <div className="col-2 bg-dark"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
