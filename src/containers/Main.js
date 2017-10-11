import React, { Component, PureComponent } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { History } from 'react-router'

import { TabBar, tab } from '../component/common/tabs'
import RecentChat from './RecentChat'

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
export class Main extends Component {
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
                    <div className="main-tab-bar"></div>
                    <RecentChat />
                </div>
            )
        }
    }
export let Empty = () => <div className="main-content main-empty" />