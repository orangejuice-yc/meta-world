import React, { useRef, useState, useEffect } from "react";
// import { Html } from '@react-three/drei'
// import WebSocket from 'websocket';
// import WebSocket from 'ws';

import '../styles/Chat.css'


export default function ChatHtml(props) {
    const ws = new WebSocket('ws://localhost:2333'); // 后端 WebSocket 地址
    const [textareaHeight,setTextareaHeight] = useState(1.2)
    // const [messages, setMessages] = useState([
    //     { text: 'Hi,My name is Alronard,you can call me Alro,What can I do for you？', sender: 'robot', needInput:false }]
    // );
    const [messages, setMessages] = useState([
        { text: '您好，我是Alronald，有什么可以帮助您', sender: 'robot', needInput:true }]
    );
    const [socket, setSocket] = useState(null);
    const currentQuestion = useRef('')

    const nextAnswer = () => {
        const currentMsg = { text: 'Write down your questions below...', sender: 'robot', needInput: true };
        setMessages([...messages,currentMsg])
    }
    useEffect(() => {
        if(ws){
            ws.onopen = () => {
                console.log('Connected to WebSocket');
                setSocket(ws)
            };
        
            ws.onmessage = (event) => {
                console.log('onmessage',event)
                const bot_message = {
                    text:event.data,
                    sender:'robot',
                    needInput:true
                }
                setMessages([...messages,bot_message]);
            };
        
            ws.onclose = () => {
                console.log('Disconnected from WebSocket');
            };
        
            return () => {
                ws.close();
            };
        }
    }, []);

    const handleInputChange = (e) => {
        e.stopPropagation()
        // console.log(e.target.value)
        const value = e?.target?.value || '';
        currentQuestion.current = value;
        if (value.includes('\n')) {
            console.log('发现换行符！');
            // 在此处执行你的逻辑操作
            const height = textareaHeight + 1.2;
            setTextareaHeight(height)
          }
    }
    const submitQuestions = () => {
        console.log(currentQuestion.current)
        socket.send(currentQuestion.current);
    }
    return (
        <>
            {props.chatShow && <div className="chat-parent">
                <div className="chat-container">
                    <div className="chat-text">
                        <div className="intro-container" style={{textAlign:messages[messages?.length - 1].needInput ? 'left' : 'center'}}>{messages[messages?.length - 1].text}</div>
                        {messages[messages?.length - 1].needInput && 
                        <div className="search-container">
                            <textarea className="search-textarea" onChange={handleInputChange} style={{height:textareaHeight+'rem'}} />
                        </div>}
 
                    </div>
                    <div className="chat-button">
                        <div className="button-container button-grey" onClick={() => props.setChatShow(false)}>SEE YOU LATER</div>
                        <div className="button-container button-blue" onClick={messages[messages?.length - 1]?.needInput ? submitQuestions : nextAnswer}>{messages[messages?.length - 1]?.needInput ? 'SUBMIT' : 'NEXT'}</div>
                    </div>
                </div>
            </div>}
        </>
    )
}