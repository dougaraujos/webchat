/**
 * IMPORTS
 */
import {findIconDefinition} from '@fortawesome/fontawesome-svg-core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {Component} from 'react';
import React from 'react';
import {IProps} from 'src/components/icon/index.d';


/**
 * I am a FontAwesome icon component.
 */
class FontAwesomeIcon extends Component<IProps>
{
    // define default prpoerties
    static defaultProps: IProps = {
        icon: '',
        size: 'lg'
    };


    /**
     * I render myself.
     *
     * :returns: FontAwesome icon
     */
    render (): React.ReactNode
    {
        // get properties
        const {className} = this.props;
        const {icon} = this.props;
        const {size} = this.props;

        // get icon definition
        const definition = findIconDefinition(icon);

        // return icon
        return (
            <Icon className={className} icon={definition} size={size} />
        );
    }
}


/**
 * EXPORTS
 */
export default FontAwesomeIcon;
