/**
 * IMPORTS
 */
import {Reducer} from 'redux';


/**
 * Reducer interface
 */
export interface IReducer<S = {}>
{
    [key: string]: Reducer<S>;
}
