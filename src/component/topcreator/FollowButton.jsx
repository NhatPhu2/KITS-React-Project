import { styled } from "styled-components";

const StyledButton = styled.button`
  width: 77px;
  height: 32px;
  border-radius: 20px;
  padding: 8px 14px 8px 14px;
  background-color: ${props => props.text == 'Following'? '#5429FF':'rgba(84, 41, 255, 0.1)'};
  color: ${props => props.text == 'Following'? '#ffff':'#5429ff'};
  border: none;
  font-size: 12px;
  font-weight: 500;
  font-family: "DM Sans";
`;
const FollowButton = ({ text }) => {
  return <StyledButton text={text} >{text}</StyledButton>
};

export { FollowButton };
