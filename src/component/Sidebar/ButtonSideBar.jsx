import { styled } from "styled-components";

const ButtonStyled = styled.button`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  background-color: ${(props) => props.bgColor};
  p {
    font-family: "DM Sans";
    font-weight: ${props => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.textColor};
  }
`;

ButtonStyled.defaultProps = {
  display: "flex", 
  alignItems: "center",
  gap: "10px",
  width: "100%",
  height: "24px",
  border: "none",
  bgColor: "#ffff",
  textColor: "#7A797D",
  fontSize: "16px",
  fontWeight:"500"
};

const ButtonSideBar = ({
  icon,
  text,
  textColor,
  fontSize,
  bgColor,
  border,
  width,
  height,
  gap,
  alignItems,
  justifyContent,
  display,
  fontWeight
}) => {
  return (
    <ButtonStyled
      textColor={textColor}
      fontSize={fontSize}
      bgColor={bgColor}
      border={border}
      width={width}
      height={height}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      display={display}
      fontWeight={fontWeight}
      className="btn-sidebar"
    >
      <img src={icon} alt="" />
      <p>{text}</p>
    </ButtonStyled>
  );
};

export default ButtonSideBar;
