/**
 * IMPORTS
 */
import {ActionCreator} from 'redux';
import {Actions} from 'src/state/ducks/chat/actions.d';
import {types} from 'src/state/ducks/chat/actions.d';
import {IChatAttachment} from 'src/state/ducks/chat/state.d';
import {IChatConnection} from 'src/state/ducks/chat/state.d';
import {IChatMessage} from 'src/state/ducks/chat/state.d';


/**
 * I am an action creator to add an attachment.
 *
 * :param attachment: attachment to be added
 *
 * :returns: action
 */
const addAttachment: ActionCreator<Actions.IAddAttachment> =
    (attachment: IChatAttachment): Actions.IAddAttachment => ({
        attachment,
        type: types.ADD_ATTACHMENT
    });


/**
 * I am an action creator to set connection properties.
 *
 * :param message: connection message
 *
 * :returns: action
 */
const onConnect: ActionCreator<Actions.IConnect> =
    (message: IChatConnection): Actions.IConnect => ({
        message,
        type: types.CONNECT
    });


/**
 * I am an action creator to incoming message.
 *
 * :param message: incoming message
 *
 * :returns: action
 */
const onIncomingMessage: ActionCreator<Actions.IIncomingMessage> =
    (message: IChatMessage): Actions.IIncomingMessage => ({
        message,
        type: types.INCOMING_MESSAGE
    });


/**
 * I am an action creator to outgoing message.
 *
 * :param message: outgoing message
 *
 * :returns: action
 */
const onOutgoingMessage: ActionCreator<Actions.IOutgoingMessage> =
    (message: IChatMessage): Actions.IOutgoingMessage => ({
        message,
        type: types.OUTGOING_MESSAGE
    });


/**
 * I am an action creator to remove an attachment.
 *
 * :param url: attachment url to be removed
 *
 * :returns: action
 */
const removeAttachment: ActionCreator<Actions.IRemoveAttachment> =
    (url: IChatAttachment['url']): Actions.IRemoveAttachment => ({
        type: types.REMOVE_ATTACHMENT,
        url
    });


/**
 * EXPORTS
 */
export default
{
    addAttachment,
    onConnect,
    onIncomingMessage,
    onOutgoingMessage,
    removeAttachment
};
