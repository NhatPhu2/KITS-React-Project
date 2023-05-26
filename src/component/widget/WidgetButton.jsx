import { styled } from "styled-components";
import increaseArrow from "../../assets/image/Vector.svg";
import decreaseArrow from "../../assets/image/Vector (1).svg"
const StyledButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  border: ${props => props.border};
  background-color: ${props => props.bgColor};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
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

StyledButton.defaultProps = {
  bgColor: '#FFFFFF',
  border: '1px solid #e9e9e9',
  borderRadius:'12px',
  width: '115px',
  height: '46px',
  padding: '11px 22px 11px 22px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}

export default WidgetButton;
