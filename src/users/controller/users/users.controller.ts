import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return [{ username: 'Ripon', email: 'ripon@gmail.com' }];
    }

    @Post('create')
    createUser(@Body() userData: CreateUserDto) {

    }
}
