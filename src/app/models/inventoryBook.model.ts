import { SearchLocation } from './searchLocation.type';
import locationsToSearch from '../config';

export interface InventoryBook {
    location: string;
    callNumber: string;
    title: string;
    status: string;
    lastSeen: Date;
    tempLocation: string;
    searchedLocations: Map<SearchLocation, boolean>;
    createDate: Date;
}

export function generateMapInventory(book: InventoryBook) {
    const old = book.searchedLocations;
    book.searchedLocations = new Map();
    for (const loc of locationsToSearch) {
        book.searchedLocations.set(loc, old && old[loc] ? old[loc] : false);
    }
}