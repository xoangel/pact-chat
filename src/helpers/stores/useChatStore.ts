import { defineStore } from "pinia";
import { useUserStore } from "./useUserStore";
import Chat from "./../models/Chat";
import IChat from "../types/typeChat";
import IMessage from "../types/typeMessage";
import Message from "../models/Message";

interface chatWithMessages{
    chat: IChat
    messageList: IMessage[]
}

export const useChatStore = defineStore('chats', {
    state: ()=> {
        const userStore = useUserStore();
        return{
            selectedChat: null,
            chatList: [
                {
                    chat: new Chat(userStore.getUserById(2) as any) as IChat,
                    messageList: [
                        new Message("Привет! Это мое первое сообщение", 0, true),
                        new Message("Привет! И мое тоже!", 0, false)
                    ] as IMessage[]
                },
                {
                    chat: new Chat(userStore.getUserById(3) as any) as IChat,
                    messageList: [
                        new Message("Стремный клон телеграма лол", 1, true),
                        new Message("Реально", 1, false),
                        new Message("Сегодня отличный день, чтобы пойти подышать свежим воздухом", 1, true)
                    ] as IMessage[]
                },
            ] as chatWithMessages[]
        }
    },
    getters: {
        getLastMessage: (state) => {
            return (id: number): IMessage | undefined => {
                const chat = state.chatList.find((chat) => chat.chat.id === id);
                return chat?.messageList.slice(-1)[0];
            }
        }
    }

})