import {Body, Controller, Delete, Get, Patch, Post, Put, Query} from '@nestjs/common'
import { TasksService } from './tasks.service';


@Controller('/tasks')
export class TaskController {

    tasksService:TasksService;

    constructor(tasksService:TasksService){
this.tasksService = tasksService;


    }

    @Get()
    getAllTasks(@Query() query:any){
        //buscar en una bd
        //peticion a otro backend o api
        console.log(query);
return this.tasksService.getTasks();
        
    }
    
    @Post()
    createTask(@Body() task:any){
        //buscar en una bd
        //peticion a otro backend o api
        
return this.tasksService.createTask(task);
        
    }

    @Put()
    updateTask(){
        //buscar en una bd
        //peticion a otro backend o api
return this.tasksService.updateTask();
        
    }
    @Delete()
    deleteTask(){
        //buscar en una bd
        //peticion a otro backend o api
return this.tasksService.deleteTask();
        
    }

    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }

   
}