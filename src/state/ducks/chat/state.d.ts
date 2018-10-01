/**
 * IMPORTS
 */
import MessageTypes from 'src/settings/messagetypes';


/**
 * Chat attachment interface.
 */
export interface IChatAttachment
{
    name: string;
    type: string;
    url: string;
}


/**
 * Chat attachments interface.
 */
export interface IChatAttachments
{
    [key: string]: IChatAttachment;
}


/**
 * Chat connection interface.
 */
export interface IChatConnection
{
    prefix: string;
    uid: string;
}


/**
 * Chat message interface.
 */
export interface IChatMessage
{
    body: string;
    originalId: string;
    outgoing: boolean;
    timestamp: number;
    type: MessageTypes;
}


/**
 * Chat messages interface.
 */
export interface IChatMessages
{
    byId: {
        [key: string]: IChatMessage;
    };
    lastId: number;
    prefix: string;
}


/**
 * Chat state interface.
 */
export interface IChatState
{
    attachments: IChatAttachments;
    messages: IChatMessages;
    uid: string;
}
