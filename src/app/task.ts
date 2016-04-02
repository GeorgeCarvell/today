/*import {Component} from 'angular2/core';

@Component({
	selector: 'task',
	templateUrl: 'app/task.html',
	styleUrls: ['app/task.css'],
	providers: [],
	directives: [],
	pipes: []
})
*/
export interface Task {
  text: string, 
  start: number,
  duration: number
}