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
        { text: 'Hi，亲爱的麦胞，我是Alronald，欢迎来到职业发展中心，为您推荐一些最热的帖子', sender: 'robot', needInput:true }]
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
        const currentMsg = { text: '为您查询到新番茄入职必须知道的事,添加评论与发帖者畅所欲言吧', sender: 'robot', needInput: false, isView: true };
        setMessages([...messages,currentMsg])
    }
    return (
        <>
            {props.chatShow && <div className="chat-parent">
                <div className="chat-container">
                    <div className="chat-text">
                        <div className="intro-container" style={{textAlign:messages[messages?.length - 1].needInput ? 'left' : 'center'}}>{messages[messages?.length - 1].text}</div>
                        {messages[messages?.length - 1].isView ? 
                        <div className="forum-container">
                            <div className="forum-list" >
                                <div className="list-item" style={{borderTop:0}}>
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>小伙伴们看过来，关于新番茄报道指南，你想知道的都在这里！</p>
                                            <p style={{fontWeight:400}}>汉堡大学 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                        </div>
                                    </div>
                                    <div className="qs-container">
                                        <p style={{fontSize:'12px'}}>点赞 <span style={{color:'#db0007'}}>999+</span></p>
                                        <p style={{fontSize:'12px'}}>评论 <span style={{color:'#db0007'}}>999+</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :<div className="forum-container">
                            <div className="tab-container">
                                <p>最新</p>
                                <p>最热</p>
                            </div>
                            <div className="forum-list">
                                <div className="list-item">
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>小伙伴们看过来，关于餐厅升迁路径，你想知道的都在这里！</p>
                                            <p style={{fontWeight:400}}>汉堡大学 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                        </div>
                                    </div>
                                    <div className="qs-container">
                                        <p style={{fontSize:'12px'}}>点赞 <span style={{color:'#db0007'}}>999+</span></p>
                                        <p style={{fontSize:'12px'}}>评论 <span style={{color:'#db0007'}}>999+</span></p>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>宝藏学习平台等你发现，开启你的专属技能提升通道吧~</p>
                                            <p style={{fontWeight:400}}>汉堡大学 &nbsp;&nbsp;&nbsp;32分钟前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                            
                                        </div>
                                    </div>
                                    <div className="qs-container">
                                        <p style={{fontSize:'12px'}}>点赞 <span style={{color:'#db0007'}}>999+</span></p>
                                        <p style={{fontSize:'12px'}}>评论 <span style={{color:'#db0007'}}>999+</span></p>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div style={{display:'flex'}}>
                                        <img src="/pic/head.png" />
                                        <div className="qs-container">
                                            <p>1年成为RGM，我是如何做到的...</p>
                                            <p style={{fontWeight:400}}>员工小美 &nbsp;&nbsp;&nbsp;45分钟前  &nbsp;&nbsp;&nbsp; <a style={{color:'green'}}>交流</a></p>
                                        </div>
                                    </div>
                                    <div className="qs-container">
                                        <p style={{fontSize:'12px'}}>点赞 <span style={{color:'#db0007'}}>999+</span></p>
                                        <p style={{fontSize:'12px'}}>评论 <span style={{color:'#db0007'}}>999+</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                        {messages[messages?.length - 1].needInput && 
                        <div className="search-container">
                            <textarea className="search-textarea" placeholder="查询与职业发展相关的帖子吧~" onChange={handleInputChange} style={{height:textareaHeight+'rem'}} />
                        </div>}
 
                    </div>
                    <div className="chat-button">
                        <div className="button-container button-grey" onClick={() => props.setChatShow(false)}>再见啦</div>
                        <div className="button-container button-blue" onClick={messages[messages?.length - 1]?.needInput ? submitQuestions : nextAnswer}>{messages[messages?.length - 1]?.needInput ? '提交问题' : 'NEXT'}</div>
                    </div>
                </div>
            </div>}
        </>
    )
}