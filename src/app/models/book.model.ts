import { Status } from './searchStatus.type';
import { Patron } from './patron.model';
import { SearchLocation } from './searchLocation.type';

export interface Book {
    author: string;
    callNumber: string;
    dateNoLongerNeeded: Date;
    electronicCopy: 'Yes' | 'No' | 'Not applicable';
    listedOnReserve: boolean;
    markedLostBelievedReturned: boolean;
    patron: Patron;
    placeHold: boolean;
    recommendReplacement: boolean;
    recommendedByProfessor: boolean;
    requestedButNotRequired: boolean;
    requiredForClass: boolean;
    requiredForSeminar: boolean;
    timeStamp: Date;
    title: string;
    urgency: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    searchCount: number;
    searchStatus: Status;
    searchedPreviously: boolean;
    urlID?: string;
    searchedLocations: Map<SearchLocation, boolean>;
}
