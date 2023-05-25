import { styled } from "styled-components";
import logo from "../../assets/image/Frame.svg";
import { ButtonSideBar } from "./index";
import iconDashboard from "../../assets/image/Icon.svg";
import iconShop from "../../assets/image/shop.svg";
import iconJug from "../../assets/image/judge.svg";
import iconCrypto from "../../assets/image/buy-crypto.svg";
import iconWallet from "../../assets/image/wallet-3.svg";
import iconLovely from "../../assets/image/lovely.svg";
import iconClock from "../../assets/image/clock.svg";
import iconSetting from "../../assets/image/setting.svg";
import iconSun from "../../assets/image/sun.svg";
import iconMoon from "../../assets/image/moon.svg";
import iconSmallMoon from "../../assets/image/smallmoon.svg";
import etherium from "../../assets/image/Ethereum (ETH).svg";
import next from "../../assets/image/next.svg";
import bigEthereum from "../../assets/image/Ethereum (ETH)B.svg";
import {React,useState} from "react"
const SideBarStyled = styled.div`
  font-family: "DM Sans";
  background-color: #ffff;
  /* width: 292px; */
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .header-icon {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "DM Sans";
    padding: 14px 14px 24px 10px;
  }

  .title h1 {
    margin: 0;
    font-weight: 700;
    font-size: 28px;
    color: #27262e;
  }

  .title small {
    font-weight: 700;
    color: #7a797d;
    font-size: 10px;
  }

  

  .btn-sidebar {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .other-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .other-content p {
  }

  .toggle {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-around;
    width: 56px;
    height: 30px;
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 4px;
    cursor: pointer;
    transition: .3s;
  }

  .toggle .ball{
    position: absolute;
    left: 10%;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: .3s ease-out;
  }
  .toggle img{
    z-index: 1;
  }

  .toggle-with
  /* 
  .sun {
    background-color: #ffff;
    border-radius: 20px;
    padding: 4px;
  } */

  .profile h3 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    color: #27262e;
  }

  .other h3 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    color: #27262e;
  }

  .other-content p {
    color: #7a797d;
    font-weight: 500;
    font-size: 16px;
    width: 58%;
  }
  .card-balance{
    align-self: center;
  }
  #toggle{
    display: none;
  }
  .dark .toggle .ball{
    background-color: #27262e;
    transform: translateX(27px);
  }
  .light .toggle .ball{
    background-color: #ffff;
  }
`;
const CardStyled = styled.div`
  width: 228px;
  height: 220px;
  border-radius: 16px;
  background-image: linear-gradient(to top right, #bbaaff, #5429ff);
  /* text-align: center; */
  /* justify-content: space-between; */
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 13px;
  position: relative;
  justify-content: center;
  h1 {
    font-weight: 500;
    font-size: 12px;
    color: #e0dee5;
    margin: 0;
    /* margin-top: 25px; */
    /* margin-top: 25px; */
  }
  .balance-price {
    font-weight: 700;
    font-size: 30px;
    color: #ffff;
  }

  .eth {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .action-balance {
    width: 196px;
    /* height: 49px; */
    padding: 14px 0px 14px 0px;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffff;
    z-index: 99;
  }
  .action-balance p {
    font-weight: 700;
    font-size: 14px;
    color: #27262e;
    margin: 0;
  }
  .btn-plus {
    background-color: #5429ff;
    border-radius: 20px;
    width: 20px;
    height: 20px;
    border: none;
    color: #ffff;
    text-align: center;
  }
  .btn-next {
    background-color: #ffff;
    border: none;
  }
  .eth p {
    color: #ffff;
    margin: 0;
    /* margin: 8px 0 8px 0; */
  }
  .eth {
    line-height: 25px;
  }
  .balance-price {
    margin: 0;
  }
  .big-ethereum-icon {
    position: absolute;
    left: 14%;
    bottom: 19%;
  }

`;
const CardBalance = () => {
  return (
    <CardStyled className="card-balance">
      <img className="big-ethereum-icon" src={bigEthereum} alt="" />
      <h1>Your Balance</h1>
      <p className="balance-price">1,034.02</p>
      <div className="eth">
        <img src={etherium} alt="" />
        <p>ETH</p>
      </div>
      <div className="action-balance">
        <button className="btn-plus">
          <span>+</span>
        </button>
        <p>Top Up Balance</p>
        <button className="btn-next">
          <img src={next} alt="" />
        </button>
      </div>
    </CardStyled>
  );
};

const SideBar = () => {
  const [toggle,setToggle] = useState("light");

  const onToggleChange = (event) =>{
    event.target.checked ? setToggle("dark") : setToggle("light") 
  }
  return (
    <SideBarStyled>
      <div className="header-icon">
        <img src={logo} alt="" />
        <div className="title">
          <h1>MyNFT</h1>
          <small>NFT Marketplace</small>
        </div>
      </div>

      <div className="option">
        <ButtonSideBar
          fontWeight={700}
          textColor="#5429FF"
          text="Dashboard"
          icon={iconDashboard}
        />
        <ButtonSideBar text="Market" icon={iconShop} />
        <ButtonSideBar text="Active Bids" icon={iconJug} />
      </div>
      <div className="profile">
        <h3>Profile</h3>
        <ButtonSideBar text="My Portfolio" icon={iconCrypto} />
        <ButtonSideBar text="Wallet" icon={iconWallet} />
        <ButtonSideBar text="Favorites" icon={iconLovely} />
        <ButtonSideBar text="History" icon={iconClock} />
        <ButtonSideBar text="Settings" icon={iconSetting} />
      </div>
      <div className="other">
        <h3>Other</h3>
        <div className={`other-content ` + toggle}>
          <img src={iconMoon} alt="" />
          <p>light mode</p>
          <input type="checkbox" id="toggle" onChange={onToggleChange} />
          <label for="toggle" className="toggle">
              <img className="sun" src={iconSun} alt="" />
              <img src={iconSmallMoon} alt="" />
              <span className="ball"></span>
          </label>
        </div>
      </div>

      <CardBalance />
    </SideBarStyled>
  );
};

export default SideBar;
