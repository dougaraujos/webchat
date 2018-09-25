/**
 * IMPORTS
 */
import {ActionCreator} from 'redux';
import {Actions} from 'src/state/ducks/chat/actions.d';
import {types} from 'src/state/ducks/chat/actions.d';
import {IChatAttachment} from 'src/state/ducks/chat/state.d';


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
 * EXPORTS
 */
export default
{
    addAttachment
};
