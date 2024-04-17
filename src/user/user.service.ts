import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "User1",
            password: "admin1",
            email: "User1@gmail.com",
            age: 65
        },
        {
            username: "User2",
            password: "admin2",
            email: "User2@gmail.com",
            age: 80
        },
        {
            username: "User3",
            password: "admin3",
            email: "User3@gmail.com",
            age: 15
        }
    ]

    // get user
    getUaerByUserName(username: string): User {
        return this.users.find((user) => {
            console.log(username);            
            return user.username === username
        });
    }
}
