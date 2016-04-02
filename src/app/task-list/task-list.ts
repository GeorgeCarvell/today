import {Component, Input} from 'angular2/core';
import {Task} from '../task';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class TaskList {

  @Input() tasks: Task[];

}
