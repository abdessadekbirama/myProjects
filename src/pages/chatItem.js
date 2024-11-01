import { Link,Outlet } from "react-router-dom";

function ChatItem(props){
    return (
        <>
        <Link style={{textDecoration:"none",color:"black"}} to="/Chat">
        <div className="d-flex justify-content-between p-4 chatItem" >
            <div className="col-1"><img src="./test.jpg" alt=""/></div>
            <div className="col-8 d-flex flex-column">
                <b className="searchKey">{props.user}</b>
                <label>{props.message}</label>
            </div>
            <div className="col-3">{props.date}</div>
        </div>
        </Link>
        <Outlet/>
        </>
    )
}
export default ChatItem;