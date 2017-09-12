import React, {Component} from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, saveSerInfo } from '../action/loginAction'
import { LoginForm } from '../Component/login/loginForm'

@connect(
    state => ({
        loginInfo: state.loginInfo,
    }),
    dispatch => ({
        dispatch: dispatch,
        login: bindActionCreators(login, dispatch),
        saveSerInfo: bindActionCreators(saveSerInfo, dispatch)
    })
)
export default class Login extends Component{
    render(){
        let { loginInfo, login, saveSerInfo } = this.props
        return (
			<div className="login-bg">
				<div>
					<p className="login-h1">ReactChat</p>
					<p className="login-h4">A React、Redux & WebSocket Demo</p>
					<LoginForm loginInfo={ loginInfo } login={ login } saveSerInfo={saveSerInfo}/>
				</div>
                { loginInfo.loginState === "logining" &&
				<div className="login-logining">
					<i className="login-logining-bg"/>
					<p className="login-process"><i/><i/><i/></p>
				</div>
                }
			</div>
        )
    }
}