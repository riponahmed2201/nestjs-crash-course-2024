import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    @UseGuards(AuthGuard)
    getUsers(@Query('sortBy') sortBy: string) {
        console.log(sortBy);
        return this.userService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
        return this.userService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.fetchUserById(id);

        if (!user) throw new HttpException('User Not Found!', HttpStatus.BAD_REQUEST);

        return user;
    }
}
