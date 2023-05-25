import { CardNFT } from "./index";
import { styled } from "styled-components";
import TopCreator from "component/TopCreator/index";
import pinkApe from "../../assets/image/pinkMonkey.svg";
import greenApe from "../../assets/image/greenMonkey.svg";
import blueApe from "../../assets/image/blueMonkey.svg";
import purpleApe from "../../assets/image/purpleMonkey.svg";
import avatarMan from "../../assets/image/Ellipse 6 (1).svg";
import avatarWoman from "../../assets/image/Ellipse 6 (2).svg";
const Container = styled.div`
  font-family: "DM Sans";
  padding: 0px 20px 20px 20px;
  display: flex;
  box-sizing: border-box;
  .top-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu span {
    background-color: ${(props) => props.bgColor};
    border-radius: 30px;
    padding: 5px 15px 5px 15px;
    margin-left: 14px;
  }
  .menu span a {
    text-decoration: none;
    color: ${(props) => props.txtMenuColor};
    font-size: 14px;
    font-weight: 500;
  }
  .top-card h1 {
    color: #27262e;
    font-weight: 700;
    font-size: 24px;
    text-transform: capitalize;
  }
  .menu .active-menu a {
    color: #5429ff;
  }
  .active-menu {
    background-color: rgba(84, 41, 255, 0.1);
  }
  .card-NFT {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  .card {
    width: 47%;
  }
  .top-creator {
    width: 35%;
  }
`;

Container.defaultProps = {
  txtMenuColor: "#7A797D",
};
const fakeData = [
  {
    cardImg: pinkApe,
    avatar: avatarMan,
    price: 9.1,
    curency: "ETH",
    textOverlay: "Place a Bid",
    time: "12 : 03 : 45",
    numberOfLikes: 21.5,
    nameAuthor: "@johnti60",
    timeOfBid: "Current Bid",
    title: "Ape In Love",
  },
  {
    cardImg: greenApe,
    avatar: avatarWoman,
    price: 6.12,
    curency: "ETH",
    textOverlay: "Place a Bid",
    time: "08 : 21 : 23",
    numberOfLikes: 21.5,
    nameAuthor: "@m_alisson",
    timeOfBid: "Current Bid",
    title: "Smilling Ape",
  },
  {
    cardImg: blueApe,
    avatar: avatarMan,
    price: 9.1,
    curency: "ETH",
    textOverlay: "Place a Bid",
    time: "12 : 03 : 45",
    numberOfLikes: 21.5,
    nameAuthor: "@johnti60",
    timeOfBid: "Current Bid",
    title: "Ape In Love",
  },
  {
    cardImg: purpleApe,
    avatar: avatarMan,
    price: 9.1,
    curency: "ETH",
    textOverlay: "Place a Bid",
    time: "12 : 03 : 45",
    numberOfLikes: 21.5,
    nameAuthor: "@johnti60",
    timeOfBid: "Current Bid",
    title: "Ape In Love",
  },
];
const CardContent = ({ bgColor, txtMenuColor }) => {
  return (
    <Container bgColor={bgColor} txtMenuColor={txtMenuColor}>
      <div>
        <div className="top-card">
          <h1>trending auctions</h1>
          <ul className="menu">
            <span className="active-menu">
              <a href="">Art</a>
            </span>
            <span>
              <a href="">Music</a>
            </span>
            <span>
              <a href="">Collectibles</a>
            </span>
            <span>
              <a href="">Utility</a>
            </span>
          </ul>
        </div>
        <div className="card-NFT">
          {fakeData.length > 0 &&
            fakeData.map((element) => (
              <CardNFT
                cardImg={element.cardImg}
                userImg={element.avatar}
                textOverlay={element.textOverlay}
                time={element.time}
                title={element.title}
                numberOfLikes={element.numberOfLikes}
                nameAuthor={element.nameAuthor}
                price={element.price}
                curency={element.curency}
                timeOfBid={element.timeOfBid}
              />
            ))} 
        </div>
      </div>
      <div className="top-creator">
        <TopCreator />
      </div>
    </Container>
  );
};

export default CardContent;
