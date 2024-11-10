

import React, { useEffect } from 'react';
import { MdOutlineInfo } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import './Case.css';

function Case() {
  useEffect(() => {
    const observers = [];

    // Function to observe elements
    const observeElements = (className) => {
      const elements = document.querySelectorAll(`.${className}`);
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once element is in view
          }
        });
      }, { threshold: 0.1 }); // Trigger animation when 10% of the element is visible

      elements.forEach(el => observer.observe(el));
      observers.push(observer);
    };

    // Observe elements with different animation classes
    observeElements('fade-in');
    observeElements('slide-in-right');
    observeElements('slide-in-up');

    // Clean up observers on unmount
    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section className="case" id='case'>
      <h2 className="section-title">Case</h2>

      <div className="case-container slide-in-right">
        <div>
          <img src="./case.png" alt="case image" className="case-img"/>
        </div>

        <div className="case-data fade-in">
          <p className="case-description">
            With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.
          </p>

          <a href="#" className="button--flex fade-in">
            <MdOutlineInfo className="button__icon" /> More Info
          </a>
        </div>
      </div>

      <section className='discount-section'>
        <div className='discount-container slide-in-up'>
          <div className="discount-animate">
            <h2 className="discount-title fade-in">Immerse yourself in <br /> your music</h2>
            <p className="discount-description fade-in">Get it now, up to 50% off</p>
            <a href="#" className='button--flex fade-in'>
              <i className="button-icon"><LuShoppingBag /></i> Shop Now
            </a>
          </div>
          <img src="./discount.png" alt="" className="discount-img" />
        </div>
      </section>
    </section>
  );
}

export default Case;

