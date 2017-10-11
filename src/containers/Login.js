import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// 登录action
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
export default class Login extends Component {
        login = (serAddr, serPort) => {
            console.log(this.props.history);
            this.props.login(serAddr, serPort)
                .then(() => this.props.history.replace('main'),
                    () => console.error(5))
        }
        render() {
            let {loginInfo, saveSerInfo} = this.props
            return (
                <div className="login-bg">
                <div>
                    div 
                    <p className="login-h1">ReactChat</p>
                <p className="login-h4">A React、Redux & WebSocket Demo</p>
                    <LoginForm loginInfo={ loginInfo } login={ this.login } saveSerInfo={saveSerInfo}/>
                </div>
                {loginInfo.loginState === "logining" &&
                <div className="login-logining">
                <i className="login-logining-bg"/>
                    <p className="login-process"><i/><i/><i/></p>
                </div>
                }
            </div>
            )
        }
    }