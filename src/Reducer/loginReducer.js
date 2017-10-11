/*
 *  应用所有Action type
**/
import { MAIN_LOGOUT,
    LOGIN_UPDATE_STATE,
    LOGIN_UPDATE_ACCOUNT,
    LOGIN_UPDATE_SERVER } from '../common/actionTypes'
// 初始state
const initState = {
    serAddr: 'myhping.com',
    serPort: '8888',
    isSSL: false,
    account: "",
    // defaultPwd: '********',
    loginState: null
}

export default (state = initState, action) => {
    switch(action.type){
        case LOGIN_UPDATE_STATE:
            return Object.assign({}, state, {loginState: action.loginState})
        case LOGIN_UPDATE_ACCOUNT:
            return Object.assign({}, state, {account: action.account})
        case LOGIN_UPDATE_SERVER:
            return Object.assign({}, state, {serAddr: action.serAddr || state.serAddr,
                serPort: action.serPort || state.serPort})
        // // 注销时清空
        // case MAIN_LOGOUT:
        //     return Object.assign({}, initState, {})
        default:
            return state;
    }
}