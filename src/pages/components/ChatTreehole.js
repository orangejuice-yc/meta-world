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
        { text: 'Hi，亲爱的麦胞，我是Alronald，这里是麦麦匿名树洞，那些你不敢说的秘密，都在这里畅所欲言吧！为您推荐热门Topic:', sender: 'robot', needInput:false,showBtn:true }]
    );
    const [socket, setSocket] = useState(null);
    const currentQuestion = useRef('')

    const nextAnswer = () => {
        const currentMsg = { text: '写下你的悄悄话吧，记得打上标签哦~.', sender: 'robot', needInput: true,showBtn:true };
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
        const currentMsg = { text: '提交成功啦,期待小伙伴们的回复吧~~~💕', sender: 'robot', needInput: false, showBtn:false };
        setMessages([...messages,currentMsg])
    }
    return (
        <>
            {props.chatShow && <div className="chat-parent">
                <div className="chat-container">
                    <div className="chat-text">
                        <div className="intro-container" style={{textAlign:messages[messages?.length - 1].needInput ? 'left' : 'left'}}>{messages[messages?.length - 1].text}</div>
                        {!messages[messages?.length - 1].needInput && messages[messages?.length - 1].showBtn && <><div className="goods-container" style={{width:'40%',marginBottom:30}}>
                                <div className="goods-item">💬 闲聊 ALL</div>
                                <div className="goods-item">🎭 心情 Mood</div>
                                <div className="goods-item">💕 感情</div>
                                <div className="goods-item">···</div>
                        </div>
                        <div className="booth-container">
                            <div className="card">
                                <div className="trend">01</div>
                                <p className="card-name">匿名用户:</p>
                                <p className="card-content">好难受，在餐厅工作地好好的，有个妈妈带着孩子看到我就说，不好好读书长大就像这样...😭#工作</p>
                                <div className="card-operate">💕 99+ &nbsp; 💬 99+</div>
                            </div>
                            <div className="card">
                                <div className="trend">02</div>
                                <p className="card-name">匿名用户:</p>
                                <p className="card-content">最近工作压力有点大，一直加班，还出了好多错被领导批评了，好崩溃...#心情</p>
                                <div className="card-operate">💕 99+ &nbsp; 💬 99+</div>
                            </div>
                            <div className="card">
                                <div className="trend">03</div>
                                <p className="card-name">匿名用户:</p>
                                <p className="card-content">家人们，谁懂啊，年纪轻轻记忆力像老人，才刚刚记下来的东西转头就忘了，怎么办？😭#记忆力</p>
                                <div className="card-operate">💕 32 &nbsp; 💬 17</div>
                            </div>
                            <div className="card">
                                <div className="trend">04</div>
                                <p className="card-name">匿名用户:</p>
                                <p className="card-content">啊我好累，我需要躺着，我不行，什么时候退休？老了老了...😞#疲惫</p>
                                <div className="card-operate">💕 99+ &nbsp; 💬 99+</div>
                            </div>
                        </div></>}
                        {messages[messages?.length - 1].needInput && 
                        <div className="search-container">
                            <textarea className="search-textarea" onChange={handleInputChange} style={{height:textareaHeight+'rem'}} />
                        </div>}
 
                    </div>
                    <div className="chat-button">
                        <div className="button-container button-grey" onClick={() => props.setChatShow(false)}>再见啦</div>
                        <div className="button-container button-blue" onClick={messages[messages?.length - 1]?.needInput ? submitQuestions : nextAnswer}>{messages[messages?.length - 1]?.needInput ? '提交问题' : '写悄悄话'}</div>
                    </div>
                </div>
            </div>}
        </>
    )
}