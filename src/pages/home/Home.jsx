/* eslint-disable no-unused-vars */
import React from 'react'
import HeroBanner from "./heroBanner/HeroBanner"
import Trending from './trending/Trending'
import "./style.scss"
const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
    </div>
  )
}

export default Home