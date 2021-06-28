/**
 * Storage interface.
 */
export interface IStorage
{

    /**
     * I remove a value from storage.
     *
     * :param key: key to remove
     * :param callback: callback function
     *
     * :returns: return of storage removal
     */
    del (key: string, callback: Function): IStorage['del'];


    /**
     * I retrieve a value from storage.
     *
     * :param key: key to retrieve
     * :param callback: callback function
     *
     * :returns: retrieved value
     */
    get (key: string, callback: Function): IStorage['get'];


    /**
     * I put a value on storage.
     *
     * :param key: key
     * :param value: value
     * :param callback: callback function
     *
     * :returns: return of storage update
     */
    put (key: string, value: any, callback: Function): IStorage['put'];
}
