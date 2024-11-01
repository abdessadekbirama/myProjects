function Friend (){
    const date =new Date();
    return (
        <label className="friendMessage bg-white text-dark p-2 px-4 m-3">
            message from your friend
           <br/>
            <label style={{float:"right",color:"gray"}}>{date.getHours()}:{date.getMinutes()}</label>
        </label>  
        )
}
export default Friend;