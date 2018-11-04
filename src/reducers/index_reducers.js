import { combineReducers } from 'redux';

import list from './list';

let reduce = combineReducers({
    list: list

})

export default reduce;