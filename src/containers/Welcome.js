import React, {
    Component
} from "react"
import {
    getConfig
} from '../server/loginServer'

export default class Welcome extends Component {
    componentWillMount() {
        setTimeout(() => this.props.history.replace('login'), 1000)
            // getConfig()
            // window.location.hasd = "/main"
    }
    render() {
        return (
            <div className="welcome">Welcome</div>
        )
    }
}