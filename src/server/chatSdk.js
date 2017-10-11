/*
 *  WebSocket 模块
**/
import Emitters from "../common/eventEmitter"
let suportWS = "WebSocket" in window

let ws;
const PROTOCOL = "react_chat_v_1.0" // protocol
let isSSL = false
let wsEmitter = new Emitters()
let sno = 0

/* 生成消息流水号 */
let getSno = () => {
    //
    if( sno === 1314 ){}
    sno+=1
}

let wsOnopen = (e) => {}
let wsOnmsg = (e) => {}
let wsOnclose = (e) => {}
let wsOnerror = (e) => {}

let initWS = (server, port) => {
    // 默认不开窍SSL
    let ws = new WebSocket( (isSSL ? "wss://" : "ws://") + server + ":" + port)
    ws.onopen = wsOnopen
    ws.onmessage = wsOnmsg
    ws.onclose = wsOnclose
    ws.onerror = wsOnerror
}

let sendMsg = ( data ) => {
    data.sno = getSno()
    let msg = JSON.stringify(data)
}

