import Widget from "./component/Widget/Widget";
import { FollowButton } from "component/TopCreator/FollowButton";
import "./App.css";
import TopCreator from "component/TopCreator/TopCreator";
import ButtonSideBar from "component/Sidebar/ButtonSideBar";
import icon from "./assets/image/Icon.svg";
import SideBar from "component/Sidebar/SideBar";
function App() {
  return (
    <div className="container">
      <SideBar/>
      {/* <TopCreator/> */}
      {/* <ButtonSideBar
        text="Dashboard"
        icon={icon}
      /> */}
      {/* <FollowButton/> */}
      {/* <Widget
        text="Revenue"
        price={5}
        textPercent={12.3}
        textETH="ETH"
      />
      <Widget
        text="Spending"
        price={2}
        textPercent={8.1}
        textETH="ETH"
      />
      <Widget
        text="Roi"
        price={14.02}
        plus="+"
        textPercent={-5.1}
        textETH="%"
      />
      <Widget
        text="Estimated"
        price={3.2}
        textPercent={3.2}
        textETH="ETH"
      /> */}
      </div>
  );
}

export default App;
