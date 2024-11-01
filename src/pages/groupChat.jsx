import { Link } from "react-router-dom";
import Friend from "./Friend";

function GroupChat(){
    return (
        <div>
            <div className="chatHeader bg-dark text-white d-flex justify-content-between p-3 fixed-top col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 m-auto">
                <div className="d-flex justify-content-between col-4">
                    <i className="bi-list"></i>
                    <i className="bi-telephone-fill"></i>
                    <i className="bi-camera-fill"></i>
                </div>
                <div className="d-flex justify-content-between col-4">
                    <label>username</label>
                    <img src=".././test.jpg" alt=""/>
                    <Link to="/groupPage"><i className="bi-arrow-right text-white"></i></Link>
                </div>
            </div>
            <div className="mt-5 chatMain">
                <Friend/>
            </div>
            
            <div>chat footer</div>
        </div>
    )
}

export default GroupChat;