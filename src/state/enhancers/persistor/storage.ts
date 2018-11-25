/**
 * IMPORTS
 */
import {IStorage} from 'src/state/enhancers/persistor/storage.d';
import initialState from 'src/state/ducks/chat/initialstate';


/**
 * I am a storage adapter to persist the chat state.
 *
 * :param storage: storage adapter
 *
 * :returns: adapter to chat state
 */
const Storage = (storage: IStorage): IStorage => ({
    ...storage,

    /**
     * I put the chat state on storage.
     *
     * :param key: store key
     * :param state: store state
     * :param callback: callback function
     *
     * :returns: updated state
     */
    put: (key: string, state: any, callback: Function): IStorage['put'] =>
    {
        // get chat properties
        const {uid} = state.chat;

        // set chat state
        const chat = {
            ...initialState,
            uid
        };

        // put chat state on storage and return it
        return storage.put(key, {chat}, callback);
    }
});


/**
 * EXPORTS
 */
export default Storage;
