/*
 *	事件订阅
 *  模仿Node.js EventEmitter.prototype.件
 *
 */ // TODO 后续优化
import { logger } from "./util"

function Emitter(maxListen){
    this.__callback = {}
    this.__onceCall = {}
    this.__MaxListen = maxListen || 5
    return this
}

// 绑定事件 返回一个key 用于移除绑定事件
Emitter.prototype.on = function( e, fun ){
    this.__callback[e] = this.__callback[e] || []
    this.__callback[e].push( fun )
    return this
}

// 绑定事件 返回一个key 用于移除绑定事件
Emitter.prototype.once = function( e, fun ){
    this.__onceCall[e] = this.__onceCall[e] || []
    this.__onceCall[e].push( fun )
    return this
}

// 触发事件
Emitter.prototype.emit = function(e, ...arg){
    if(this.__callback[e]){
        this.__callback[e].forEach((fun)=>fun.call(null, ...arg))
    }
    if( this.__onceCall[e] ){
        this.__onceCall[e].forEach((fun)=>fun.call(null, ...arg))
        delete this.__onceCall[e]
    }
    // return true
    // logger.warn("no emit")
    return this
}

Emitter.prototype.un = function(e){
    if( e ){
        this.__callback[e] = []
    }
    else{
        delete this.__callback
        this.__callback = {}
    }
    return this
}
export default Emitter