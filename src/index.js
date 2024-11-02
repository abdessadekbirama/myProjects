import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './bootstrap-icons-1.11.3/font/bootstrap-icons.css';
import ChatPage from "./pages/ChatPage";
import GroupPage from "./pages/GroupPage";
import Chat from "./pages/Chat";
import GroupChat from "./pages/groupChat";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename="myProjects">
        <Routes>
            {/* <Route path="/" element={ <Home />}> */}
                <Route index element={<ChatPage/>} />
                <Route path="ChatPage" element={<ChatPage/>}/>
                <Route path="GroupPage" element={<GroupPage/>} />
                <Route path="Chat" element={<Chat/>} />
                <Route path="groupChat" element={<GroupChat/>} />
                {/* <Route path="Chat" element={<Chat/>} />
                <Route path="GroupChat" element={<GroupChat/>} />
                <Route path="*" element={<NoPage/>} /> */}
            {/* </Route> */}
        </Routes>
    </BrowserRouter>
);