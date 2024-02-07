import React from 'react'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
import './Contact.css'
import ContactImg from '../../assets/images/contact-img.png';
import location from '../../assets/images/location.svg'
import telephone from '../../assets/images/telephone.svg'

function Contact() {
  return (
    <>
      <Header background="#ffffff" contactTextDecoration={"underline"} />
      <div className="contactContainer">
        <h1 className="contactTitle">Contact me <img className="contactEmoji mx-3 mb-4" src={ContactImg} alt="" />
        </h1>

        <div className="contactBody row">
          <div className="d-flex col-md-5 col-12 flex-column contactParagraph">
            <p className='contactGetInTouch'>Get In Touch</p>
            <p className="contactFirstParagraph">If you liked my website, I'll be happy to contact with you!</p>
            <p className="contactSecondParagraph">Also, you can see my different social media accounts below. Thank you for your visit!</p>
            <p className="contactSecondParagraph"><img className='contactIcon' src={telephone} />+962785056637</p>
            <p className="contactSecondParagraph"><img className='contactIcon' src={location} />Amman, Jordan</p>
            
          </div>

          <form action="" method="get" className="form-example contactForm col-5">
            <label htmlFor="name" className="contactName">Name: </label>
            <input type="text" name="name" className="contactNameBlank" required />

            <label htmlFor="Subject" className="contactSubject">Subject: </label>
            <input type="Subject" name="Subject" className="contactSubjectblank" required />

            <label htmlFor="email" className="contactMessage">Message: </label>
            <textarea rows="5" cols="40" name="text" className="contactMessageblank"></textarea>

            <a className="contactBtn" href="mailto:munib.dalati@gmail.com">SEND</a>
          </form>
        </div>
      </div>
      <Footer />
    </>)
}

export default Contact