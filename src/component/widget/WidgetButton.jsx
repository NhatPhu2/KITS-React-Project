import { styled } from "styled-components";
import increaseArrow from "../../assets/image/Vector.svg";
import decreaseArrow from "../../assets/image/Vector (1).svg"
const StyledButton = styled.button`
  width: 115px;
  height: 46px;
  border-radius: 12px;
  padding: 11px 22px 11px 22px;
  border: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;

  .txt-percent {
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 16px;
    color: #747475;
    line-height: 20.83px;
  }

`;

const WidgetButton = ({textPercent}) => {
  return (
    <StyledButton>
      <img className="increase-arrow" src={textPercent < 0 ? decreaseArrow:increaseArrow} alt="" />
      <span className="txt-percent">{Math.abs(textPercent)}%</span>
    </StyledButton>
  );
};

export default WidgetButton;
