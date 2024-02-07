import React from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import './Skills.css';
import projectEmoji from '../../assets/images/skillsimg.png';
import { skillsData } from './SkillsJson';

function Skills() {
  return (
    <>
      <Header background="#ffffff" skillTextDecoration={"underline"} />
      <div className="">
        <div className="d-flex justify-content-around skillContainer">
          <div>
            <h1 className="skillTitle">
              My Skills<img className="skillEmoji mx-3 mb-4" src={projectEmoji} alt="" />
            </h1>
          </div>
        </div>
        <div className="skillsList py-5">
          <div className="row">
            {skillsData.map((skill, index) => (
              <div className='col-lg-2 col-md-3 col-sm-4 col-6 d-flex flex-column align-items-center'>
                <img className='skillIcon my-4' key={index} src={skill.skillIcon} alt={`Skill ${index + 1}`} />
                <div className='mb-5 text-center'>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;
