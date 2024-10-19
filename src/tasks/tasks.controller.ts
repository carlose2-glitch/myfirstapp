import {Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query} from '@nestjs/common'
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';


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

    @Get('/:id')
    getTask(@Param('id') id:string){

const taskFound = this.tasksService.getTask(parseInt(id));
        
if(!taskFound){
    return new NotFoundException(`Task with id ${id} not found`);
}

return taskFound;
    }
    
    @Post()
  
    createTask(@Body() task:CreateTaskDto){
        //buscar en una bd
        //peticion a otro backend o api
        
return this.tasksService.createTask(task);
        
    }

    @Put()
    updateTask(@Body() task: updateTaskDto){
        //buscar en una bd
        //peticion a otro backend o api
return this.tasksService.updateTask(task);
        
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