import { FollowButton } from "./FollowButton"

const ContentTopCreator = ({numberOrder,photo,name,tagName,buttonText}) =>{
    return (
        <div className="item">
            <div className="number-order" >{numberOrder}.</div>
            <div className="user-profile">
                <img src={photo} alt="" />
                <div className="user-name">
                    <h1>{name}</h1>
                    <p>{tagName}</p>
                </div>
            </div>
            <FollowButton text={buttonText}/>
        </div>
    )
}

export default ContentTopCreator