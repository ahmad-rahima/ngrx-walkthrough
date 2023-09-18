import { createReducer, on } from "@ngrx/store";
import { BooksActions } from "./books.actions";


export const initialState: ReadonlyArray<string> = [];


export const collectionReducer = createReducer(
    initialState,
    on(BooksActions.addBook, (state, { bookId }) => {
        return (state.indexOf(bookId) > -1) ? state
        : [...state, bookId];
    }),
    on(BooksActions.removeBook, (state, { bookId }) => {
        return state.filter(id => id !== bookId);
    }),
);
