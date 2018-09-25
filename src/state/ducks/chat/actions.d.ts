/**
 * IMPORTS
 */
import {Action} from 'redux';
import {IChatAttachment} from 'src/state/ducks/chat/state.d';


/**
 * I list the possible actions types of chat.
 */
export const enum types
{
    ADD_ATTACHMENT = 'chat/ADD_ATTACHMENT',
    REMOVE_ATTACHMENT = 'chat/REMOVE_ATTACHMENT'
}


/**
 * I am a namespace to actions interfaces.
 */
export namespace Actions
{

    /**
     * I am an interface to an action that adds an attachment.
     */
    export interface IAddAttachment extends Action
    {
        attachment: IChatAttachment;
        type: types.ADD_ATTACHMENT;
    }


    /**
     * I am an interface to an action that removes an attachment.
     */
    export interface IRemoveAttachment extends Action
    {
        url: IChatAttachment['url'];
        type: types.REMOVE_ATTACHMENT;
    }
}
