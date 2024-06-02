export default interface IUser {
    readonly id: number;
    login: string;
    firstName: string;
    lastName: string;
    phone: string;
    photo?: string;
    verified: boolean
    lastSeen?: Date

    fullName(): string;
    updateProfile(login: string, firstName: string, lastName: string, phone: string, photo: string): void;
    toString(): string;
    verify(): void;
}