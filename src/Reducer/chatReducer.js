/*
 *  chat聊天
 **/
import { GOTO_CHAT, MAIN_LOGOUT } from '../common/actionTypes'
// 初始state
const initState = {
    account: ''
}

export default (state = initState, action) => {
    switch (action.type) {
        case GOTO_CHAT:
            return Object.assign({}, state, { account: action.account })
            // 注销时清空
        case MAIN_LOGOUT:
            return Object.assign({}, initState)
        default:
            return state;
    }
}