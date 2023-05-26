import { styled } from "styled-components";
import ContentTopCreator from "./ContentTopCreator";
import photo1 from "../../assets/image/Ellipse 6.svg";
import photo2 from "../../assets/image/Ellipse 6 (1).svg";
import photo3 from "../../assets/image/Ellipse 6 (2).svg";
import photo4 from "../../assets/image/Ellipse 6 (3).svg";
import photo5 from "../../assets/image/Ellipse 6 (4).svg";
import photo6 from "../../assets/image/Ellipse 6 (5).svg";
const Style = styled.div`
  background-color: white;
  width: 348px;
  height: 478px;
  border-radius: 16px;
  font-family: "DM Sans";
  padding: 20px;
  .main-title {
    display: inline;
  }

  .user-section .item {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .user-profile {
    width: 50%;
    display: flex;
    align-items: center;
  }

  .title {
    display: inline-block;
    width: 50%;
    font-family: "DM Sans";
    font-weight: 700;
    font-size: 24px;
    line-height: 31.25px;
    color: #27262e;
  }

  .see-all {
    display: inline-block;
    width: 50%;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 16px;
    line-height: 20.83px;
    color: #747475;
    text-align: right;
  }

  .number-order {
    font-weight: 700;
    font-size: 16px;
    color: #27262e;
  }

  .user-name {
    margin-left: 10px;
  }

  .user-name h1 {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }

  .user-name p {
    color: #747475;
    font-size: 12px;
    font-weight: 400;
    margin: 0;
  }
  .item{
    margin: 0px 0px 24px 0px;
  }
`;


const TopCreator = () => {
  return (
    <Style>
      <div className="main-title">
        <p className="title">Top Creator</p>
        <p className="see-all">See All</p>
      </div>
      <div className="user-section">
        <ContentTopCreator
          name="MiChael Jordan"
          tagName="@jordan_"
          numberOrder={1}
          photo={photo1}
          buttonText="Follow"
        />
        <ContentTopCreator
          name="John Tibao"
          tagName="@johnti60"
          numberOrder={2}
          photo={photo2}
          buttonText="Following"
        />
         <ContentTopCreator
          name="Teressa"
          tagName="@teressa"
          numberOrder={3}
          photo={photo3}
          buttonText="Follow"
        />
        <ContentTopCreator
          name="Johan Hawn"
          tagName="@j_hawn"
          numberOrder={4}
          photo={photo4}
          buttonText="Follow"
        />
        <ContentTopCreator
          name="Maria Alisson"
          tagName="@m_alisson"
          numberOrder={5}
          photo={photo5}
          buttonText="Follow"
        />
        <ContentTopCreator
          name="Sam Erricson"
          tagName="@erricsonsam"
          numberOrder={6}
          photo={photo6}
          buttonText="Follow"
        />
      </div>
    </Style>
  );
};

export default TopCreator;
