/* eslint-disable no-unused-vars */
import React from 'react'
import HeroBanner from "./heroBanner/HeroBanner"
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import ScrollPrompt from '../../components/scrollPrompt/ScrollPrompt'


import "./style.scss"
const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <ScrollPrompt/>
    </div>
  )
}

export default Home