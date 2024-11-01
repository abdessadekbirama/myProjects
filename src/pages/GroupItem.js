import { Link } from "react-router-dom";

function GroupItem(props){
    return (
        <Link to="/groupChat" style={{textDecoration:"none",color:"black"}}>
        <div className="d-flex justify-content-between p-4 chatItem" >
            <div className="col-1"><img src="./test.jpg" alt=""/></div>
            <div className="col-8 d-flex flex-column">
                <b className="searchKey">{props.groupName}</b>
                <label>{props.message}</label>
            </div>
            <div className="col-3">{props.date}</div>
        </div>
        </Link>
    ) 
}
export default GroupItem;