import IMessage from "./typeMessage"
import IUser from "./typeUser"

export default interface IChat{
    id: number
    chat_with: IUser
    messages: Array<IMessage>
}