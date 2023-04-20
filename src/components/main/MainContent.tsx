import React, { useEffect, useState } from "react";
import "./main.css";
import MainCard from "./MainCard";
import MainIcon from "../../icons/MainIcon";

const fakeData = [
  {
    id: 1,
    count: "8497.55 SOL",
    text: "Total Interest (from Active Loans)",
  },
  {
    id: 2,
    count: "21673",
    text: "Total active positions",
  },
  {
    id: 3,
    count: "4085/1508",
    text: "Loans in 24H/12H",
  },
  {
    id: 4,
    count: "295240.32 SOL",
    text: "Active Loans Volume",
  },
  {
    id: 5,
    count: "337506.33 SOL",
    text: "Total Value Locked",
  },
];

const MainContent = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="bg-green">
      <div className="main-container">
        <h1>
          Buy your favorite NFTs with <span>leverage</span>
        </h1>
        <div className="cards">
          {width > 390 ? (
            fakeData.map((item) => {
              return (
                <MainCard key={item.id} count={item.count} text={item.text} />
              );
            })
          ) : (
            <div className="main-img">
              <MainIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
