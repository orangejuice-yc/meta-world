import React, { useRef, useState } from "react";
import { Html } from '@react-three/drei'

import '../styles/Chat.css'

export default function ChatHtml(props) {

    return (
        <>
            {props.chatShow && <Html center style={{transform:'translate3d(-50%, 50%, 0px)'}}>
                <div className="chat-container">
                    <div className="chat-text">
                        Hi,My name is Alronard,you can call me Alro,What can I do for you?
                    </div>
                    <div className="chat-button">
                        <div className="button-container button-grey">SEE YOU LATER</div>
                        <div className="button-container button-blue">TELL ME MORE</div>
                    </div>
                </div>
            </Html>}
        </>
    )
}