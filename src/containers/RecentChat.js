import React, { Component, PureComponent } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import {createHashHistory} from 'history'

import {gotoChat} from '../action/chatAction'

const INIT_RECENT_LIST_LEN = 20
// 模拟获取最近会话数据
function getList(count, startIndex = 1){
    let list = [];
    let len = count + startIndex
    for (let i = startIndex; i < len; i++) {
        list.push({
            account: 'huangping' + i,
            isGrounp: i % 4 ? false : true,
            sex: i % 2 ? 1 : 2
        });
    }
    return list;
}

// 临时这样用
let hashHistory = createHashHistory()

class Item extends PureComponent {
    render() {
        let {item, handleClick, isSelect, index} = this.props;
        let {account, sex, isGrounp} = item      
        return (
            <div className={isSelect ? 'recent-item one-px-bottom select' : 'recent-item one-px-bottom'} 
                 onClick={handleClick.bind(null, index)}>
                <i className={  
                                isGrounp ? "recent-head ion-android-people" :
                                sex === 1 ? "recent-head ion-android-person" :
                                "recent-head ion-android-contact"
                            }/>
                <p className="recent-name">{account}</p>
            </div>
        )
    }
}

@connect(
    state => ({
        count: state.app.count
    }),
    dispatch => ({
        gotoChat: bindActionCreators(gotoChat, dispatch)
    })
)
export default class RecentChat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectIndex: null,
            recentList: []
        }
        console.time()
    }
    componentWillMount(){
        this.setState({
            recentList: getList(INIT_RECENT_LIST_LEN)
        })
    }
    componentDidMount(){
        console.timeEnd()
    }
    gotoChat = (index) => {
        this.setState({
            selectIndex: index
        })
        this.props.gotoChat(this.state.recentList[index].account)
        if(hashHistory.location.pathname !== '/chat'){
            hashHistory.push('chat')
        }
        
        console.log(createHashHistory())
    }
    render() {
        let {count, mainAction} = this.props
        return (
            <div className="main-tab-pancel">
            {
                this.state.recentList.map((item, key) => <Item item={item} 
                                        index={key}
                                        isSelect={key === this.state.selectIndex}
                                        handleClick={this.gotoChat} 
                                        key={key}/>)
            }
                <p className="recent-bottom-item">我是有底线的</p>
            </div>
        )
    }
}