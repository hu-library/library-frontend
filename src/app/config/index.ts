import { SearchLocation } from '../models/searchLocation.type';

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
    'Requested By Patron',          // info
    'Ongoing',                      // primary
    'Inventory',                    // info
    'Follow Up',                    // primary
    'Awaiting Librarian Decision',  // info
    'Searched But Not Found'        // primary
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

export const backendLocation = 'https://book-searching-app.herokuapp.com';
