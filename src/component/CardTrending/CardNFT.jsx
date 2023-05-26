import { styled } from "styled-components";
import clock from "../../assets/image/clockSmall.svg";
import monkey from "../../assets/image/pinkMonkey.svg";
import avatar from "../../assets/image/Ellipse 6 (1).svg";
import ethereum from "../../assets/image/Group 8.svg";
const CardStyled = styled.div`
  width: 348px;
  height: 364px;
  background-color: #ffff;
  font-family: "DM Sans";
  border-radius: 16px;
  padding: 10px 0px 0px 0px;
  display: flex;
  justify-content: center;
  .wrapper {
  }
  .card-avatar {
    width: 28px;
    height: 28px;
  }
  .card-image {
    position: relative;
  }
  .oclock {
    position: absolute;
    display: flex;
    bottom: 10%;
    left: 5%;
    color: #ffff;
    background-color: rgba(22, 22, 22, 0.16);
    border-radius: 20px;
    padding: 6px 10px 6px 6px;
    align-items: center;
    gap: 7px;
    font-family: 700;
    font-family: "DM Sans";
    font-size: 12px;
  }

  .btn-overlay {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    background-color: #ffff;
    border: none;
    padding: 12px 30px 12px 30px;
    border-radius: 40px;
    color: #5429ff;
    font-family: 700;
    font-family: "DM Sans";
    font-size: 16px;
    opacity: 0;
    transition-property: all;
    transition-duration: 500ms;
    z-index: 2;
    cursor: pointer;
  }
  .card-image:hover .btn-overlay {
    left: 50%;
    opacity: 1;
  }
  .card-title {
    display: inline;
  }
  .card-user {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .card-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-price .eth {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .price span:nth-child(1) {
    margin-right: 5px;
  }
  .title {
    color: #27262e;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    width: 50%;
    margin: 0;
    text-transform: capitalize;
  }
  .like {
    font-weight: 400;
    font-size: 16px;
    display: inline-block;
    width: 50%;
    line-height: 31.2px;
    text-align: right;
    color: #747475;
  }
  .card-user-name {
    font-weight: 400;
    font-size: 16px;
    color: #747475;
    margin: 0;
  }
  .card-price h1 {
    font-weight: 700;
    font-size: 16px;
    color: #747475;
    margin-top: 24px;
  }
  .price span:nth-child(1) {
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    color: #27262e;
  }
  .price span:nth-child(2) {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    color: #747475;
  }
`;
const CardNFT = ({
  cardImg,
  userImg,
  textOverlay,
  time,
  title,
  numberOfLikes,
  nameAuthor,
  price,
  curency,
  timeOfBid
}) => {
  return (
    <CardStyled className="card">
      <div className="wrapper">
        <div className="card-image">
          <img src={cardImg} alt="" />
          <button className="btn-overlay">{textOverlay}</button>
          <div className="oclock">
            <img src={clock} alt="" />
            <div className="time">{time}</div>
          </div>
        </div>
        <div className="card-title">
          <h2 className="title">{title}</h2>
          <p className="like">{numberOfLikes}K Likes</p>
        </div>
        <div className="card-user">
          <img className="card-avatar" src={userImg} alt="" />
          <p className="card-user-name">{nameAuthor}</p>
        </div>
        <div className="card-price">
          <h1>{timeOfBid}</h1>
          <div className="eth">
            <img src={ethereum} alt="" />
            <div className="price">
              <span>{price}</span>
              <span style={{ textTransform: "capitalize" }}>{curency}</span>
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default CardNFT;
