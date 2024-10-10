import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {

    constructor (private userService: UsersService){

    }

    @Get('/users')
    getUsers(){
     return this.userService.getUsers();
    }
}
