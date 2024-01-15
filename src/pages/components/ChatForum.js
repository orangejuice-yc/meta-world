import React, { useRef, useState, useEffect } from "react";
// import { Html } from '@react-three/drei'
// import WebSocket from 'websocket';
// import WebSocket from 'ws';

import '../styles/Chat.css'


export default function ChatHtml(props) {
    const ws = new WebSocket('ws://localhost:2333'); // 后端 WebSocket 地址
    const [textareaHeight, setTextareaHeight] = useState(1.2)
    // const [messages, setMessages] = useState([
    //     { text: 'Hi,My name is Alronard,you can call me Alro,What can I do for you？', sender: 'robot', needInput:false }]
    // );
    const [messages, setMessages] = useState([
        { text: 'Hi，亲爱的麦胞，我是Alronald，欢迎来到员工论坛，开始发表你的帖子吧！\n为您推荐最新最热的帖子...', sender: 'robot', needInput: true }]
    );
    const [socket, setSocket] = useState(null);
    const currentQuestion = useRef('')
    const [forumDetail, showForumDetail] = useState(false);

    const nextAnswer = () => {
        const currentMsg = { text: 'Write down your questions below...', sender: 'robot', needInput: true };
        setMessages([...messages, currentMsg])
    }
    useEffect(() => {
        if (ws) {
            ws.onopen = () => {
                console.log('Connected to WebSocket');
                setSocket(ws)
            };

            ws.onmessage = (event) => {
                console.log('onmessage', event)
                const bot_message = {
                    text: event.data,
                    sender: 'robot',
                    needInput: true
                }
                setMessages([...messages, bot_message]);
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
        const currentMsg = { text: '为您查询到帖子: 和600w+麦粒一起回顾麦麦农场溯源之旅！点击查看吧', sender: 'robot', needInput: false, isView: true };
        setMessages([...messages, currentMsg])
    }

    return (
        <>
            {props.chatShow && <div className="chat-parent">
                <div className="chat-container">
                    <div className="chat-text">
                        {forumDetail ? 
                        <div className="forum-detail-container">
                            <div className="forum-topic">
                                <p>Topics</p>
                                <div className="topic-container">
                                    <p>🎮 游戏</p>
                                    <p>🏃🏻‍♀️ 运动</p>
                                    <p>📈 商业</p>
                                    <p>🐱 萌宠</p>
                                    <p>📚 博客</p>
                                    <p>❤️ 情感</p>
                                    <p>📺 电视</p>
                                    <p>💼 职业</p>
                                    <p>👦🏻 育儿</p>
                                    <p>💃 舞蹈</p>
                                    <p>💄 美妆</p>
                                    <p>💌 支持</p>
                                    <p>👥 帮助</p>
                                </div>
                            </div>
                        <div className="forum-detail">
                            <p className="detail-title">猫咪迷惑行为大赏</p>
                            <div className="detail-tag">#猫咪</div>
                            <p className="detail-content"><img src='/pic/cat02.jpg' />我先来，大伙看看，这是我们家猫猪...</p>
                            <img src='/pic/cat01.jpg' />
                            <div className="detail-status">
                                <span >💖 999+</span> &nbsp;&nbsp;&nbsp;
                                <span >💬 999+</span>
                            </div>
                            <div className="add-comment">+ 添加评论</div>
                            <div className="comment-container">
                                <div className="comment-item">
                                    <p className="item-head">
                                        <img src='/pic/pet.jpg'/>
                                        <span>大猫猫</span> ·
                                        <span>13分钟前</span>
                                    </p>
                                    <p className="item-text">众所周知，猫咪是液体。 💖 88 💬 66</p>
                                </div>
                                <div className="comment-item">
                                    <p className="item-head">
                                        <img src='/pic/cat.jpg'/>
                                        <span>铁军</span> ·
                                        <span>20分钟前</span>
                                    </p>
                                    <p className="item-text">世界破破烂烂，小猫缝缝补补。 💖 99+ 💬 99+</p>
                                </div>
                                <div className="comment-item">
                                    <p className="item-head">
                                        <img src='/pic/cat02.jpg'/>
                                        <span>123只猫</span> ·
                                        <span>13分钟前</span>
                                    </p>
                                    <p className="item-text">
                                        <img src='/pic/cat02.jpg' /><br />
                                        看看我的，看看我的。💖 88 💬 66</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        : <>
                        <div className="intro-container" style={{ textAlign: messages[messages?.length - 1].needInput ? 'left' : 'left' }}>{messages[messages?.length - 1].text}</div>
                        {messages[messages?.length - 1].isView ?
                            <div className="forum-container">
                                <div className="forum-list">
                                    <div className="list-item" style={{ borderTop: 'none' }}>
                                        <div style={{ display: 'flex' }}>
                                            <img src="/pic/head.png" />
                                            <div className="qs-container">
                                                <p>和600w+麦粒一起回顾<span style={{ color: 'red' }}>麦麦农场</span>溯源之旅！</p>
                                                <p style={{ fontWeight: 400 }}>麦麦时讯 &nbsp;&nbsp;&nbsp;1天前  &nbsp;&nbsp;&nbsp; </p>

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
                                    <div className="list-item" onClick={() => showForumDetail(true)}>
                                        <div style={{ display: 'flex' }}>
                                            <img src="/pic/kat.jpg" />
                                            <div className="qs-container">
                                                <p>主人们，快来参加#猫咪迷惑行为大赏#比赛喵，评论区前三名可获赠麦当劳猫窝一只喵~🐱</p>
                                                <p style={{ fontWeight: 400 }}>家有橘猪 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; </p>

                                            </div>
                                        </div>
                                        <div className="qs-container">
                                            <p style={{ fontSize: '12px' }}>❤️ <span>999+</span></p>
                                            <p style={{ fontSize: '12px' }}>💬 <span>999+</span></p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div style={{ display: 'flex' }}>
                                            <img src="/pic/haerbin.jpg" />
                                            <div className="qs-container">
                                                <p>家人们，南方小土豆想去哈尔滨玩，需要注意什么嘛？❄️</p>
                                                <p style={{ fontWeight: 400 }}>南方小土豆 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; </p>

                                            </div>
                                        </div>
                                        <div className="qs-container">
                                            <p style={{ fontSize: '12px' }}>❤️ <span>999+</span></p>
                                            <p style={{ fontSize: '12px' }}>💬 <span>999+</span></p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div style={{ display: 'flex' }}>
                                            <img src="/pic/coffee.jpg" />
                                            <div className="qs-container">
                                                <p>Family Who Knows，附近的美食推荐？🍔</p>
                                                <p style={{ fontWeight: 400 }}>爱吃小胖 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; </p>

                                            </div>
                                        </div>
                                        <div className="qs-container">
                                            <p style={{ fontSize: '12px' }}>❤️ <span>999+</span></p>
                                            <p style={{ fontSize: '12px' }}>💬 <span>999+</span></p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div style={{ display: 'flex' }}>
                                            <img src="/pic/cat.jpg" />
                                            <div className="qs-container">
                                                <p>本周Switch游戏俱乐部联机打怪，参加的评论区报名~~🙋🏻‍♀️</p>
                                                <p style={{ fontWeight: 400 }}>迷茫小白兔 &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; </p>

                                            </div>
                                        </div>
                                        <div className="qs-container">
                                            <p style={{ fontSize: '12px' }}>❤️ <span>999+</span></p>
                                            <p style={{ fontSize: '12px' }}>💬 <span>999+</span></p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div style={{ display: 'flex' }}>
                                            <img src="/pic/code.jpg" />
                                            <div className="qs-container">
                                                <p>参加黑客松比赛的小伙伴们冒个泡，让我知道你们的进度 lol~~~</p>
                                                <p style={{ fontWeight: 400 }}>hacker &nbsp;&nbsp;&nbsp;22分钟前  &nbsp;&nbsp;&nbsp; </p>

                                            </div>
                                        </div>
                                        <div className="qs-container">
                                            <p style={{ fontSize: '12px' }}>❤️ <span>999+</span></p>
                                            <p style={{ fontSize: '12px' }}>💬 <span>999+</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        {messages[messages?.length - 1].needInput &&
                            <div className="search-container">
                                <textarea className="search-textarea" placeholder="输入你想查询的帖子吧" onChange={handleInputChange} style={{ height: textareaHeight + 'rem' }} />
                            </div>}
                            </>}
                    </div>
                    <div className="chat-button">
                        <div className="button-container button-grey" onClick={() => props.setChatShow(false)}>再见啦</div>
                        {forumDetail ? <div className="button-container button-blue" onClick={() => showForumDetail(false)}>返回</div> :<div className="button-container button-blue" onClick={messages[messages?.length - 1]?.needInput ? submitQuestions : nextAnswer}>{messages[messages?.length - 1]?.needInput ? '提交问题' : 'NEXT'}</div>}
                    </div>
                </div>
            </div>}
        </>
    )
}