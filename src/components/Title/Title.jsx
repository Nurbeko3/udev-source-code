import React from "react";

const Title = ({ title, pt }) => {
  return (
    <h2
      style={{ paddingTop: pt }}
      className="text-4xl font-bold text-primary mb-8 text-[#1B5BF7] pb-[50px] text-[60px]"
    >
      {title}
    </h2>
  );
};

export default Title;
