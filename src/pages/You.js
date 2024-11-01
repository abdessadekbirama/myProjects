function You (props){
    const date = new Date;
    return (
        <div className="d-flex w-100 justify-content-between">
        <label></label>
        <label className="youMessage bg-dark text-white p-2 px-4 m-3">
           {props.message}
           <br/>
           <label style={{float:"left",color:"grey"}}>{date.getHours()}:{date.getMinutes()}</label>
        </label>    
        </div>
            )
}
export default You;