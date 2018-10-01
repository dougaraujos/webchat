/**
 * IMPORTS
 */
import {Actions} from 'src/state/ducks/chat/actions.d';
import {types} from 'src/state/ducks/chat/actions.d';
import initialState from 'src/state/ducks/chat/initialstate';
import {IChatReducer} from 'src/state/ducks/chat/reducer.d';
import {IChatAttachments} from 'src/state/ducks/chat/state.d';
import {IChatState} from 'src/state/ducks/chat/state.d';
import Store from 'src/store';


/**
 * Chat actions map.
 */
const actionsMap: IChatReducer = {

    /**
     * I add an attachment to the state.
     *
     * :param state: chat state
     * :param action: action dispatched
     *
     * :returns: chat state
     */
    [types.ADD_ATTACHMENT]:
        (state: IChatState, action: Actions.IAddAttachment): IChatState =>
        {
            // get parameters
            const {attachment} = action;
            const {url} = attachment;

            // set attachments
            const attachments: IChatAttachments = {
                ...state.attachments,
                [url]: attachment
            };

            // return state
            return {
                ...state,
                attachments
            };
        },


    /**
     * I remove an attachment from state.
     *
     * :param state: chat state
     * :param action: action dispatched
     *
     * :returns: chat state
     * :rtype: IChatState
     */
    [types.REMOVE_ATTACHMENT]:
        (state: IChatState, action: Actions.IRemoveAttachment): IChatState =>
        {
            // get parameters
            const {url} = action;
            const attachments: IChatAttachments = {...state.attachments};

            // delete attachment
            delete attachments[url];

            // return state
            return {
                ...state,
                attachments
            };
        }
};


/**
 * Chat reducer.
 */
const reducer = Store.createReducer(initialState, actionsMap);


/**
 * EXPORTS
 */
export default reducer;
