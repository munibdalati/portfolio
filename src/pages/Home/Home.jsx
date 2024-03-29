import React from 'react'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
import emoji from '../../assets/images/emoji.png'
// import mountain from '../../assets/images/mountain.png'
import homeImg from '../../assets/images/Programming-amico.svg'
import './Home.css'

function Home() {
  return (
    <>
      <Header background="#FFFFFF" homeTextDecoration={"underline"} />
      <div className='d-flex justify-content-center align-items-center gap-4 homeTopContainer'>
        <h1 className="homeName">I'm Munib Al-Dalati
          <img className="homeEmoji mb-5 mx-3" src={emoji} alt="" />
        </h1>
      </div>
      <p className="homeCareer text-center">Full Stack Web and Mobile Developer</p>
      <img className="homeImg" src={homeImg} alt="homeImg" />
      <Footer />
    </>
  )
}

export default Home