import { styled } from "styled-components"

const StyledButton = styled.button`
    width: 77px;
    height: 32px;
    border-radius: 20px;
    padding: 8px 14px 8px 14px;
    background-color: rgba(84, 41, 255, 0.1);
    color: #5429FF;
    border: none;
    font-size: 12px;
    font-weight: 500;
    font-family: "DM Sans";
`
const FollowButton = () =>{
    return <StyledButton>Follow</StyledButton>
}

export {FollowButton}