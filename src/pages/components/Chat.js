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
        { text: '你好，我是Alronald，欢迎来到兴趣社团，为您推荐...', sender: 'robot', needInput:true }]
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
                        <div className="goods-list-container">
                            <div className="goods-recommed">
                                <img src='/pic/cycling.png' />
                                <p><span>骑行俱乐部</span></p>
                            </div>
                            <div className="goods-recommed">
                                <img src='/pic/pet.jpg' />
                                <p><span>萌宠俱乐部</span></p>
                            </div>
                            <div className="goods-recommed">
                                <img src='/pic/reading.png' />
                                <p><span>阅读俱乐部</span></p>
                            </div>
                            <div className="goods-recommed">
                                <img src='/pic/yoga.png' />
                                <p><span>瑜伽俱乐部</span></p>
                            </div>
                            <div className="goods-recommed">
                                <img src='/pic/basketball.jpg' />
                                <p><span>篮球俱乐部</span></p>
                            </div>
                        </div>
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