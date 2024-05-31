import IUser from "./typeUser"

export default interface IMessage{
    text: string
    from: IUser
    to: IUser
    dateSent: Date
}
