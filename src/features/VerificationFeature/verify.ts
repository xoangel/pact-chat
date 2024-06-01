import { useChatStore } from "../../helpers/stores/useChatStore";
import { useUserStore } from "../../helpers/stores/useUserStore";

export default function verify(id?: number ): void{
    
    if(id){
        const userStore = useUserStore();
        userStore.getUserById(id)?.verify;
    } else {
        const chatStore = useChatStore();
        chatStore.selectedChat?.chat_with.verify();
        console.log(chatStore.selectedChat?.chat_with)
    }

}

