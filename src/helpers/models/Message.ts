import IMessage from "../types/typeMessage";

export default class Message implements IMessage {
    private readonly _text: String;
    private readonly _chatID: Number;
    private readonly _time: Date = new Date();
    private _incoming: Boolean;
    private _seen: Boolean = false;

    constructor(text: String, chatID: Number, incoming: Boolean) {
        this._text = text;
        this._chatID = chatID
        this._incoming = incoming
    }

    get text(): String{
        return this._text;
    }
    get chatID(): Number{
        return this._chatID
    }

    get seen(): Boolean{
        return this._seen;
    }

    get time(){
        return this._time    
    }

    get incoming(){
        return this._incoming
    }

    sawMessage(){
        this._seen = true;
    }
}

