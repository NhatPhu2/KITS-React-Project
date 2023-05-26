import "./App.css";
import Home from "container/Home/index";
import Login from "container/Login/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    // <Home />
    // <div className="container">
    //   {/* <SideBar/> */}
    //   {/* <Search/> */}
    //   {/* <TopCreator/> */}
    //   {/* <ButtonSideBar
    //     text="Dashboard"
    //     icon={icon}
    //   /> */}
    //   {/* <FollowButton/> */}
    // {/* <Widget
    //   text="Revenue"
    //   price={5}
    //   textPercent={12.3}
    //   textETH="ETH"
    // />
    // <Widget
    //   text="Spending"
    //   price={2}
    //   textPercent={8.1}
    //   textETH="ETH"
    // />
    // <Widget
    //   text="Roi"
    //   price={14.02}
    //   plus="+"
    //   textPercent={-5.1}
    //   textETH="%"
    // />
    // <Widget
    //   text="Estimated"
    //   price={3.2}
    //   textPercent={3.2}
    //   textETH="ETH"
    // /> */}
    //   </div>
  );
}

export default App;
