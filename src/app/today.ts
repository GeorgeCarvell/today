import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {Task} from './task';
import {TaskList} from './task-list/task-list';

@Component({
  selector: 'today-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/today.html',
  directives: [ROUTER_DIRECTIVES, TaskList],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class TodayApp {
  todaysTasks: Task[] = [
 	{text: "Morning Time", start: 480, duration: 120},
 	{text: "Lunch", start: 610, duration: 30}
  ];

}


