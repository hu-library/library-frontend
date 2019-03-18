import { SearchLocation } from '../models/searchLocation.type';

const dev = true;

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

export const backendLocation = dev ? 'http://localhost:8000' : 'https://book-searching-app.herokuapp.com';
