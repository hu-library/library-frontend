import { SearchLocation } from '../models/searchLocation.type';

let dev = false;

export const searchLocations: SearchLocation[] = [
    'Home',
    'Reshelving Carts',
    'Surrounding Area',
    'Circulation Desk',
    'Bestsellers',
    'Reference',
    'Reserve',
    'Christian Fiction',
    'Juvenile / EZ JUV',
    'Entire Section',
    'Switched Letters',
    'Number Mistakes',
    'Brewer Collection'
];

export default searchLocations;

export const buttonNames = [
    'Requested By Patron',
    'Ongoing',
    'Inventory',
    'Follow Up',
    'Awaiting Librarian Decision',
    'Searched But Not Found'
];

export const buttons = [
    {
        name: 'Mark as pending decision & email librarian',
        action: 'Librarian decision'
    },
    {
        name: 'Book not found, revisit next month, & email librarian',
        action: 'Look again'
    }
];

export let backendLocation = setBackend();

function setBackend() {
    return dev ? 'http://localhost:8000' : 'https://book-searching-app.herokuapp.com';
}

export function flipBackendLocation() {
    dev = !dev;
    backendLocation = setBackend();
}
