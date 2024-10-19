import { Injectable } from "@nestjs/common"; 
import { CreateTaskDto } from "./dto/create-task.dto";
import { updateTaskDto } from "./dto/update-task.dto";


export interface User{
    name: string;
    age:number;
}



@Injectable()
export class TasksService {

    private tasks = []

    getTasks(){
        return this.tasks;
    }

    getTask(id:number){
        return this.tasks.find(task => task.id === id);
    }

    createTask(task: CreateTaskDto){
        console.log(task);
        this.tasks.push({...task, id:this.tasks.length + 1})
        return task;
    }
    updateTask(task: updateTaskDto){
        return 'Actualizando tareas'
    }
    deleteTask(){
        return 'Borrando tareas'
    }
    updateTaskStatus(){
        return 'Actualizando el estado de una tarea'
    }
   
}