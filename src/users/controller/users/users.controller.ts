import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortBy') sortBy: string) {
        console.log(sortBy);

        return [{ username: 'Ripon', email: 'ripon@gmail.com' }];
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData);
        return {};
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        console.log(id);
        return { id };
    }
}
