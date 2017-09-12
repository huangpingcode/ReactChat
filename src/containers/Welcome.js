import React, {Component} from "react"
import { getConfig } from '../server/loginServer'

export default class Welcome extends Component{
    componentWillMount(){
        setTimeout(()=>window.location.hash = "/login", 200)
        // getConfig()
        // window.location.hasd = "/main"
    }
    render(){
        return (
			<div>欢迎。。。。。</div>
        )
    }
}