import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
@Component({
  selector: 'task-management-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public users = 0;
  public message = '';
  public messages: string[] = [];

  constructor(private chatService: ChatService){
  }
  ngOnInit(){
    this.chatService.receiveChat().subscribe((message: any) => {
      this.messages.push(message);
    });
    this.chatService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }
  addChat(){
    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }

}
