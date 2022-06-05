import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../useAuth";
import './onlineusers.css'
import { UserDetails } from "./UserDetails";

export const OnlineUsers = () => {
  const {users , setUsers , baseURL , userInfo} = useAuth()

  useEffect(() => {
      
    axios({
      method: 'post',
      url: `${baseURL}/profiles`,
      // data: {
      //   checkid: checkid
      // },
    }).then(res => {
      if(res.data.status === 200) {
        setUsers(res.data.getUsers)  
        // console.log(res.data.getUsers);
        // console.log(res.data.getUsers);
      } 
      else {
        console.log('error');
      }
      // setError(res.data.message)
    }).catch(err => {
      console.log('error at admin');
    })
  }, [users])



  return (
    <>
    <div className="row justify-content-end " >
      {users.map(user =>{
         return (   
          <UserDetails user={user}/> 
        );
      })}
    </div>


      
    </>
  );
};
