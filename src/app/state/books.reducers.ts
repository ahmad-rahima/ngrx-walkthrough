import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/book.model";
import { BookApiActions } from "./book.actions";


export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BookApiActions.retrievedBookList, (_state, { books }) => books),
);
