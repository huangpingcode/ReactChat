import React from "react"

/*
 *  带清空按钮的输入框
**/
class InputBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaceholder: false,
            isShowClear: !!this.props.defaultValue
        }
    }
    clear = () => {
        this.refs.input.value = ""
        this.onChange()
    }
    onChange = () => {
        let value = this.refs.input.value
        this.setState({
            isShowClear: !!value
        })
        this.props.onChange()
    }
    render() {
        let {type, defaultValue, placeholder} = this.props
        return (
            <label className="login-input-babel">
            <input ref="input" type={type || "text"}
                    defaultValue={defaultValue}
                    onInput={this.onChange}
                    autoComplete="off"
                    placeholder={placeholder/* IE9不支持 */}
                    className="login-input" />
            {
                this.state.isShowClear ?
                <i onClick={this.clear} className="login-input-clear ion-android-cancel"/> :
                null
            }
            </label>
        )
    }
}
/*
 *  登录
**/
export class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowMore: false
        }
    }
    // more: 显示服务器端口设置
    showMroe = () => {
        this.setState({
            isShowMore: !this.state.isShowMore
        })
    }
    accountChange = () => {
        this.refs.wd.clear()
    }
    pwdOnChange = () => {
        // todo
    }
    render() {
        let {loginInfo, login} = this.props
        return (
            <div className="login-form">
                <InputBox type="text" defaultValue={loginInfo.account}
            placeholder="请输入用户名"
            onChange={this.accountChange}/>
                <InputBox ref='wd'
            type="password"
            placeholder="请输入密码"
            defaultValue={loginInfo.account ? "********" : ""}
            onChange={this.pwdOnChange} />
                <button className="login-form-login" onClick={login}>
                    登陆
                </button>
                <p className="login-form-footer">
                    <a className="login-forgot">忘记密码</a>
                    <a className="login-reg ion-ios-more" onClick={this.showMroe}/>
                </p>
                {
            this.state.isShowMore ?
                <SettingForm loginInfo={loginInfo}
                saveSerInfo={this.props.saveSerInfo}
                showMroe={this.showMroe}
                login={login}/> :
                null
            }
            </div>
        )
    }
}
/*
 *  服务器设置
**/
export class SettingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serAddr: props.loginInfo.serAddr,
            serPort: props.loginInfo.serPort
        }
    }
    save = () => {
        // TODO 域名和端口验证
        let {serAddr, serPort} = this.state
        this.props.saveSerInfo(serAddr, serPort)
    }
    serverChange = (serAddr) => {
        // todo
        this.setState({
            serAddr: serAddr,
        })
    }
    protChange = (serPort) => {
        // todo
        this.setState({
            serPort: serPort,
        })
    }
    render() {
        return (
            <div className="login-setting-form">
                <i className="btn ion-ios-undo" onClick={this.props.showMroe}/>
                <i className="btn login-set-save" onClick={this.save}>保存</i>
                <InputBox type="text"
            placeholder="服务器地址"
            defaultValue={this.props.loginInfo.serAddr}
            onChange={this.serverChange}/>
                <InputBox type="text"
            placeholder="端口号"
            defaultValue={this.props.loginInfo.serPort}
            onChange={this.protChange} />
                <a className="login-forgot" onClick={this.props.login}> 跳过登录 </a>
                <a className="login-forgot"> 微信登录 </a>
                <a className="login-forgot"> QQ登录 </a>
            </div>
        )
    }
}