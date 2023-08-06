/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './style.scss'; // Create a CSS file for styling the prompt (optional)
import {IoIosArrowDropdownCircle} from 'react-icons/io'
const ScrollPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    // After 3 seconds, hide the prompt
    const timer = setTimeout(() => {
      setShowPrompt(false);
    }, 5000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timer);
    };
  }, []);

  return showPrompt ? (
    <div className="scroll-prompt">
      <span>Scroll down for more content </span>
      <IoIosArrowDropdownCircle className='arrowDown'/>
    </div>
  ) : null;
};

export default ScrollPrompt;
