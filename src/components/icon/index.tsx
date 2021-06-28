/**
 * IMPORTS
 */
import {Component} from 'react';
import React from 'react';
import IconTypes from 'src/components/icon/icontypes';
import {types} from 'src/components/icon/icontypes.d';
import {IProps} from 'src/components/icon/index.d';


/**
 * I am an icon component.
 */
class Icon extends Component<IProps>
{
    // define default properties
    static defaultProps: IProps = {
        icon: null,
        type: types.FONTAWESOME
    };


    /**
     * I render myself.
     *
     * :returns: icon component
     */
    render (): React.ReactNode
    {
        // get properties
        const {type, ...props} = this.props;

        // get icon component
        const Component = IconTypes[type];

        // return icon component
        return (
            <Component {...props} />
        );
    }
}


/**
 * EXPORTS
 */
export default Icon;
