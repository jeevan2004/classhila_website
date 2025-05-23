import React, { useEffect, useState } from "react";
import "./commingSoon.css";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const target = new Date();
    target.setSeconds(target.getSeconds() + (30 * 24 * 60 * 60) + (20 * 60 * 60) + (30 * 60) + 10);
    const difference = +target - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        endTime: target,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const difference = +timeLeft.endTime - +now;

      if (difference <= 0) {
        clearInterval(countdownInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          endTime: timeLeft.endTime,
        });
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [timeLeft.endTime]);

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h4>ClassHila</h4>
        <h1>Coming Soon</h1>
        <p className="subheading">STAY TUNED — WE ARE LAUNCHING</p>
        <p className="description">
          We are currently working on launching our website. Meanwhile, read some information about us and subscribe to our newsletter to get notified when we launch.
        </p>

        <div className="countdown">
          {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Min, {timeLeft.seconds} Sec
        </div>

        <p className="subscribe-text">Subscribe to our newsletter & stay updated</p>

        <form className="subscribe-form">
          <input type="email" placeholder="your@email.com" />
          <button type="submit">Subscribe</button>
        </form>

        <ul className="social-icons">
          <li><i className="fab fa-facebook-f" /></li>
          <li><i className="fab fa-twitter" /></li>
          <li><i className="fab fa-dribbble" /></li>
          <li><i className="fab fa-instagram" /></li>
          <li><i className="fas fa-envelope" /></li>
        </ul>
      </div>
    </div>
  );
};

export default ComingSoon;
