import { Status } from './searchStatus.type';

export interface Book {
    id: string;
    author: string;
    priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    searchCount: number;
    status: Status;
    searchedPreviously: boolean;
    title: string;
    urlID?: string;
}
