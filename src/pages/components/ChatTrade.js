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
        { text: 'Hi，亲爱的麦胞，我是Alronald，欢迎来到麦麦商城，请问您想买点什么？\n 为您推荐...', sender: 'robot', needInput:true }]
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
        const currentMsg = { text: '为您查询到以下与周杰伦CD相关的商品:', sender: 'robot', needInput: false, isView: true };
        setMessages([...messages,currentMsg])
    }
    return (
        <>
            {props.chatShow && <div className="chat-parent">
                <div className="chat-container">
                    <div className="chat-text">
                        <div className="intro-container" style={{textAlign:messages[messages?.length - 1].needInput ? 'left' : 'left'}}>{messages[messages?.length - 1].text}</div>
                        {messages[messages?.length - 1].isView ? 
                        <div className="goods-list-container">
                        <div className="goods-recommed">
                            <img src='/pic/jay01.jpg' />
                            <p><span>半兽人CD</span><span style={{color:'#db0007'}}>￥58.00</span></p>
                        </div>
                        <div className="goods-recommed">
                            <img src='/pic/jay02.jpg' />
                            <p><span>十一月的肖邦CD</span><span style={{color:'#db0007'}}>￥78.00</span></p>
                        </div>
                        <div className="goods-recommed">
                            <img src='/pic/jay03.jpg' />
                            <p><span>我很忙CD</span><span style={{color:'#db0007'}}>￥68.00</span></p>
                        </div>
                        <div className="goods-recommed">
                            <img src='/pic/jay04.jpg' />
                            <p><span>摩杰座CD</span><span style={{color:'#db0007'}}>￥88.00</span></p>
                        </div>
                        <div className="goods-recommed">
                            <img src='/pic/jay05.jpg' />
                            <p><span>八度空间CD</span><span style={{color:'#db0007'}}>￥88.00</span></p>
                        </div>
                    </div>
                        :
                        <div className="goods-container">
                                <div className="goods-item">电子产品</div>
                                <div className="goods-item">运动健身</div>
                                <div className="goods-item">美妆个护</div>
                                <div className="goods-item">爱宠用品</div>
                                <div className="goods-item">零食饮品</div>
                                <div className="goods-item">服装饰品</div>
                                <div className="goods-item">图书音像</div>
                                <div className="goods-item">运动健身</div>
                                <div className="goods-item">···</div>
                        </div>
                        }
                        {messages[messages?.length - 1].needInput && 
                        <div className="search-container">
                            <textarea className="search-textarea" placeholder='查询你想要买的东西吧' onChange={handleInputChange} style={{height:textareaHeight+'rem'}} />
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