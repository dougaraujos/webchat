/**
 * IMPORTS
 */
import React from 'react';
import {render} from 'react-dom';
import APP from 'src/app/settings';


/**
 * I am a application builder.
 */
class App
{
    // define fields
    component: React.ComponentClass;
    context: HTMLElement;
    target: HTMLElement;


    /**
     * I initialize myself.
     *
     * :param component: application component to render
     *
     * :returns: nothing
     */
    constructor (component: React.ComponentClass)
    {
        // store application component
        this.component = component;

        // store target context
        this.target = document.body;
    }


    /**
     * I create the context to render component.
     *
     * :returns: nothing
     */
    private createContext (): void
    {
        // create context element
        this.context = document.createElement(APP.ELEMENT);

        // set context id
        this.context.id = APP.ID;

        // append context element to target
        this.target.appendChild(this.context);
    }


    /**
     * I start the application.
     *
     * :returns: nothing
     */
    start (): void
    {
        // get application component
        const Component = this.component;

        // create context element
        this.createContext();

        // render component
        render(<Component />, this.context);
    }
}


/**
 * EXPORTS
 */
export default App;
