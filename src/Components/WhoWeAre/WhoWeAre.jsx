import React from 'react'
import './whoWeAre.css'
import whoWe from '../../assets/image/who-we-are.png'
import { ReactComponent as HowWe1 } from '../../assets/image/howWe1.svg';
import { ReactComponent as HowWe2 } from '../../assets/image/howWe2.svg';
const WhoWeAre = () => {
  return (
    <div className='whoWeAre'  style={{
        backgroundImage: `url(${whoWe})`,
      }}>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-7">

                
        <h4>Who We Are</h4>
        <h3>We boost your performance beyond your expectations</h3>
        <p>Classhila is a subscription-based online learning platform that provides access to a wide range of educational resources and expert guidance.</p>
        </div>
        </div>
<div className="row mt-5">
    <div className="col-md-5">
        <div className="box">
            <div className='icon'>
      <HowWe1 />
            </div>
            <h4>Vision</h4>
            <p>To create a world where every student, regardless of their background, is empowered with a well-rounded education that nurtures resilience, critical thinking, and a passion for lifelong learning, equipping them to confidently navigate and succeed in the complexities of the modern world.</p>
        </div>
    </div>
    <div className="col-md-5">
        <div className="box">
        <div className='icon'>
      <HowWe2 />
            </div>
            <h4>Mission</h4>
            <p>Our mission is to break down barriers to quality education and create a supportive, inclusive learning environment ensuring that every student, including those with special needs, reach their full potential. We are dedicated to providing a transformative educational experience by leveraging innovative teaching methods and affordable access to expert guidance that fosters academic excellence, personal growth, and social development.</p>
        </div>
    </div></div>
</div>

    </div>
  )
}

export default WhoWeAre