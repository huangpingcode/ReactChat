import { combineReducers } from 'redux'

import loginInfo from './loginReducer'
import app from './appReducer'
import chat from './chatReducer'

export default combineReducers({
    app,
    chat,
    loginInfo
})