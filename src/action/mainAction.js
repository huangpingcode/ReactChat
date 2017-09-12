
export let add = () => (dispatch, getState) => {
	dispatch({
		type: "add"
	})
}

export let sub = () => (dispatch, getState) => {
	dispatch({
		type: "sub"
	})
}

export let sum = (num) => (dispatch, getState) => {
	console.log(dispatch)
	dispatch({
		type: "sum",
		count: 9
	})
}