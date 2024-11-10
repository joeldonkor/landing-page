

// import React from 'react';
// import { FaBluetoothB } from 'react-icons/fa';
// import { FiBatteryCharging } from 'react-icons/fi';
// import { MdOutlinePower } from 'react-icons/md';
// import { PiMicrophone } from 'react-icons/pi';

// import './Specs.css';

// function Specs({ darkMode }) {
  
//   return (
//     <section className={`specs ${darkMode ? 'dark-mode' : ''}`}>
//       <h2 className='title'>Specs</h2>
//       <div className='specs-container'>
//         <div className="specs-content">
//           <div className="bluetooth">
//             <i className="specs-icon"><FaBluetoothB /></i>
//             <h3 className="specs-title">Connectivity</h3>
//             <span className="specs-subtitle">Bluetooth v5.2</span>
//           </div>

//           <div className="battery">
//             <i className="specs-icon"><FiBatteryCharging /></i>
//             <h3 className="specs-title">Battery</h3>
//             <span className="specs-subtitle">Duration 40h</span>
//           </div>

//           <div className="power">
//             <i className="specs-icon"><MdOutlinePower /></i>
//             <h3 className="specs-title">Power</h3>
//             <span className="specs-subtitle">Fast charge 4.2-AAC</span>
//           </div>

//           <div className='microphone'>
//             <i className="specs-icon"><PiMicrophone /></i>
//             <h3 className="specs-title">Microphone</h3>
//             <span className="specs-subtitle">Supports Apple Siri <br /> and Google</span>
//           </div>
//         </div>

//         <div>
//           <img src='/specs.png' alt='Specs' className='specs-image' />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Specs;

import React, { useEffect } from 'react';
import { FaBluetoothB } from 'react-icons/fa';
import { FiBatteryCharging } from 'react-icons/fi';
import { MdOutlinePower } from 'react-icons/md';
import { PiMicrophone } from 'react-icons/pi';

import './Specs.css';

function Specs({ darkMode }) {
  
  useEffect(() => {
    const observers = [];

    // Function to observe elements
    const observeElements = (className) => {
      const elements = document.querySelectorAll(`.${className}`);
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once the element is in view
          }
        });
      }, { threshold: 0.1 }); // Trigger animation when 10% of the element is visible

      elements.forEach(el => observer.observe(el));
      observers.push(observer);
    };

    // Observe elements with different animation classes
    observeElements('fade-in');
    observeElements('slide-in-right');

    // Clean up observers on unmount
    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section className={`specs ${darkMode ? 'dark-mode' : ''}`} id='specs'>
      <h2 className='title fade-in'>Specs</h2>
      
      <div className='specs-container'>
        <div className="specs-content slide-in-right">
          <div className="bluetooth">
            <i className="specs-icon"><FaBluetoothB /></i>
            <h3 className="specs-title">Connectivity</h3>
            <span className="specs-subtitle">Bluetooth v5.2</span>
          </div>

          <div className="battery">
            <i className="specs-icon"><FiBatteryCharging /></i>
            <h3 className="specs-title">Battery</h3>
            <span className="specs-subtitle">Duration 40h</span>
          </div>

          <div className="power">
            <i className="specs-icon"><MdOutlinePower /></i>
            <h3 className="specs-title">Power</h3>
            <span className="specs-subtitle">Fast charge 4.2-AAC</span>
          </div>

          <div className='microphone'>
            <i className="specs-icon"><PiMicrophone /></i>
            <h3 className="specs-title">Microphone</h3>
            <span className="specs-subtitle">Supports Apple Siri <br /> and Google</span>
          </div>
        </div>

        <div>
          <img src='/specs.png' alt='Specs' className='specs-image fade-in' />
        </div>
      </div>
    </section>
  );
}

export default Specs;
