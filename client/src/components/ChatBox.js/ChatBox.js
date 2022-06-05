import React, { useState } from "react";
import { useAuth } from "../../useAuth";
import "./chatbox.css";
export const ChatBox = ({ toggleMenuFunction }) => {
  const { users } = useAuth();
  return (
    <>
      <div className="direct-chat-messages pt-1 pb-0"
        style={{ height: "81vh", marginLeft: "10px" }}
      >

        <div className="direct-chat-msg px-1">
          {/* /.direct-chat-info */}
          <img
            className="direct-chat-img"
            src="https://bootdey.com/img/Content/user_1.jpg"
            alt="Message User Image"
          />
          
          {/* /.direct-chat-img */}
          <div className="direct-chat-text ">
            <div className="row">
              <div className="col-12 " >
                <div className="row">
                  <div className="col-6 fw-bold" style={{fontSize: '18px'}}>
                    Alexander Pierce
                  </div>
                  <div className="col-6 text-end direct-chat-timestamp " style={{fontSize: '11px'}}>
                    23 Jan 2:00 pm
                  </div>
                </div>
               
              </div>
              <div className="col-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            libero enim quisquam aliquam repellat voluptatum vitae nemo ex nam
            asperiores itaque, deserunt incidunt. Nulla alias modi laboriosam
            quibusdam aspernatur iste!
              </div>
            </div>

         
          </div>


        </div>

        <div className="direct-chat-msg px-1">
          {/* /.direct-chat-info */}
          <img
            className="direct-chat-img"
            src="https://bootdey.com/img/Content/user_1.jpg"
            alt="Message User Image"
          />
          
          {/* /.direct-chat-img */}
          <div className="direct-chat-text ">
            <div className="row">
              <div className="col-12 " >
                <div className="row">
                  <div className="col-6 fw-bold" style={{fontSize: '18px'}}>
                    Alexander Pierce
                  </div>
                  <div className="col-6 text-end direct-chat-timestamp " style={{fontSize: '11px'}}>
                    23 Jan 2:00 pm
                  </div>
                </div>
               
              </div>
              <div className="col-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            libero enim quisquam aliquam repellat voluptatum vitae nemo ex nam
            asperiores itaque, deserunt incidunt. Nulla alias modi laboriosam
            quibusdam aspernatur iste!
              </div>
            </div>

         
          </div>


        </div>
        <div className="direct-chat-msg px-1">
          {/* /.direct-chat-info */}
          <img
            className="direct-chat-img"
            src="https://bootdey.com/img/Content/user_1.jpg"
            alt="Message User Image"
          />
          
          {/* /.direct-chat-img */}
          <div className="direct-chat-text ">
            <div className="row">
              <div className="col-12 " >
                <div className="row">
                  <div className="col-6 fw-bold" style={{fontSize: '18px'}}>
                    Alexander Pierce
                  </div>
                  <div className="col-6 text-end direct-chat-timestamp " style={{fontSize: '11px'}}>
                    23 Jan 2:00 pm
                  </div>
                </div>
               
              </div>
              <div className="col-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            libero enim quisquam aliquam repellat voluptatum vitae nemo ex nam
            asperiores itaque, deserunt incidunt. Nulla alias modi laboriosam
            quibusdam aspernatur iste!
              </div>
            </div>

         
          </div>


        </div>
        <div className="direct-chat-msg px-1">
          {/* /.direct-chat-info */}
          <img
            className="direct-chat-img"
            src="https://bootdey.com/img/Content/user_1.jpg"
            alt="Message User Image"
          />
          
          {/* /.direct-chat-img */}
          <div className="direct-chat-text ">
            <div className="row">
              <div className="col-12 " >
                <div className="row">
                  <div className="col-6 fw-bold" style={{fontSize: '18px'}}>
                    Alexander Pierce
                  </div>
                  <div className="col-6 text-end direct-chat-timestamp " style={{fontSize: '11px'}}>
                    23 Jan 2:00 pm
                  </div>
                </div>
               
              </div>
              <div className="col-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            libero enim quisquam aliquam repellat voluptatum vitae nemo ex nam
            asperiores itaque, deserunt incidunt. Nulla alias modi laboriosam
            quibusdam aspernatur iste!
              </div>
            </div>

         
          </div>


        </div>
        <div className="direct-chat-msg px-1">
          {/* /.direct-chat-info */}
          <img
            className="direct-chat-img"
            src="https://bootdey.com/img/Content/user_1.jpg"
            alt="Message User Image"
          />
          
          {/* /.direct-chat-img */}
          <div className="direct-chat-text ">
            <div className="row">
              <div className="col-12 " >
                <div className="row">
                  <div className="col-6 fw-bold" style={{fontSize: '18px'}}>
                    Alexander Pierce
                  </div>
                  <div className="col-6 text-end direct-chat-timestamp " style={{fontSize: '11px'}}>
                    23 Jan 2:00 pm
                  </div>
                </div>
               
              </div>
              <div className="col-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            libero enim quisquam aliquam repellat voluptatum vitae nemo ex nam
            asperiores itaque, deserunt incidunt. Nulla alias modi laboriosam
            quibusdam aspernatur iste!
              </div>
            </div>

         
          </div>


        </div>
        <div className="direct-chat-msg px-1">
          {/* /.direct-chat-info */}
          <img
            className="direct-chat-img"
            src="https://bootdey.com/img/Content/user_1.jpg"
            alt="Message User Image"
          />
          
          {/* /.direct-chat-img */}
          <div className="direct-chat-text ">
            <div className="row">
              <div className="col-12 " >
                <div className="row">
                  <div className="col-6 fw-bold" style={{fontSize: '18px'}}>
                    Alexander Pierce
                  </div>
                  <div className="col-6 text-end direct-chat-timestamp " style={{fontSize: '11px'}}>
                    23 Jan 2:00 pm
                  </div>
                </div>
               
              </div>
              <div className="col-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            libero enim quisquam aliquam repellat voluptatum vitae nemo ex nam
            asperiores itaque, deserunt incidunt. Nulla alias modi laboriosam
            quibusdam aspernatur iste!
              </div>
            </div>

         
          </div>


        </div>
      </div>
      <div className="box-footer" style={{ height: "10vh" }}>
        <form action="#" method="post">
          <div className="input-group">
            <input
              type="text"
              name="message"
              placeholder="Type Message ..."
              className="form-control"
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary btn-flat">
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
