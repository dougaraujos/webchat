/**
 * IMPORTS
 */
import {Component} from 'react';
import React from 'react';
import {IProps} from 'src/components/text/index.d';
import styles from 'src/components/text/styles.scss';


/**
 * I am a text component.
 */
class Text extends Component<IProps>
{
    // define default properties
    static defaultProps: IProps = {
        body: '',
        multiline: true
    };


    /**
     * I render myself.
     *
     * :returns: body text
     */
    render (): React.ReactNode
    {
        // get properties
        const {body} = this.props;
        const {multiline} = this.props;

        // should not render multilines: return body
        if (multiline === false)
        {
            return body;
        }

        // should render multilines: return multilines text
        return (
            <span className={styles.text}>
                {body}
            </span>
        );
    }
}


/**
 * EXPORTS
 */
export default Text;
