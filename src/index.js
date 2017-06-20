import React, {Component} from "react"
import ReactDOM, {render} from 'react-dom'
import * as util from './common/util.js'
var a = 5;
class Dated extends Component{
	render(){
		return <h1>react 热加载 测试：{a}</h1>
	}
}

class Test extends Component{
	render(){
		return (
			<div>
				<Dated />
			    aaasdd56
			    <input />
			</div>
		)
	}
}
render(<Test />, document.getElementById('root'));