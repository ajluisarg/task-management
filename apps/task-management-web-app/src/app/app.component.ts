import { Component } from '@angular/core';
import { Track, Task } from './task/shared/track.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'task-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  public tracks: Track[] = [
    {
      "title": "Todo",
      "id": "todo",
      "tasks": [
        {
          "id": "first-task",
          "title": "First Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "In Progress",
      "id": "inprogress",
      "tasks": [
        {
          "id": "first-task",
          "title": "First Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "D-Done",
      "id": "ddone",
      "tasks": [
        {
          "id": "first-task",
          "title": "First Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "QA Pass",
      "id": "qapass",
      "tasks": [
        {
          "id": "first-task",
          "title": "First Task",
          "description": "This is my first task"
        }
      ]
    }
  ]
  ;

  get trackIds(): string[] {
    return this.tracks.map((track) => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Task[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given task to the target data array. This happens if
    // a task has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onTrackDrop(event: CdkDragDrop<Track[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
