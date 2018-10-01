/**
 * IMPORTS
 */
import initialState from 'src/state/ducks/chat/initialstate';
import {IChatReducer} from 'src/state/ducks/chat/reducer.d';
import Store from 'src/store';


/**
 * Chat actions map.
 */
const actionsMap: IChatReducer = {
};


/**
 * Chat reducer.
 */
const reducer = Store.createReducer(initialState, actionsMap);


/**
 * EXPORTS
 */
export default reducer;
