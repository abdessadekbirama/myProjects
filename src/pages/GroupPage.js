import Header from "./header";
import GroupItem from "./GroupItem";


function GroupPage(){
    return(
    <div className="GroupPage">
            <Header chatBg="none" groupBg="green"/>
            <GroupItem groupName="group1" message="message..." date="2024-10-10"/>
            <GroupItem groupName="group1" message="message..." date="2024-10-10"/>
            <GroupItem groupName="group1" message="message..." date="2024-10-10"/>
            <GroupItem groupName="group1" message="message..." date="2024-10-10"/>
            <GroupItem groupName="group1" message="message..." date="2024-10-10"/>
            
            </div>
    )
}
export default GroupPage;