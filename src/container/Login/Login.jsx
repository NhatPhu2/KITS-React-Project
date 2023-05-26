import {
  LogoGoogle,
  LogoFacebook,
  LogoGithub,
  LoginBackground,
  LogoSideBar,
  IconEye,
} from "../../component/Logo/index";
import { styled } from "styled-components";
import { React, useState } from "react";
const ContainerStyled = styled.div`
  width: 1920px;
  height: 1080px;
  background-image: linear-gradient(to right, #ffffff 0%, #bbaaff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    /* width: 1366px;
    height: 849px;
    background-color: #ffffff;
    border-radius: 40px; */
    position: relative;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* justify-content: space-around; */
    gap: 50px;
  }

  /* .right-block {
    position: absolute;
    right: 0;
    top: 0;
    width: 489px;
    height: 849px;
    background-color: #c0dbea;
    border-radius: 40px;
  } */

  .logo {
    /* width: 212px;
    height: 47px;
    background-color: #d9d9d9; */
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 30px;
    h1 {
      margin: 0;
      font-family: "DM Sans";
      font-weight: 700;
      font-size: 28px;
    }
    p {
      margin: 0;
      font-weight: 700;
      font-size: 10px;
      font-family: "DM Sans";
      color: #7a797d;
    }
  }

  .login {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .img {
    align-self: end;
    z-index: 99;
  }

  .text-login {
    width: 166px;
    height: 84px;
    font-family: "Poppins", serif;
    font-size: 56px;
    line-height: 84px;
    font-weight: 600;
    margin: 15px 0px;
  }

  .input-group input {
    width: 100%;
    height: 46px;
    border-radius: 4px;
    background-color: rgba(187, 170, 255, 0.5);
    margin-bottom: 10px;
    border: none;
  }
  .label-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .label-group .forgot-password {
    font-size: 14px;
    opacity: 0.5;
  }
  .input-password {
    position: relative;
  }
  .input-password button {
    outline: none;
    border: none;
    background-color: rgba(187, 170, 255, 0);
    position: absolute;
    width: 32.42px;
    height: 27.22px; /* left: 50%; */
    right: 2%;
    top: 65%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .input-group label {
    height: 24px;
    font-family: "Poppins", serif;
    font-weight: 300;
    font-size: 16px;
  }

  button[type="submit"] {
    text-align: center;
    border-radius: 23px;
    width: 150px;
    height: 46px;
    background-color: #5429ff;
    color: white;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-transform: capitalize;
    font-family: "DM Sans", serif;
    margin: 0 auto;
    margin-top: 24px;
    margin-bottom: 24px;
    border: none;
    cursor: pointer;
  }

  .ctn-with {
    text-align: center;
    display: block;
    text-decoration: none;
    font-size: 14px;
    font-family: "Nunito", serif;
    font-weight: 400;
    color: #6096b4;
    line-height: 19.1px;
    height: 19px;
    margin-bottom: 20px;
  }

  .login-flex {
    width: 478px;
  }

  .social-login button {
    width: 125px;
    height: 50px;
    border-radius: 40px;
    background-color: white;
    border: thin solid #6096b4;
    margin-left: 5px;
    cursor: pointer;
  }

  .social-login button:hover {
    background-color: #99d4f3;
  }

  .social-login {
    text-align: center;
  }

  .footer-login {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Nunito", serif;
  }

  .footer-login p {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    width: 185px;
    height: 19px;
    opacity: 0.5;
  }

  .footer-login a {
    text-decoration: none;
    height: 19px;
    font-size: 14px;
    font-weight: 400;
    color: #d885a3;
  }
`;

const Login = () => {
  const [toggleShowPassword, setToggleShowPassword] = useState("password");
  const onClickShowAndHidePassword = () => {
    toggleShowPassword == "password"
      ? setToggleShowPassword("text")
      : setToggleShowPassword("password");
  };
  return (
    <ContainerStyled>
      <div className="wrapper">
        <div className="login">
          <div className="login-flex">
            <div className="logo">
              <LogoSideBar />
              <div className="title">
                <h1>MyNFT</h1>
                <p>NFT Marketplace</p>
              </div>
            </div>
            <h1 className="text-login">Log In</h1>
            <form id="login_form" action="">
              <div className="input-group">
                <label for="user-name">Username</label>
                <input id="user-name" type="text" name="user-name" />
              </div>
              <div className="input-group">
                <div className="label-group">
                  <label for="password">Password</label>
                  <label for="" className="forgot-password">
                    Forgot Password ?
                  </label>
                </div>
                <span className="input-password">
                  <input
                    type={toggleShowPassword}
                    id="ip-password"
                    name="password"
                  />
                  <button onClick={onClickShowAndHidePassword} type="button">
                    <IconEye />
                  </button>
                </span>
              </div>
              <button type="submit">
                <span>login in</span>
                {/* <img src="../assets/design_swap-left-outlined.svg" alt="" /> */}
              </button>

              <a href="" className="ctn-with">
                or continue with
              </a>

              <div className="social-login">
                <button className="icon-google" type="button">
                  <LogoGoogle />
                </button>
                <button className="icon-github">
                  <LogoGithub />
                </button>
                <button className="icon-facebook">
                  <LogoFacebook />
                </button>
              </div>
              <div className="footer-login">
                <p href="">Don't have an account yet?</p>
                <a href="">Sign up for free</a>
              </div>
            </form>
          </div>
          {/* <img
            className="img"
            src="../assets/Character-working-laptop-sitting-chair.svg"
            alt=""
          /> */}
          {/* <img className="img" src="../assets/cactus.svg" alt="" /> */}
        </div>
        <LoginBackground />
      </div>
    </ContainerStyled>
  );
};

export default Login;
