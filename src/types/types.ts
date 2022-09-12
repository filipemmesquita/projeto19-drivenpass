import { SafeNotes, Users, WebCredentials } from "@prisma/client";

export type CreateUserData = Omit<Users, "id">;
export type UserData=Users;

export type CreateCredentialData=Omit<WebCredentials,"id">;
export type CredentialData=WebCredentials;

export type CreateNoteData=Omit<SafeNotes,"id">;
export type NoteData=SafeNotes;