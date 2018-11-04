let initialState = [
    {id: 1, title: 'Test1', desc: 'more Test1'},
    {id: 2, title: 'Test2', desc: 'more Test2'}
]

function list (state = initialState, action){
    if (action.type === 'LIST_ADD') {
    	let maxId = 0;
    	for (let element of state) {
    		if (element.id > maxId) {
    			maxId = element.id;
    		}
    	}
  	return [].concat(state, [{id:maxId + 1, title: action.title, desc: action.desc}])
    };
    if (action.type === 'LIST_DEL') {
    	const newState = [...state];
    	const index = state.findIndex(element => element.id === action.id);
    	newState.splice(index, 1);
    	return newState;
    };

    return state;
}

export default list;