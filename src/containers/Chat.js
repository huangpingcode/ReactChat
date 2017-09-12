import React, {Component} from "react"
import {Route, Prompt} from 'react-router-dom'
let a = 1
export default class Chat extends Component{
	render(){
		console.log(this.props)
		return (
			
			<div><Prompt when={this.a} message="fdsafdsaf"/>Chat{this.props.match.params.name}</div>
		)
	}
}