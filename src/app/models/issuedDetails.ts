import { Book } from "./book";
import { User } from "./user";

export class IssuedDetails{
    issuedId!: number;
    userId!: number;
    isbn!: number;
    user: User | null = null;
    book: Book | null = null;
}