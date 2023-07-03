import React from "react";

const ScrollUpButton = () => {
  const scrollTop = () => window.scrollTo({ top: 0 });

  return (
    <div className="button">
      <button onClick={scrollTop}>Top</button>
    </div>
  );
};

export default ScrollUpButton;
