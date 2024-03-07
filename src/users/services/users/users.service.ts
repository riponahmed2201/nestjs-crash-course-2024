import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {

    private fakeUsers = [
        { username: 'Ripon', email: 'ripon@gmail.com' },
        { username: 'Khalid', email: 'khalid@gmail.com' }
    ];

    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType) {
        return this.fakeUsers.push(userDetails);
    }

    fetchUserById(id: number) {
        // return { id, username: "Ripon", email: "ripon@gmail.com" };
        return null;
    }
}
