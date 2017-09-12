import React, {Component} from "react"
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import MainRoot from './mainRoot'

import Welcome from '../containers/Welcome'
import Login from '../containers/Login'

// let test = true
// let getDefault = () => ( test ? <Redirect to='/main' /> : <Redirect to='/login' /> )
export default () => (
	<HashRouter>
		<Switch>
			<Route path="/" component={Welcome} exact />
			<Route path="/login" component={Login}/>
			<Route path="/main" component={MainRoot}/>
			{/* 这样写似乎很奇怪，但使用 Redirect 会导致main页面重新加载暂时这样避免 */}
			<Route path="/:a" component={MainRoot}/>
		</Switch>
	</HashRouter>
)

// <Route render={getDefault}/>
// export default class Root extends Component{
// 	render(){
// 		return (
// 			<HashRouter>
				

// 			</HashRouter>
// 		)
// 	}
// }

// <Route component={ Login } path="/login" />
