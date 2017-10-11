// import {Route, Prompt} from 'react-router-dom'
import React, { Component, PureComponent } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as mainAction from '../action/mainAction'

@connect(
    state => ({
        account: state.chat.account
    }),
    dispatch => ({
        dispatch: dispatch,
        mainAction: bindActionCreators(mainAction, dispatch)
    })
)
export default class RecentChat extends Component {
	constructor(props) {
        super(props)
        console.time()
    }
    componentDidMount(){
    	console.timeEnd()
    }
    render() {
        let {count, mainAction} = this.props
        return (
            <div className="main-content">
            	<h3>{this.props.account}</h3>
            </div>
        )
    }
}

// let a = 1
// export default class Chat extends Component{
// 	render(){
// 		console.log(this.props)
// 		return (
			
// 			<div className="main-content"><Prompt when={this.a} message="fdsafdsaf"/>Chat{this.props.match.params.name}</div>
// 		)
// 	}
// }