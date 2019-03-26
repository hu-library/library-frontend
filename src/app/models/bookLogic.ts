import { Book } from './book.model';
import locationsToSearch from '../config';
import { InventoryBook } from './inventoryBook.model';


export function generateMap(book: Book | InventoryBook) {
    let searchedBefore = false;
    const old = book.searchedLocations;
    book.searchedLocations = new Map();
    for (const location of locationsToSearch) {
        if (old && old[location]) {
            searchedBefore = true;
            book.searchedLocations.set(location, old[location]);
        } else {
            book.searchedLocations.set(location, false);
        }
    }
    fixSearchCount(book, searchedBefore);
}

function fixSearchCount(book: Book | InventoryBook, searchedBefore: boolean) {
    if (book.searchCount === 0 && searchedBefore) {
        book.searchCount = 1;
    }
}