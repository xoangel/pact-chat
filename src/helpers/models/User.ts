import IUser from "../types/typeUser"

export default class User implements IUser {
    private static _lastId: number = 0;

    private readonly _id: number;
    private _login: string;
    private _firstName: string;
    private _lastName: string;
    private _phone: string;
    private _photo: string = "";
    private _verified: boolean = false;
    private _lastSeen: Date = new Date();

    constructor(login: string, firstName: string, lastName: string, phone: string, photo?: string, lastSeen?: Date) {
        this._id = User.generateId();
        this._login = login;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
        if(photo) this._photo = photo;
        if(lastSeen) this._lastSeen = lastSeen;
    }

    private static generateId(): number {
        return ++User._lastId;
    }

    get id(): number {
        return this._id;
    }

    get login(): string {
        return this._login;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get phone(): string {
        return this._phone;
    }

    get photo(): string {
        return this._photo;
    }

    get verified(): boolean{
        return this._verified;
    }

    get lastSeen(): Date{
        return this._lastSeen;
    }

    set login(value: string) {
        this._login = value;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    set phone(value: string) {
        this._phone = value;
    }

    set photo(value: string) {
        this._photo = value;
    }

    set lastSeen(date: Date){
        this._lastSeen = date;
    }

    fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    updateProfile(login: string, firstName: string, lastName: string, phone: string, photo: string): void {
        this._login = login;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
        this._photo = photo;
    }

    verify(): void {
        this._verified = true;
    }

    toString(): string {
        return `User [ID: ${this._id}, Login: ${this._login}, Name: ${this.fullName()}, Phone: ${this._phone}, Photo: ${this._photo}]`;
    }

}
