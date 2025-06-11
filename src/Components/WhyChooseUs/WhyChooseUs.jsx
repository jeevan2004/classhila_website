import React from 'react'
import './whyChooseUs.css'
import why_choose_us from '../../assets/image/why_choose_us.png'
import { ReactComponent as WhyChoose1 } from '../../assets/image/whychoose1.svg';
import { ReactComponent as WhyChoose2 } from '../../assets/image/whychoose2.svg';
import { ReactComponent as WhyChoose3 } from '../../assets/image/whychoose3.svg';


const WhyChooseUs = () => {
  return (
    <div className='whyChooseUs py-5'>
        <div className="container">
        <h3>WhyChooseUs</h3>
        
        <div className="row">
            <div className="col-md-6">
                <h5>Best Coaching at the Lowest Prices in the Market</h5>
                <p>Classhila offers an affordable and accessible solution compared to the high costs associated with other coaching institutes. For affordable fee structure students can access expert guidance and training for a wide range of exams. Taught by renowned teachers, Classhila employs innovative teaching methodologies to ensure effective learning and exam preparation.</p>
          <ul>
            <li>
                <span className='icon'>
                    <WhyChoose1 />
                </span>
                <span>
                    <h4>High-Quality Content Course</h4>
                    <p>Our courses are taught by the best in the academic world of schools and colleges.</p>
                </span>
            </li>
            <li>
                <span className='icon'>
                    <WhyChoose2 />
                </span>
                <span>
                    <h4>High-Quality Content Course</h4>
                    <p>Our courses are taught by the best in the academic world of schools and colleges.</p>
                </span>
            </li>
            <li>
                <span className='icon'>
                    <WhyChoose3 />
                </span>
                <span>
                    <h4>High-Quality Content Course</h4>
                    <p>Our courses are taught by the best in the academic world of schools and colleges.</p>
                </span>
            </li>
          </ul>

          
            </div>
            <div className="col-md-6">
                <div className="image_sec">
                    <img src={why_choose_us} />
                </div>
            </div>



        </div>
        </div>
        
        
        </div>
  )
}

export default WhyChooseUs