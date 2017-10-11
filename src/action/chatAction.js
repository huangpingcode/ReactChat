/*
 *  chat聊天 模块的Action
 **/
import { GOTO_CHAT } from '../common/actionTypes'

export let gotoChat = (account) => (dispatch) => {
	dispatch({
		type: GOTO_CHAT,
		account: account
	})
}