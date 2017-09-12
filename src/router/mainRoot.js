import React from "react"
import { Route } from 'react-router-dom'

import Main from '../containers/Main'
import Setting from '../containers/Setting'

export default ({match}) => (
	<div className="main">
		<Route component={ Main }/>
		<Route path={`${match.url}/setting`} component={ Setting }/>
	</div>
)

// export default () => (
// 	<Router>
// 		<Switch>
// 			<Route path="/will-match" component={WillMatch}/>
// 		</Switch>
// 	</Router>
// )