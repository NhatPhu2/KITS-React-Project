import WidgetButton from "./WidgetButton";
import { styled } from "styled-components";
import { NumericFormat } from "react-number-format";
import ethereum from "../../image/Ethereum-blue.svg";
const Container = styled.div`
  width: 164px;
  height: 167px;
  background-color: white;
  padding: 0px 12px 12px 12px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .price-eth {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  p {
    font-family: "DM Sans";
    font-weight: 700;
    font-size: 14px;
    line-height: 18.23px;
    color: #747475;
  }

  .eth {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .price {
    font-family: "DM Sans";
    font-weight: 700;
    font-size: 24px;
    line-height: 31.25px;
    color: #000000;
    margin-right: 5px;
  }
  .text {
    font-size: 12px;
    font-family: "DM Sans";
    font-weight: 500;
    line-height: 15.62px;
    color: #747475;
  }
`;
const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(value);

const Widget = ({ price, text, textPercent, textETH }) => {
  return (
    <Container>
      <div className="heheh">
        <p>{text}</p>
        <div className="eth">
          <img src="" alt="" />
          <div className="price-eth">
            {textETH === "ETH" ? <img src={ethereum} alt="" /> : ""}
            <div>
              <span className="price">
                {textETH != "ETH" ? "+" : ""}
                {numberFormat(price)}
              </span>
              <span className="text">{textETH}</span>
            </div>
          </div>
        </div>
      </div>
      <WidgetButton textPercent={textPercent} />
    </Container>
  );
};

export default Widget;
