import { Status } from './searchStatus.type';

export interface Book {
    id: string;
    searching: Status;
    urlID?: string;
}
