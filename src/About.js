import React from 'react';
import web from '../src/images/img1.svg'
import { NavLink } from 'react-router-dom'
import Common from './Comon';

const About = () => {
  return (
    <>
      <Common 
       name="Welcome to About page"
       img={web} 
       visit="/contact"
       btn_name="contact now" 
     />
    </>
  )
}

export default About;