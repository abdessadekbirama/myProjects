import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props){
    const [navTrans,setNav] = useState(false);
    function navToggle(e){
        const nav = document.querySelector(".sideBar");
        setNav(!navTrans);
        if (navTrans){
            nav.style = "translate:-50vw;transition:0.4s;";
            e.target.classList.add("bi-list");
            e.target.classList.remove("bi-x");
        }
       else{
        nav.style = "translate:0vw;transition:0.4s";
        e.target.classList.remove("bi-list");
        e.target.classList.add("bi-x");
       }
    }
    const [search,setSearch] = useState(false);
    function searchToggle(){
        const searchField = document.querySelector(".searchField");
        setSearch(!search);
        console.log(search);
        if (search){
            searchField.style = "transition:0.3s;display:inline;";
        }
        else{
            searchField.style = "transition:0.3s;display:none;";
        }
    }
    function filterItems(e){
        const listItems = document.querySelectorAll(".searchKey");
        const key = e.target.value.toLowerCase().trim();
        for (let item of listItems){
            if (item.innerText.toLowerCase().includes(key)){
                item.parentElement.parentElement.classList.remove("d-none");
            }
            else{
                item.parentElement.parentElement.classList.add("d-none");
            }
        }
    }


    return(<div>
        <div className="d-flex bg-dark justify-content-between align-items-center fixed-top p-3 header">
            <button onClick={navToggle} className="navBtn border-0 bg-transparent bi-list fs-4 text-white"></button>
            <button onClick={searchToggle} className="bi-search text-white border-0 bg-transparent "></button>
            <input onChange={filterItems} type="text" placeholder="search" className="border-0 mx-1 searchField"/>
            <Link style={{backgroundColor:props.chatBg}} to="/ChatPage" className="bi-chat-fill"> chat</Link>
            <Link style={{backgroundColor:props.groupBg}} to="/GroupPage" className="bi-people-fill"> group</Link>
        </div>

        <div className="sideBar bg-dark">
            
        </div>

    </div>
        
    )
}

export default Header;