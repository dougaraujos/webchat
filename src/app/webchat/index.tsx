/**
 * IMPORTS
 */
import {Component} from 'react';
import React from 'react';
import {Provider} from 'react-redux';
import {Middleware} from 'redux';
import {Reducer} from 'redux';
import {Store as IStore} from 'redux';
import {StoreEnhancer} from 'redux';
import reducers from 'src/state/ducks';
import Persistor from 'src/state/enhancers/persistor';
import Storage from 'src/state/enhancers/persistor/storage';
import middlewares from 'src/state/middlewares';
import Store from 'src/store';


/**
 * I am a web chat application.
 */
class WebChat extends Component
{
    // define fields
    enhancer: StoreEnhancer;
    middlewares: Middleware[];
    persistor: Persistor;
    reducer: Reducer;
    store: IStore;


    /**
     * I initialize myself.
     *
     * :param props: component properties
     *
     * :returns: nothing
     */
    constructor (props: any)
    {
        // call the superclass constructor
        super(props);

        // set middlewares
        this.middlewares = middlewares;

        // set persistor
        this.persistor = new Persistor('converja-webchat',
                                       Store.combineReducers(reducers),
                                       Storage);

        // set store enhancer
        this.enhancer = this.persistor.persist();

        // set reducer
        this.reducer = this.persistor.reducer;

        // create global redux store
        this.store = Store.create(this.reducer,
                                  this.middlewares,
                                  this.enhancer);
    }


    /**
     * I render myself.
     *
     * :returns: web chat element
     */
    render (): React.ReactNode
    {
        return (
            <Provider store={this.store}>
                <div />
            </Provider>
        );
    }
}


/**
 * EXPORTS
 */
export default WebChat;
