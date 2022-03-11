import type { Stream } from 'stream';

export declare interface Options {
    parser?: string,
    timeout?: number;
    headers?: { [key: string]: string }
}

export default (path: string, options: Options) => Stream.Readable