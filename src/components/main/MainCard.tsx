import React from "react";

interface IProps {
  count: string;
  text: string;
}

const MainCard: React.FC<IProps> = ({ count, text }) => {
  return (
    <div className="card">
      <span>{count}</span>
      <p>{text}</p>
    </div>
  );
};

export default MainCard;
