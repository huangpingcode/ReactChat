import React, {Component} from "react"
import ReactDOM, {render} from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux'
import thunk from 'redux-thunk'
import { Route, Link, Router, HashRouter } from 'react-router-dom'

import Maincpt from './containers/Main'
import { main } from './Reducer'

let mainAction = () => ( dispatch, getState ) => {
	dispatch({
		type: 'add',
		count: 1
	})
}

const initState = {
    count: 0
}
let main = (state = initState, action) => {
    switch(action.type){
        case "add":
            return Object.assign({}, state, {count: state.count+action.action});
        case "sub":
            return Object.assign({}, state, {count: state.count-1});
        case "sum":
            return Object.assign({}, state, {count: action.count});
        default:
            return state;
    }
}

@connect(
  state => ({
  	count: state.main.count
  }),
  dispatch => ({
  	dispatch: dispatch,
  	mainAction: bindActionCreators(mainAction, dispatch)
  })
)
export default class Main extends Component{
	sum = () => {
		this.props.dispatch({
			type: "sum",
			count: 9
		})
	}
	render(){
		console.log(this.props.mainAction.sum)
		return (
			<div>主界面
				{this.props.count}
				<div>
					<button onClick={this.props.mainAction.add}>add</button>
					<button onClick={this.props.mainAction.sub}>add</button>
					<button onClick={this.props.mainAction.sum}>add</button>
					<button onClick={this.sum}>fsfdsfds</button>
				</div>
			</div>
		)
	}
}




let reducers = combineReducers({
    main: main
})

const store = createStore(
    reducers,
    applyMiddleware(thunk )
)

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

class App extends Component{
	render(){
		return (
			<Provider store={store}>
			  <Maincpt />
			</Provider>
		)
	}
}

render(<App />, document.getElementById('root'));