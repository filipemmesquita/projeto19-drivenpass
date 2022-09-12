import { Cards, SafeNotes, Users, WebCredentials } from "@prisma/client";

export type CreateUserData = Omit<Users, "id">;
export type UserData=Users;

export type CreateCredentialData=Omit<WebCredentials,"id">;
export type CredentialData=WebCredentials;
export type CredentialDataArray=Omit<WebCredentials,"password">

export type CreateNoteData=Omit<SafeNotes,"id">;
export type NoteData=SafeNotes;

export type CreateCardData=Omit<Cards,"id">;
export type CardData=Cards
export type CardDataArray=Omit<Cards, "password" | "cvc">;