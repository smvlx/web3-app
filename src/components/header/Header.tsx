import React, { useEffect, useState } from "react";
import Logo from "../../icons/Logo";
import Moon from "../../icons/Moon";
import WalletIcon from "../../icons/WalletIcon";
import SearchIcon from "../../icons/SearchIcon";
import "./header.css";

const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const buttonContent = width > 390 ? "Connect Wallet" : <WalletIcon />;

  const logoText = width > 390 ? "Robox.Fi" : "Robox";

  return (
    <header>
      <div className="header-container">
        <div className="logo_buttons-wrapper">
          <div className="logo">
            <Logo /> <span>{logoText}</span>
          </div>
          <div className="header_buttons">
            <button>Trade</button>
            <button>Lend</button>
            <button>Leaderboards</button>
            <button>About</button>
          </div>
        </div>
        <div className="header_group">
          <div className="input-container">
            <input placeholder="Search collections, NFTs" type="text" />
            <span className="icon-container">
              <SearchIcon />
            </span>
          </div>
          <button className="moon">
            <Moon />
          </button>
          <button className="wallet">{buttonContent}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
