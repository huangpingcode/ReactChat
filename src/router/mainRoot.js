import React from "react"
import { Route } from 'react-router-dom'

import {Main, Empty} from '../containers/Main'
import Setting from '../containers/Setting'
import Chat from '../containers/Chat'

export default ({match}) => (
	<div className="main">
		<Route component={ Main }/>
		<Route path='/chat' component={ Chat }/>
		<Route path='/setting' component={ Setting }/>
		<Route path='/main' component={ Empty }/>
	</div>
)

// export default () => (
// 	<Router>
// 		<Switch>
// 			<Route path="/will-match" component={WillMatch}/>
// 		</Switch>
// 	</Router>
// )