import React, { useRef, useState } from "react";
import { Html } from '@react-three/drei'

import '../styles/Chat.css'


export default function ChatHtml(props) {

    const [textareaHeight,setTextareaHeight] = useState(1.2)
    const [messages, setMessages] = useState([
        { text: 'Hi,My name is Alronard,you can call me Alro,What can I do for you？', sender: 'robot', needInput:false }]
    );

    const handleInputChange = (e) => {
        console.log(e.target.value)
        const value = e?.target?.value || '';
        if (value.includes('\n')) {
            console.log('发现换行符！');
            // 在此处执行你的逻辑操作
            const height = textareaHeight + 1.2;
            setTextareaHeight(height)
          }
    }

    const queryAnswers = () => {
        const currentMsg = { text: 'Write down your questions below...', sender: 'robot', needInput:true };
        setMessages([...messages,currentMsg])
    }
    return (
        <>
            {props.chatShow && <Html center style={{transform:'translate3d(-50%, -20%, 0px)'}}>
                <div className="chat-container">
                    <div className="chat-text">
                        <div style={{textAlign:messages[messages?.length - 1].needInput ? 'left' : 'center'}}>{messages[messages?.length - 1].text}</div>
                        {messages[messages?.length - 1].needInput && <div className="search-container">
                            <textarea className="search-textarea" onChange={handleInputChange} style={{height:textareaHeight+'rem'}} />
                        </div>}
                    </div>
                    <div className="chat-button">
                        <div className="button-container button-grey">SEE YOU LATER</div>
                        <div className="button-container button-blue" onClick={queryAnswers}>{messages[messages?.length - 1].needInput ? 'SUBMIT' : 'NEXT'}</div>
                    </div>
                </div>
            </Html>}
        </>
    )
}