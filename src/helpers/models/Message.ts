import IMessage from "../types/typeMessage";

export default class Message implements IMessage {
    private readonly _text: String;
    private readonly _chatID: Number;
    private readonly _time: Date = new Date();
    private _incoming: Boolean;
    private _seen: Boolean = false;

    constructor(text: String, chatID: Number, incoming: Boolean, seen?: Boolean) {
        this._text = text;
        this._chatID = chatID;
        this._incoming = incoming;
        if (!incoming) this._seen = true;
        if (seen) this._seen = seen;
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

    set seen(value: Boolean){
        this._seen = value;
    }

    sawMessage(){
        this._seen = true;
    }
}

