/*
 *  登录 模块的Action
 **/
import {
    LOGIN_UPDATE_STATE,
    LOGIN_UPDATE_ACCOUNT,
    LOGIN_UPDATE_SERVER
} from '../common/actionTypes'

import {
    loginApp
} from '../server/loginServer'

let loginStateAction = (loginState) => ({
    type: LOGIN_UPDATE_STATE,
    loginState: loginState
})

// 保持服务器信息
export let saveSerInfo = (serAddr, serPort) => (dispatch) => {
    dispatch({
        type: LOGIN_UPDATE_SERVER,
        serAddr: serAddr,
        serPort: serPort
    })
}

// 登录
export let login = () => (dispatch) => {
    dispatch(loginStateAction("logining"))

    return loginApp().then(() => {
            dispatch(loginStateAction("success"))
                // window.location.hash = "/main"
                // window.location.replace(window.location.href.replace('login', "main"))
        }, () => {
            dispatch(loginStateAction(""))
        })
        // .then(()=>{
        // 	console.log(99999)
        // })
}