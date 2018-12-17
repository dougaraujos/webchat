/**
 * IMPORTS
 */
import {MapDispatchToPropsParam} from 'react-redux';
import {MapStateToPropsParam} from 'react-redux';
import {MergeProps} from 'react-redux';
import {Options} from 'react-redux';
import {connect as originalConnect} from 'react-redux';


/**
 * Enhancer interface.
 */
type enhancer<TInjectedProps, TNeedsProps> =
    <TComponent extends React.ComponentType<TInjectedProps & TNeedsProps>>
        (component: TComponent)=> TComponent;


/**
 * Connect interface.
 */
interface IConnect {
    <TState = {}, TDispatch = {}, TOwnProps = {}>
    (
        mapStateToProps?: MapStateToPropsParam<TState, TOwnProps, any>,
        mapDispatchToProps?: MapDispatchToPropsParam<TDispatch, TOwnProps>
    ): enhancer<TState & TDispatch,
                                           TOwnProps>;

    <TState = {}, TDispatch = {}, TOwnProps = {}, TMergedProps = {}>
    (
        mapStateToProps?: MapStateToPropsParam<TState, TOwnProps, any>,
        mapDispatchToProps?: MapDispatchToPropsParam<TDispatch, TOwnProps>,
        mergeProps?: MergeProps<TState, TDispatch, TOwnProps, TMergedProps>,
        options?: Options<TState, TOwnProps, TMergedProps>
    ): enhancer<TMergedProps, TOwnProps>;

}


/**
 * EXPORTS
 */
export const connect = originalConnect as IConnect;
