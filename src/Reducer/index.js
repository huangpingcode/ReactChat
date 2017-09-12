import { combineReducers } from 'redux'

import loginInfo from './loginReducer'
import app from './appReducer'

export default combineReducers({
    app,
    loginInfo
})