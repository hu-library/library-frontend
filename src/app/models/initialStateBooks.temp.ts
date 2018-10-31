import { Book } from './book.model';

export const startBooks: Book[] =
[
    {
        id: 'BV2061.3 .S2564 2001',
        searchCount: 1,
        priority: 9,
        searching: 'Began searching',
        title: 'The Great Omission: Fulfilling Christ\'s Commission Completely',
        author: 'Steve Saint',
        searchedPreviously: true
    },
    {
        id: 'RC440 .F58 2014',
        searchCount: 1,
        priority: 2,
        searching: 'Began searching',
        title: 'Varcarolis\' Foundations of Psychiatric Mental Health Nursing',
        author: 'N/A',
        searchedPreviously: true
    },
    {
        id: 'BS2655.S6 M33 1988',
        searchCount: 9,
        priority: 0,
        searching: 'Found',
        title: 'Pauline Churches',
        author: 'Margaret MacDonald',
        searchedPreviously: true
    },
    {
        id: 'BestSell RC394.C7 L37 2015',
        searchCount: 0,
        priority: 4,
        searching: 'Not searched for yet',
        title: 'Concussion',
        author: 'Jeanne Marie Laskus',
        searchedPreviously: false
    }
];
