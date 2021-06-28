/**
 * IMPORTS
 */
import {IChatState} from 'src/state/ducks/chat/state.d';
import {IReducer} from 'src/state/ducks/reducer.d';


/**
 * Chat reducer interface.
 */
export interface IChatReducer extends IReducer<IChatState>
{
}
