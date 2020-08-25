import React from 'react';
import web from '../src/images/img1.svg'
import { NavLink } from 'react-router-dom'
import Common from './Comon';

const Home = () => {
  return (
    <>
       <Common 
        name="Grow your business with"
        img={web} 
        visit="/service"
        btn_name="get started" 
     />
    </>
  )
}

export default Home;