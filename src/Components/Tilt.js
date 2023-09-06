import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt'

function Tilt(props) {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(props.selector), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, [props.selector]);

  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default Tilt;
