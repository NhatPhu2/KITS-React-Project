import { styled } from "styled-components";
import iconSearch from "../../assets/image/search.svg"
const SearchStyled = styled.div`
  position: relative;
  input{
    width: 461px;
  height: 56px;
  border-radius: 35px;
  border: none;
  outline: none;
  text-indent: 60px;
  }

input::placeholder{
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 16px;
    color: #B9B8BC;
}
  img{
    position: absolute;
    z-index: 99;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Search = () => {
  return <SearchStyled>
    <img src={iconSearch} alt="" />
    <input type="text" placeholder="Search Item, Collection and Account.." />
  </SearchStyled>;
};

export default Search;
