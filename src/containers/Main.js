import React, {Component} from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mainAction from '../action/mainAction'

@connect(
    state => ({
        count: state.app.count
    }),
    dispatch => ({
        dispatch: dispatch,
        mainAction: bindActionCreators(mainAction, dispatch)
    })
)
export default class Main extends Component{
    constructor(props) {
        if(!window.login){
            // window.location.replace("/login")
        }
        super(props)
    }
    setting = () => {
        this.props.dispatch({
            type: "sum",
            count: parseInt("this.refs.input.value") || 10
        })
    }
    render(){
        let { count, mainAction } = this.props
        return (
			<div>主界面
				<div>
					<p>count: { count }</p>
					<button onClick={ mainAction.add }>加一</button>
					<button onClick={ mainAction.sub }>减一</button>
					<p>
						<input ref="input" type="number"/>
						<button onClick={this.setting}>设置</button>
					</p>
				</div>
			</div>
        )
    }
}