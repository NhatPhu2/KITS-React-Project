import Widget from "./component/widget/Widget";
import { FollowButton } from "component/topcreator/FollowButton";
import "./App.css";
import TopCreator from "component/topcreator/TopCreator";
function App() {
  return (
    <div className="container">
      <TopCreator/>
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
