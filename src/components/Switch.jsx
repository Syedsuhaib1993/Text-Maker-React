import React, { useState } from 'react';
import styled from 'styled-components';

const Switch = () => {
    const [toggle,setToggle]=useState(false)
    const darkmode=()=>{
        setToggle(!toggle)
        toggle==false?document.body.style.backgroundColor='#333':document.body.style.backgroundColor='#FFF';
        toggle==false?document.body.style.color='white':document.body.style.color='black';
        toggle==false?document.body.style.color='white':document.body.style.color='black';
        
        
        
    }
    
  return (
    <div className={`flex justify-self-end mr-4 mt-3`}>
        <h1>Enable Dark Mode</h1>
        <StyledWrapper>
      <div className="cl-toggle-switch">
        <label className="cl-switch">
          <input value={toggle} onClick={darkmode} type="checkbox" />
          <span />
        </label>
      </div>
    </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .cl-toggle-switch {
   position: relative;
  }

  .cl-switch {
   position: relative;
   display: inline-block;
  }
  /* Input */
  .cl-switch > input {
   appearance: none;
   -moz-appearance: none;
   -webkit-appearance: none;
   z-index: -1;
   position: absolute;
   right: 6px;
   top: -8px;
   display: block;
   margin: 0;
   border-radius: 50%;
   width: 40px;
   height: 40px;
   background-color: rgb(0, 0, 0, 0.38);
   outline: none;
   opacity: 0;
   transform: scale(1);
   pointer-events: none;
   transition: opacity 0.3s 0.1s, transform 0.2s 0.1s;
  }
  /* Track */
  .cl-switch > span::before {
   content: "";
   float: right;
   display: inline-block;
   margin: 5px 0 5px 10px;
   border-radius: 7px;
   width: 36px;
   height: 14px;
   background-color: rgb(0, 0, 0, 0.38);
   vertical-align: top;
   transition: background-color 0.2s, opacity 0.2s;
  }
  /* Thumb */
  .cl-switch > span::after {
   content: "";
   position: absolute;
   top: 2px;
   right: 16px;
   border-radius: 50%;
   width: 20px;
   height: 20px;
   background-color: #fff;
   box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
   transition: background-color 0.2s, transform 0.2s;
  }
  /* Checked */
  .cl-switch > input:checked {
   right: -10px;
   background-color: #85b8b7;
  }

  .cl-switch > input:checked + span::before {
   background-color: #85b8b7;
  }

  .cl-switch > input:checked + span::after {
   background-color: #018786;
   transform: translateX(16px);
  }
  /* Hover, Focus */
  .cl-switch:hover > input {
   opacity: 0.04;
  }

  .cl-switch > input:focus {
   opacity: 0.12;
  }

  .cl-switch:hover > input:focus {
   opacity: 0.16;
  }
  /* Active */
  .cl-switch > input:active {
   opacity: 1;
   transform: scale(0);
   transition: transform 0s, opacity 0s;
  }

  .cl-switch > input:active + span::before {
   background-color: #8f8f8f;
  }

  .cl-switch > input:checked:active + span::before {
   background-color: #85b8b7;
  }
  /* Disabled */
  .cl-switch > input:disabled {
   opacity: 0;
  }

  .cl-switch > input:disabled + span::before {
   background-color: #ddd;
  }

  .cl-switch > input:checked:disabled + span::before {
   background-color: #bfdbda;
  }

  .cl-switch > input:checked:disabled + span::after {
   background-color: #61b5b4;
  }`;

export default Switch;
