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
        { text: '你好，我是Alronald，欢迎来到员工论坛，为您展示最新最热的帖子', sender: 'robot', needInput:true }]
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
        // console.log(currentQuestion.current)
        // socket.send(currentQuestion.current);
        const currentMsg = { text: '为您查询到帖子: 和600w+麦粒一起回顾麦麦农场溯源之旅！', sender: 'robot', needInput: false, isView: true };
        setMessages([...messages,currentMsg])
    }
    return (
        <>
            {props.chatShow && <div className="chat-parent">
                <div className="chat-container">
                    <div className="chat-text">
                        <div className="intro-container" style={{textAlign:messages[messages?.length - 1].needInput ? 'left' : 'left'}}>{messages[messages?.length - 1].text}</div>
                        {messages[messages?.length - 1].isView ? 
                            <div className="forum-container">
                                <div className="forum-list">
                                <div className="list-item" style={{borderTop:'none'}}>
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>和600w+麦粒一起回顾<span style={{color:'red'}}>麦麦农场</span>溯源之旅！</p>
                                            <p style={{fontWeight:400}}>麦麦时讯 &nbsp;&nbsp;&nbsp;1天前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                            
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        :
                            <div className="forum-container">
                            <div className="tab-container">
                                <p>最新</p>
                                <p>最热</p>
                            </div>
                            <div className="forum-list">
                                <div className="list-item">
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>家人们，南方小土豆想去哈尔滨玩，需要注意什么嘛？❄️</p>
                                            <p style={{fontWeight:400}}>南方小土豆 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                            
                                        </div>
                                    </div>
                                    <div className="qs-container">
                                        <p style={{fontSize:'12px'}}>点赞 <span style={{color:'#db0007'}}>23</span></p>
                                        <p style={{fontSize:'12px'}}>评论 <span style={{color:'#db0007'}}>56</span></p>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>Family Who Knows，附近的美食推荐？🍔</p>
                                            <p style={{fontWeight:400}}>爱吃小胖 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                            
                                        </div>
                                    </div>
                                    <div className="qs-container">
                                        <p style={{fontSize:'12px'}}>点赞 <span style={{color:'#db0007'}}>99+</span></p>
                                        <p style={{fontSize:'12px'}}>评论 <span style={{color:'#db0007'}}>99+</span></p>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>本周Switch游戏俱乐部联机打怪，参加的评论区报名~~🙋🏻‍♀️</p>
                                            <p style={{fontWeight:400}}>迷茫小白兔 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                            
                                        </div>
                                    </div>
                                    <div className="qs-container">
                                        <p style={{fontSize:'12px'}}>点赞 <span style={{color:'#db0007'}}>9+</span></p>
                                        <p style={{fontSize:'12px'}}>评论 <span style={{color:'#db0007'}}>999+</span></p>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>参加黑客松比赛的小伙伴们冒个泡，让我知道你们的进度 lol~~~</p>
                                            <p style={{fontWeight:400}}>hacker &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                            
                                        </div>
                                    </div>
                                    <div className="qs-container">
                                        <p style={{fontSize:'12px'}}>点赞 <span style={{color:'#db0007'}}>99+</span></p>
                                        <p style={{fontSize:'12px'}}>评论 <span style={{color:'#db0007'}}>99+</span></p>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>求求滑雪🏂🏻大佬传授一下经验？</p>
                                            <p style={{fontWeight:400}}>滑雪小白 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                            
                                        </div>
                                    </div>
                                    <div className="qs-container">
                                        <p style={{fontSize:'12px'}}>点赞 <span style={{color:'#db0007'}}>999+</span></p>
                                        <p style={{fontSize:'12px'}}>评论 <span style={{color:'#db0007'}}>999+</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>}
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