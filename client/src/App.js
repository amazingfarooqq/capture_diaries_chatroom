import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import { Forms } from './components/Forms/Forms';
import { useAuth } from './useAuth';
import './App.css'

export const App = () => {
  const { userInfo } = useAuth()

  return (
    <Routes>
      {userInfo && userInfo.username ? 
        <Route path="/" element={<Home />} />
        :
        <Route path="/" element={<Forms />} />
      }
  </Routes>
  )
}
