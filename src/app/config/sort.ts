import { State } from '../store/store';
import { Book } from '../models/book.model';

function sortBooks(a: Book, b: Book) {
    if (a.urgency === b.urgency) {
        if (a.callNumber > b.callNumber) {
            return 1;
        } else if (a.callNumber < b.callNumber) {
            return -1;
        }
    }
    return b.urgency - a.urgency;
}

export function sortStateBooks(state: State) {
    state.requestedByPatronBooks.sort(sortBooks);
    state.ongoingBooks.sort(sortBooks);
    state.followUpBooks.sort(sortBooks);
    state.missingBooks.sort(sortBooks);
    state.awaitingDecisionBooks.sort(sortBooks);
}
