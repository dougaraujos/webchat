/**
 * IMPORTS
 */
import {compose} from 'redux';
import {Reducer} from 'redux';
import {StoreEnhancer} from 'redux';
import {mergePersistedState} from 'redux-localstorage';
import persistState from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';


/**
 * I persist the store state.
 */
class Persistor
{
    // define fields
    adapter: Function;
    key: string;
    reducer: Reducer;
    storage: Function;


    /**
     * I initialize myself.
     *
     * :param key: store key
     * :param reducer: reducer function
     * :param storage: storage adapter
     *
     * :returns: nothing
     * :rtype: undefined
     */
    constructor (key: string, reducer: Reducer, storage: Function)
    {
        // set adapter
        this.adapter = adapter(window.localStorage);

        // set key store
        this.key = key;

        // set reducer
        this.reducer = this.rehydrate(reducer);

        // set storage
        this.storage = this.composeStorage(storage);
    }


    /**
     * I compose the storage with adapter store.
     *
     * :param storage: storage adapter
     *
     * :returns: function obtained by composing the storage
     */
    private composeStorage (storage: Function): Function
    {
        return compose(storage)(this.adapter);
    }


    /**
     * I compose a reducer with rehydrated store.
     *
     * :param reducer: reducer to rehydrate
     *
     * :returns: rehydrated reducer
     */
    private rehydrate (reducer: Reducer): Reducer
    {
        return compose(mergePersistedState())(reducer);
    }


    /**
     * I create a store enhancer that persists store changes.
     *
     * :returns: created enhancer
     */
    persist (): StoreEnhancer
    {
        return persistState(this.storage, this.key);
    }
}


/**
 * EXPORTS
 */
export default Persistor;
