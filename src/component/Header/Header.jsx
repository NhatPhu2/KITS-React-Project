import styled from "styled-components";
import Search from "component/Search/index";
import bell from "../../assets/image/bell.svg";
import avatar from "../../assets/image/avatar.svg";
import { Link } from "react-router-dom";
const HeaderStyled = styled.div`
  position: fixed;
  z-index: 99;
  width: inherit;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 16px 45px 20px 19px;
  background-color: #caeae6;
  .bell {
    display: inline-block;
    background-color: #ffff;
    width: 56px;
    height: 56px;
    border-radius: 30px;
    line-height: 56px;
    text-align: center;
  }
  .bell img {
    vertical-align: middle;
  }
  .right-header {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .avartar{
    position: relative;
    ul{
      position: absolute;
      right: 0;
      margin: 0;
      /* background-color: gray; */
      display: none;
    }
    ul li{
      list-style: none;
    }
    ul li a{
      text-decoration: none;
      color: black;
    }
  }
  .avartar:hover ul{
    display: block;
  }
`;
const Header = () => {
  return (
    <HeaderStyled>
      <Search />
      <div className="right-header">
        <span className="bell">
          <img src={bell} alt="" />
        </span>
        <span className="avartar">
          <img src={avatar} alt="" />
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
