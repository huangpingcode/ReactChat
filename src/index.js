/*
 *  App 入口文件，引入路由、reduce及样式文件
**/

import './style/style.css'
import './style/index.less'
import React from "react"
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from './Reducer'
import RootRouter from './router'

// redux 引入redux-thunk中间件
let middlewareList = [reduxThunk]

// 引入redux-logger跟踪action，用于调试，不需要时注释掉
import createLogger from 'redux-logger'
process && process.env.NODE_ENV === 'dev' && middlewareList.push(createLogger)

const store = createStore(
    reducers,
    applyMiddleware( ...middlewareList )
)

// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin();

let App = () => (
	<Provider store={store}>
		<RootRouter />
	</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));