import React, {useState, useEffect} from 'react'
import {FaAws} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {FaPython} from 'react-icons/fa';
import {SiCisco} from 'react-icons/si';
import {SiFortinet} from 'react-icons/si';
import {SiAnsible} from 'react-icons/si';
import {SiTerraform} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {SiCsharp} from 'react-icons/si';
import {DiLinux} from 'react-icons/di';

import { Container } from 'react-bootstrap'

const Skills = () => {

  const iconElements = [
    <FaAws size={120} />,
    <FaReact size={120} />,
    <SiAnsible size={120} />,
    <SiTerraform size={120} />,
    <FaPython size={120} />,
    <DiLinux size={120} />,
    <SiCsharp size={120} />,
    <SiCisco size={120} />,
    <SiFortinet size={120} />,
    <SiJavascript size={120} />,
    <FaAws size={120} />,
    <FaReact size={120} />,
    <SiAnsible size={120} />,
    <SiTerraform size={120} />,
    <FaPython size={120} />,
    <DiLinux size={120} />,
    <SiCsharp size={120} />,
    <SiCisco size={120} />,
    <SiFortinet size={120} />,
    <SiJavascript size={120} />
  ]

  return (
    <div id="#skills">
      <div className="skill-slideshow" style={{display:"flex", alignItems:"center", height: '10em', flexWrap:"initial", scrollBehavior: "auto"}}>
        <div className="skill-mover" style={{display:"flex", gap:"3em"}}>
          {iconElements}
        </div>
      </div>
    </div>
  )
}

export default Skills