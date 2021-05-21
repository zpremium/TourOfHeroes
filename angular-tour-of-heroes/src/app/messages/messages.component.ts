import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public MessageService:MessageService) {
    //La propiedad messageService debe ser pública porque está a punto de unirse a ella en la plantilla.
   }

  ngOnInit(): void {
  }

}
