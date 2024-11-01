import { useState } from "react";
import Friend from "./Friend";
import You from "./You";
import { Link } from "react-router-dom";

function Chat(){
    const showMic = ()=>{
        document.querySelector(".camera").style = "translate:0px;transition:0.3s;opacity:100;visibility:visible;";
        document.querySelector(".file").style = "translate:0px;transition:0.3s;";
        document.querySelector(".sendBtn").classList.remove("bi-send-fill");
    }
    const showSend = ()=>{
        document.querySelector(".camera").style = "translate:-50px;transition:0.3s;opacity:0;;visibility:hidden;";
        document.querySelector(".file").style = "translate:-20px;transition:0.3s;";
        document.querySelector(".sendBtn").classList.add("bi-send-fill");
    }
    const inputMessage =(e)=>{
        if (e.target.value.trim().length > 0){
            showSend();
        }
        else{
            showMic();
        }
    }

    const [message,setMessage] = useState([]);
    const sendMessage = ()=>{
        const messageValue = document.querySelector(".inputMessage").value.trim();
        if (messageValue.length > 0){
            setMessage([...message,<You key={message.length} message={messageValue}/>]);

            showMic();
            document.querySelector(".inputMessage").value = "";
        }
    }

    let mediaRecorder;
    let audioChunks = [];
    var recordStarted = false;
    var pressStart;
    var pressEnd;

    async function sendAudio(e){
        if (document.querySelector(".inputMessage").value.trim().length ===0){
            const stream = await navigator.mediaDevices.getUserMedia({audio:true});
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = event =>{
                audioChunks.push(event.data);
            }
            mediaRecorder.onstop = ()=>{
                const audioBlob = new Blob(audioChunks,{type:'audio/wav'});
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = document.querySelectorAll(".audio");
                audio[audio.length-1].src = audioUrl;
                audioChunks = [];
            }
            if (!recordStarted){
                recordStarted = true;
                mediaRecorder.start();
                pressStart = new Date();
            }
            else{
                recordStarted = false;
                mediaRecorder.stop();
                }
            }
            else{
                sendMessage();
            }
        recordAnim();
        }
    const MyAudio = ()=>{
        return(
            <div className="d-flex justify-content-between mx-2">
            <div></div>
            <audio className="audio bg-dark rounded-5 p-1 m-1" controls></audio>
        </div>
        )
    }
    const stopRecording = ()=>{
        pressEnd = new Date();
        if (document.querySelector(".inputMessage").value.trim().length === 0){
            recordAnimStop();
            recordStarted = false;
            if ((pressEnd-pressStart)/1000 > 1){
                setMessage([...message,<MyAudio key={message.length} />])
                mediaRecorder.stop();
            }
        }
        
    }

    const recordAnim = ()=>{
        document.querySelector("#recordTime").classList.remove("record-anim");
        document.querySelector("#record-icon").classList.remove("record-anim");
        document.querySelector("#record-icon").classList.add("record-icon");
        document.querySelector(".sendBtn").classList.add("recording");
        for (let item of document.querySelectorAll(".file,.camera,.inputMessage")){
            item.classList.add("d-none");
        }
    }
    const recordAnimStop = ()=>{
        document.querySelector("#recordTime").classList.add("record-anim");
        document.querySelector("#record-icon").classList.add("record-anim");
        document.querySelector("#record-icon").classList.remove("record-icon");
        document.querySelector(".sendBtn").classList.remove("recording");
        for (let item of document.querySelectorAll(".file,.camera,.inputMessage")){
            item.classList.remove("d-none");
        }
    }
    return (
        <div className="Chat">
            <div className="chatHeader bg-dark text-white d-flex justify-content-between p-3 fixed-top col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 m-auto">
                <div className="d-flex justify-content-between col-4">
                    <i className="bi-list"></i>
                    <i className="bi-telephone-fill"></i>
                    <i className="bi-camera-fill"></i>
                </div>
                <div className="d-flex justify-content-between col-4">
                    <label>username</label>
                    <img src=".././test.jpg" alt=""/>
                    <Link to="/"><i className="bi-arrow-right text-white"></i></Link>
                </div>
            </div>

            <div className="chatMain mt-5 col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 m-auto shadow border border-1 border-dark border-top-0 border-bottom-0">
                <Friend/>
                {message}
            </div>

            <div className="chatFooter fixed-bottom mb-2 d-flex justify-content-between px-2 align-items-center col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 m-auto">
                <div className="col-1">
                    <i className="bi-mic-fill bg-dark text-white rounded-circle px-2 p-1 fs-1 sendBtn" onMouseDown={sendAudio} onMouseUp={stopRecording}></i>
                </div>
                <div className="col-10 d-flex media p-2 rounded-5 align-items-center">
                    <i className="bi-camera fs-2 camera"></i>
                    <i className="bi-file-earmark fs-3 file"></i>
                    <input type="text" className="inputMessage w-100 fs-5 px-4" placeholder="message..." onChange={inputMessage} />
                    <label className="record-anim" id="recordTime">0:00</label>
                    <i id="record-icon" className="bi-mic fs-4 text-danger mx-1 record-anim"></i>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Chat;