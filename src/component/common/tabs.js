import React, { Component } from "react"


export class TabBar extends Component {
    constructor(props) {
        if (!window.login) {
            // window.location.replace("/login")
        }
        super(props)
    }
    render() {
        let {count, mainAction} = this.props
        return (
            <div>
                    <div></div>
                    <div></div>
                </div>
        )
    }
}

export class Tab extends Component {
    constructor(props) {
        if (!window.login) {
            // window.location.replace("/login")
        }
        super(props)
    }
    render() {
        let {count, mainAction} = this.props
        return (
            <div>
                    <div></div>
                    <div></div>
                </div>
        )
    }
}