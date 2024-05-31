import IChat from "../types/typeChat";
import IUser from "../types/typeUser";

export default class Chat implements IChat{
    
    private static _lastId: number = 0;
    private readonly _id: number;
    private readonly _chat_with: IUser;

    constructor(chatWith: IUser){
        this._id = Chat.generateId();
        this._chat_with = chatWith;
    }

    private static generateId(): number {
        return ++Chat._lastId;
    }

    get id(): number {
        return this._id;
    }

    get chatWith(): IUser {
        return this._chat_with;
    }

}