import Header from "component/Header/index";
import styled from "styled-components";
import SideBar from "component/Sidebar/SideBar";
const LayoutStyled = styled.div`
  /* min-height: 200vh; */
  width: 1440px;
  height: 1024px;
  background-color: #CAEAE6;
  .right {
    float: right;
    width: 80%;
    /* height: 100%; */
    /* padding: 10px; */
  }
`;
const ContentStyled = styled.div`
  margin-top: 64px;
  /* height: 200vh; */
  height: 1024px;
`;
const SideBarStyled = styled.div`
  float: left;
  width: 20%;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled>
        <SideBar />
      </SideBarStyled>
      <div className="right">
        <Header />
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
