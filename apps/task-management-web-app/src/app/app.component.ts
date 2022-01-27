import { Component } from '@angular/core';
import { Track, Task, TaskType } from './task/shared/track.model';
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
export class AppComponent {
  public tracks: Track[] = [
    {
      title: 'Todo',
      id: 'todo',
      tasks: [
        {
          id: 'OB-1288',
          title: 'Up ng version',
          description: 'Update onboarding angular version',
          type: TaskType.TECH,
        },
        {
          id: 'OB-1238',
          title: 'Improve deploy',
          description: 'Enhance deploy time',
          type: TaskType.SPYKE,
        },
      ],
    },
    {
      title: 'In Progress',
      id: 'inprogress',
      tasks: [
        {
          id: '0B-1235',
          title: 'Consents requirements',
          description: 'Create component, business logic and styles',
          type: TaskType.UHD,
        },
      ],
    },
    {
      title: 'Done',
      id: 'done',
      tasks: [
        {
          id: 'OB-1289',
          title: 'Analyze wdio',
          description: 'Change testing framework',
          type: TaskType.SPYKE,
        },
      ],
    },
  ];

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
