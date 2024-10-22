import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
@Controller()
export class HelloController {
    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response){
        response.status(200).json({
            message: 'Hello world',
        })
    }

@Get('new')
@HttpCode(201)
somethingNew(){
    return 'Something new'
}

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not found';
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return 'Error router';
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe)num: number){

        return num + 14;

    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean){

        return status;
    }

    @Get('greet')
    greet(@Query(ValidateuserPipe) query:{name: string, age: number}){
return `Hello ${query.name}, you are ${query.age} years old`;
    }
}
