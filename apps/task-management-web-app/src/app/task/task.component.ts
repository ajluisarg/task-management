import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-management-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() title ='';
  @Input() description ='';

}
