/**
 * IMPORTS
 */
import {IChatState} from 'src/state/ducks/chat/state.d';


/**
 * Chat initial state.
 */
const initialState: IChatState = {
    attachments: {},
    messages: {
        byId: {},
        lastId: 0,
        prefix: ''
    },
    uid: ''
};


/**
 * EXPORTS
 */
export default initialState;
