import Widget from "component/Widget/index";
import { styled } from "styled-components";
import imgBanner from "../../assets/image/banner.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const BannerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px 20px 20px;
  gap: 10px;
  .banner {
    position: relative;
  }
  .carousel{
    width: 716px;
    height: 354px;
  }
  .right-widget {
    display: flex;
    flex-wrap: wrap;
    width: 35%;
    gap: 10px;
  }

  .widget {
    width: 40%;
  }
  .txt-banner {
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translateY(-50%);
  }
  .txt-banner h1 {
    margin: 10px 0px;
    width: 80%;
    font-family: "DM Sans";
    font-size: 54px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #ffffff;
  }
  .btn-discover {
    height: 46px;
    width: 128px;
    border-radius: 40px;
    padding: 12px 30px 12px 30px;
    border: none;
    background-color: #ffffff;
    color: #5429ff;
    font-family: "DM Sans";
    font-size: 16px;
    font-weight: 700;
  }
  .btn-create {
    font-family: "DM Sans";
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    border-radius: 40px;
    padding: 12px 30px 12px 30px;
    border: 1px solid #ffffff;
    background-color: rgba(0, 0, 0, 0);
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Banner = () => {
  return (
    <BannerStyled>
      <Carousel className="carousel" showArrows={false} showThumbs={false} showStatus={false}>
        <div className="banner">
          <img src={imgBanner} alt="" />
          <div className="txt-banner">
            <h1>Discover, Create and Sell Your Own NFT.</h1>
            <div className="btn">
              <button className="btn-discover">Discover</button>
              <button className="btn-create">Create</button>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={imgBanner} alt="" />
          <div className="txt-banner">
            <h1>Discover, Create and Sell Your Own NFT.</h1>
            <div className="btn">
              <button className="btn-discover">Discover</button>
              <button className="btn-create">Create</button>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={imgBanner} alt="" />
          <div className="txt-banner">
            <h1>Discover, Create and Sell Your Own NFT.</h1>
            <div className="btn">
              <button className="btn-discover">Discover</button>
              <button className="btn-create">Create</button>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="right-widget">
        <Widget text="Revenue" price={5} textPercent={12.3} textETH="ETH" />
        <Widget text="Spending" price={2} textPercent={8.1} textETH="ETH" />
        <Widget
          text="Roi"
          price={14.02}
          plus="+"
          textPercent={-5.1}
          textETH="%"
        />
        <Widget text="Estimated" price={3.2} textPercent={3.2} textETH="ETH" />
      </div>
    </BannerStyled>
  );
};

export default Banner;
