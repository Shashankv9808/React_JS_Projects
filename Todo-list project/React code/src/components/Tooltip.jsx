import React, { useState } from 'react';
import '../css/Tooltip.css';

export const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltip-text">{text}</div>}
    </div>
  )
}

