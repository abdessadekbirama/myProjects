import Header from "./header";
import ChatItem from "./chatItem";

function ChatPage(){
    return(
        <div className="chatPage">
            <Header chatBg="green" groupBg="none"/>
            <ChatItem user="user1" message="message..." date="2024-10-10"/>
            <ChatItem user="user2" message="message..." date="2024-10-10"/>
            <ChatItem user="user3" message="message..." date="2024-10-10"/>
            <ChatItem user="user4" message="message..." date="2024-10-10"/>
            <ChatItem user="user5" message="message..." date="2024-10-10"/>
        </div>
    )
}
export default ChatPage;