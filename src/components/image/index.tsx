/**
 * IMPORTS
 */
import {Component} from 'react';
import React from 'react';


/**
 * I am an image component.
 */
class Image extends Component<React.ImgHTMLAttributes<HTMLImageElement>>
{
    /**
     * I render myself.
     *
     * :returns: image element
     */
    render (): React.ReactNode
    {
        return (
            <img {...this.props} />
        );
    }
}


/**
 * EXPORTS
 */
export default Image;
