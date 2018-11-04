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
    }
    return state;
}

export default list;