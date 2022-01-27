import { Component, Input } from '@angular/core';
import { TaskType } from './shared/track.model';

@Component({
  selector: 'task-management-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() title ='';
  @Input() description ='';
  @Input() type: TaskType = TaskType.TECH;


  getTaskClassByType(): string {
    const taskTypeToClassMap = new Map<TaskType, string>([
      [TaskType.UHD, 'uhd'],
      [TaskType.SPYKE, 'spyke'],
      [TaskType.TECH, 'tech'],
    ]);
    return taskTypeToClassMap.get(this.type) ?? '';
  }
}
