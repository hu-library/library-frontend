import { SearchLocation } from "./searchLocation.type";

export interface InventoryBook {
    location: string;
    callNumber: string;
    title: string;
    status: string;
    barcode: number;
    lastSeen: Date;
    tempLocation: string;
    createDate: Date;
    searchCount: number;
    searchedLocations: Map<SearchLocation, boolean>;
}