import React from 'react'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
import './About.css'
import cloud from '../../assets/images/cloud.png'
import emoji from '../../assets/images/munib about.png'
import munib from '../../assets/images/munib-removebg.png'
import cv from '../../assets/files/Munib-Al-Dalati-resume.pdf'

function About() {
  return (
    <>
      <Header background="#E0EBE8" aboutTextDecoration={"underline"}  />
      <div>
        <div className="aboutAllContainer">
          <div className="aboutTopContainer d-flex justify-content-around px-5">
            <div>
            <img className="w-100" src={cloud} alt="cloud-img" /></div>
            <div>
            <h1 className="aboutTitle">About me <img className="aboutEmoji" src={emoji} alt="" /></h1>
            </div>
            <div>
            <img className="w-100" src={cloud} alt="cloud-img" />
            </div>
          </div>
          <div className="aboutBody">
            <div className="aboutIntroduction">
              <h2 className="aboutName">Munib Al-Dalati</h2>
              <h3>Summary</h3>
              <p>
                Experienced Full Stack Web and Mobile Developer with expertise in HTML/CSS, JavaScript, React, and MERN.
                Skilled in translating ideas into robust, scalable, and intuitive solutions. Strong English language proficiency
                (IELTS band 6.5). Detail-oriented, passionate about clean code, and committed to delivering high-quality
                results. Seeking opportunities to collaborate on impactful digital experiences. Let's connect and discuss
                how we can work together on your next project or opportunity.
              </p>
              <p className="cv-download-paragraph text-center">
                <a className="cv-download" href={cv} download>
                  Download My CV
                </a>
                <i className="fa-regular fa-file-lines cv-icon px-2"></i>
              </p>
            </div>
            <img className="aboutImg" src={munib} alt="" />
          </div>
        </div>
      </div>
      <Footer />

    </>)
}

export default About