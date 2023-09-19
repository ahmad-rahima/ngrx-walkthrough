import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/book.model";
import { BookApiActions } from "./books.actions";


export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BookApiActions.retrievedBookList, (_state, { books }) => books),
);
