/**
 * IMPORTS
 */
import {IStorage} from 'src/state/enhancers/persistor/storage.d';


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
        return storage.put(key, state, callback);
    }
});


/**
 * EXPORTS
 */
export default Storage;
