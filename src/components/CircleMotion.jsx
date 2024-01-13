/* eslint-disable */
import React, { useState } from 'react';

const CircleMotion = ({innerCircleSize}) => {
  // const [innerCircleSize, setInnerCircleSize] = useState(0);

  const updateInnerCircleSize = (value) => {
    const percentage = parseFloat(value);

    if (!isNaN(percentage) && percentage >= 1 && percentage <= 100) {
      setInnerCircleSize(percentage);
    } else {
      console.log('Invalid input. Please enter a value between 1 and 100.');
    }
  };

  const mainCircleStyle = {
    position: 'relative',
    width: '100px',
    height: '100px',
    backgroundColor: '#85c1e9',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.3)',
    textAlign:'center',
    background: 'radial-gradient(circle at 65% 15%, white 0.5px, rgb(0, 255, 255,0.0) 3%, rgb(0,0,139,0.6) 60%, aqua 100%)',

  

    
  };

  const innerCircleStyle = {
    position: 'absolute',
    width: '100%',
    height: `${(innerCircleSize / 100) * 100}px`,
    backgroundColor: '#3498db',
    borderRadius: '50%',
    bottom: '0',
    transition: 'height 0.3s',
    background: 'radial-gradient(circle at 35% 10%, white 1px, aqua 3%, darkblue 80%, aqua 5%)',
    zIndex:'50%'
  };

  const aboveInnerCircleStyle = {
    position: 'absolute',
    width: '100%',
    height: `${(innerCircleSize / 100) * 100 + 0.1}px`,
    backgroundColor: 'black',
    borderRadius: '50%',
    bottom: '0',
    transition: 'height 0.3s',
  };

  return (
    <div>
  

      <div style={mainCircleStyle} id="mainCircle">
        <div style={{
          display:'flex',
          alignItems:'center',
          height:'100%',
          color:'white',
          textShadow: '0 0 3px aqua, 0 0 5px darkblue', 
          fontWeight:'bold',
          zIndex:'100',
          position:'absolute',
          left:'35%',
          fontSize:'16px'
          
        }}>
          {innerCircleSize}%
          </div>
        <div style={aboveInnerCircleStyle}></div>
        <div style={innerCircleStyle}>
        
        </div>
      </div>
    </div>
  );
};

export default CircleMotion;

/* eslint-enable */