const initState = {
    count: 5
}

export default (state = initState, action) => {
    switch(action.type){
        case "add":
            return Object.assign({}, state, {count: state.count+1});
        case "sub":
            return Object.assign({}, state, {count: state.count-1});
        case "sum":
            return Object.assign({}, state, {count: action.count});
        default:
            return state;
    }
}