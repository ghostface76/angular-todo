import { Eventping } from './../../../../../angular-tutorial/ToDoList/src/app/_interface/eventping';
import { Component, OnInit } from '@angular/core';
import { ToDo } from '../_interface/todo';
import { EventPing } from '../_interface/eventping';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

    public toDoShow: boolean;
    public toDoDoneShow: boolean;
    public $todos: ToDo[];
    public $todosdone: ToDo[];

    constructor() {
      this.toDoShow = true;
      this.toDoDoneShow = false;
      this.$todos = [
        {
          id: 0,
          label: 'test',
          status: false,
          position: 1
        },
        {
          id: 1,
          label: 'test 2',
          status: false,
          position: 2
        }
      ];
    }

    ngOnInit() {
    }

    public update(event: EventPing) {
      console.log(event);
    }
}
