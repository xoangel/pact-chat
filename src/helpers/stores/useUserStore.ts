import { defineStore } from "pinia";
import User from "./../models/User";
import IUser from "../types/typeUser";

export const useUserStore = defineStore('users', {
state: ()=> ({
    userList : [
        new User("xoangel", "Егор", "Головин", "89994203161"),
        new User("iluxa228rus", "Илья", "Дулин", "89998906541", "/user/avatars/1.jpg"),
        new User("alexosh", "Александр", "Ошурков", "89990001100", "/user/avatars/2.jpg", new Date(2024, 5, 2)),
        new User("danyaproger", "Даниил", "Краев", "891492822288", "/user/avatars/3.jpg", new Date(2024, 4, 2)),
        new User("disagitarist", "Денис", "Чернышов", "89527861324", "/avatars/4.png"),
        new User("kirillewa", "Кирилл", "Сетевик", "89149220987", "/avatars/5.png"),
        new User("topalina", "Алина", "Агеева", "89672345164", "/avatars/6.jpg"),
        new User("amaliaoil", "Амалия", "Чубарова", "89994203161", "/avatars/7.jpg"),
        new User("polinaprincess", "Полина", "Кунгурова", "89994203162", "/avatars/8.jpg"),
    ] as User[]
}),

getters: {
    getUsersWithoutMe: (state)=>state.userList.slice(1),
    
    getUserById: (state) => {
        return (id: number): IUser | undefined => state.userList.find((user: IUser) => user.id === id)
    }
}

})