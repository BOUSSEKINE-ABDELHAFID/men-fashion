import React, {useState} from 'react'
import NavBar from './components/NavBar/NavBar';

const About = () => {
    const aboutIcon = true;

    return (
        <div>
        <NavBar aboutIcon/>
      <br/> <br/><br/>
            <h1>hello from the about component</h1>
        </div>
    )
}

export default About
