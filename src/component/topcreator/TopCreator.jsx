import { styled } from "styled-components"
import { FollowButton } from "./FollowButton"
const Style = styled.div`
    background-color: white;
    width: 348px;
    height: 478px;
    border-radius: 16px;
    .main-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .user-section .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const TopCreator = () =>{
    return(
        <Style>
            <div className="main-title">
                <p className="title">Top Creator</p>
                <p className="see-all">See All</p>
            </div>
            <div className="user-section">
                    <div className="item">
                        <div className="number-order" >1</div>
                        <div className="user-profile">
                            <img src="" alt="" />
                            <div className="user-name">
                                <h1>Michael Jordan</h1>
                                <p>@jordan_</p>
                            </div>
                        </div>
                        <FollowButton/>
                    </div>
                </div>
        </Style>
    )
}

export default TopCreator