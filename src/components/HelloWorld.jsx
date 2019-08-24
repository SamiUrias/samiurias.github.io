import React, { useState } from "react";

const HelloWolrd = () => {
    const [active, setActive] = useState(true);
    const handleClick = () => {
        setActive(!active);
    }
  return (
    <div>
      <button onClick={handleClick}>Ocultar</button>
      { active &&<h1>Hola mundo | 2</h1>}
        
      
   
    </div>
  );
};

export default HelloWolrd;
